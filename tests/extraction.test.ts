import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractHtml, extractPdf, normalizeSourceUrl, safeSourceUrl, toReviewMarkdown } from '../scripts/source-extraction.ts';

test('Google Doc editor URLs become public HTML export URLs', () => {
  assert.equal(normalizeSourceUrl('https://docs.google.com/document/d/abc_123-xyz/edit?tab=t.0#heading'), 'https://docs.google.com/document/d/abc_123-xyz/export?format=html');
  assert.throws(() => normalizeSourceUrl('file:///etc/passwd'));
});

test('HTML extraction keeps headings, tables and images in order without page chrome', () => {
  const source = extractHtml('<title>Example</title><nav>Ignore me</nav><main><h1>Starter</h1><p>First paragraph</p><img src="/map.png" alt="Map"><table><tr><th>Area</th></tr><tr><td>Field</td></tr></table><ul><li><p>Bring water</p></li></ul><script>bad()</script></main>', 'https://example.com/guide');
  assert.equal(source.title, 'Starter');
  assert.deepEqual(source.blocks.map(b => b.type), ['heading', 'paragraph', 'image', 'table', 'list-item']);
  assert.equal(source.images[0].src, 'https://example.com/map.png');
  assert.deepEqual(source.blocks[3].rows, [['Area'], ['Field']]);
  assert.ok(!JSON.stringify(source).includes('bad()'));
  assert.ok(!JSON.stringify(source).includes('Ignore me'));
});

test('source links exclude executable URLs and unwrap Google redirects', () => {
  const source = extractHtml('<p><a href="javascript:alert(1)">bad</a><a href="/item">good</a><a href="https://www.google.com/url?q=https%3A%2F%2Fexample.org%2Fmap">map</a></p>', 'https://example.com/');
  assert.deepEqual(source.links, ['https://example.com/item', 'https://example.org/map']);
  assert.equal(safeSourceUrl('data:text/html,test'), null);
});

test('review copy escapes MDX and HTML rather than treating source text as code', () => {
  const source = extractHtml('<h1>Test</h1><p>{dangerous()} &lt;script&gt;</p>');
  const markdown = toReviewMarkdown(source);
  assert.ok(markdown.includes('&#123;dangerous()&#125;'));
  assert.ok(markdown.includes('&lt;script&gt;'));
  assert.ok(markdown.includes('not approved for publication'));
});

function minimalPdf(text: string): Uint8Array {
  const stream = `BT /F1 12 Tf 20 100 Td (${text}) Tj ET`;
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 300 200] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  for (const [i, obj] of objects.entries()) { offsets.push(Buffer.byteLength(pdf)); pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`; }
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n${offsets.slice(1).map(offset => `${String(offset).padStart(10, '0')} 00000 n \n`).join('')}trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return new TextEncoder().encode(pdf);
}

test('PDF import extracts text with source page references', async () => {
  const source = await extractPdf(minimalPdf('A beginner guide with selectable text.'));
  assert.equal(source.pageCount, 1);
  assert.match(source.blocks[0].text, /beginner guide/);
  assert.equal(source.blocks[0].page, 1);
  assert.ok(!source.warnings.some(w => w.includes('require OCR')));
});

test('image-only or empty PDF pages are flagged for OCR', async () => {
  const source = await extractPdf(minimalPdf(''));
  assert.ok(source.warnings.some(w => w.includes('require OCR')));
});
