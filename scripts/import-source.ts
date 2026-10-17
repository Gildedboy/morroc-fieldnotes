import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { parseArgs } from 'node:util';
import { extractHtml, extractPdf, normalizeSourceUrl, toReviewMarkdown } from './source-extraction.ts';

const { values } = parseArgs({ options: {
  input: { type: 'string' }, url: { type: 'string' }, output: { type: 'string' },
  author: { type: 'string' }, title: { type: 'string' }, help: { type: 'boolean' },
} });

if (values.help || (!values.input && !values.url) || !values.output) {
  console.log('Usage: npm run import:source -- --input <file.html|file.pdf> --output imports/<slug> [--url <original-url>] [--author <name>] [--title <title>]');
  console.log('Or omit --input to fetch a public webpage / Google Doc / PDF from --url.');
  process.exit(values.help ? 0 : 1);
}

try {
  const fetchedUrl = values.url ? normalizeSourceUrl(values.url) : undefined;
  let bytes: Uint8Array;
  if (values.input) bytes = new Uint8Array(await readFile(resolve(values.input)));
  else {
    const response = await fetch(fetchedUrl!, { signal: AbortSignal.timeout(30_000) });
    if (!response.ok) throw new Error(`Source request returned HTTP ${response.status}. Check public access.`);
    if (Number(response.headers.get('content-length')) > 50_000_000) throw new Error('Source exceeds the 50 MB import limit.');
    bytes = new Uint8Array(await response.arrayBuffer());
  }
  if (bytes.length > 50_000_000) throw new Error('Source exceeds the 50 MB import limit.');
  const isPdf = new TextDecoder().decode(bytes.slice(0, 5)) === '%PDF-';
  const source = isPdf ? await extractPdf(bytes) : extractHtml(new TextDecoder().decode(bytes), fetchedUrl);
  if (values.title) source.title = values.title;
  const output = resolve(values.output);
  const importsRoot = resolve('imports');
  if (output === importsRoot || !output.startsWith(`${importsRoot}/`)) throw new Error('Output must be a new subdirectory of ignored imports/.');
  await mkdir(dirname(output), { recursive: true });
  await mkdir(output); // Refuse to overwrite a previous import.
  await mkdir(join(output, 'assets'));
  for (const [i, image] of source.images.entries()) {
    const match = image.src.match(/^data:image\/(png|jpeg|gif|webp);base64,([A-Za-z0-9+/=\s]+)$/);
    if (!match) continue;
    const extension = match[1] === 'jpeg' ? 'jpg' : match[1];
    image.filename = `assets/image-${String(i + 1).padStart(3, '0')}.${extension}`;
    await writeFile(join(output, image.filename), Buffer.from(match[2], 'base64'));
    image.src = image.filename;
  }
  const manifest = {
    originalUrl: values.url ?? null, inputFile: values.input ?? null,
    author: values.author ?? 'Not yet identified', importedAt: new Date().toISOString(),
    sourceUpdated: null, reuseStatus: 'pending-review', editorialStatus: 'unreviewed', ...source,
  };
  await writeFile(join(output, 'document.json'), JSON.stringify(manifest, null, 2));
  await writeFile(join(output, 'review.md'), toReviewMarkdown(source));
  console.log(`Imported ${source.blocks.length} blocks, ${source.images.length} images, and ${source.links.length} links into ${output}`);
  for (const warning of source.warnings) console.log(`Review: ${warning}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : 'Source import failed.');
  process.exitCode = 1;
}
