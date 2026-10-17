import { load } from 'cheerio';
import { extractText, extractLinks, getDocumentProxy } from 'unpdf';

export interface SourceBlock {
  type: 'heading' | 'paragraph' | 'list-item' | 'table' | 'image' | 'page';
  text: string;
  level?: number;
  page?: number;
  rows?: string[][];
}
export interface SourceImage { src: string; alt: string; filename?: string }
export interface ExtractedSource {
  title: string;
  blocks: SourceBlock[];
  links: string[];
  images: SourceImage[];
  warnings: string[];
  pageCount?: number;
}

export function safeSourceUrl(value: string, base?: string): string | null {
  try {
    const url = new URL(value, base);
    return ['https:', 'http:', 'mailto:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}

export function normalizeSourceUrl(value: string): string {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('Sources must use HTTP or HTTPS.');
  if (url.hostname === 'docs.google.com') {
    const match = url.pathname.match(/^\/document\/d\/([A-Za-z0-9_-]+)(?:\/|$)/);
    if (match) return `https://docs.google.com/document/d/${match[1]}/export?format=html`;
  }
  url.hash = '';
  return url.href;
}

const plain = (text: string) => text.replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();

export function extractHtml(html: string, sourceUrl?: string): ExtractedSource {
  const $ = load(html);
  $('script,style,noscript,nav,header,footer,iframe,form,template').remove();
  const region = $('main').first().length ? $('main').first() : $('article').first().length ? $('article').first() : $('body');
  const blocks: SourceBlock[] = [];
  const images: SourceImage[] = [];
  const links = new Set<string>();
  region.find('a[href]').each((_, node) => {
    let href = $(node).attr('href') ?? '';
    // Google export sometimes wraps outbound links in a google.com redirect.
    try {
      const candidate = new URL(href, sourceUrl);
      if (candidate.hostname === 'www.google.com' && candidate.pathname === '/url') href = candidate.searchParams.get('q') ?? href;
    } catch { /* Keep malformed links out of the manifest. */ }
    const safe = safeSourceUrl(href, sourceUrl);
    if (safe) links.add(safe);
  });
  region.find('h1,h2,h3,h4,h5,h6,p,li,table,img').each((_, node) => {
    const el = $(node);
    const tag = node.tagName;
    if (el.parents('table').length || (tag === 'p' && el.parents('li').length)) return;
    const text = plain(el.text());
    if (tag === 'img') {
      const raw = el.attr('src') ?? '';
      const src = raw.startsWith('data:image/') ? raw : safeSourceUrl(raw, sourceUrl);
      if (src) {
        const alt = el.attr('alt') ?? '';
        images.push({ src, alt });
        blocks.push({ type: 'image', text: String(images.length - 1) });
      }
    } else if (tag === 'table') {
      const rows = el.find('tr').toArray().map(row => $(row).children('th,td').toArray().map(cell => plain($(cell).text())));
      if (rows.length) blocks.push({ type: 'table', text: rows.map(row => row.join(' | ')).join('\n'), rows });
    } else if (text && /^h[1-6]$/.test(tag)) blocks.push({ type: 'heading', level: Number(tag[1]), text });
    else if (text) blocks.push({ type: tag === 'li' ? 'list-item' : 'paragraph', text });
  });
  return {
    title: plain(region.find('h1').first().text() || $('title').text()) || 'Untitled source',
    blocks, links: [...links], images,
    warnings: ['Imported material requires editorial and reuse review before publication.', 'Remote image URLs are inventoried, not automatically downloaded.'],
  };
}

export async function extractPdf(data: Uint8Array): Promise<ExtractedSource> {
  const pdf = await getDocumentProxy(data);
  try {
    if (pdf.numPages > 500) throw new Error('PDF exceeds the 500-page import limit. Split it before importing.');
    const { text, totalPages } = await extractText(pdf, { mergePages: false });
    const { links } = await extractLinks(pdf);
    const pages = typeof text === 'string' ? [text] : text;
    const emptyPages = pages.flatMap((page, i) => page.trim().length < 20 ? [i + 1] : []);
    return {
      title: 'PDF source', pageCount: totalPages,
      blocks: pages.map((page, i) => ({ type: 'page', text: page.trim(), page: i + 1 })),
      links: links.flatMap(link => { const safe = safeSourceUrl(link); return safe ? [safe] : []; }), images: [],
      warnings: [
        'Review multi-column reading order and tables against the original PDF.',
        'PDF artwork is not extracted automatically; review and export relevant figures separately.',
        ...(emptyPages.length ? [`Pages ${emptyPages.join(', ')} have little extractable text and may require OCR.`] : []),
      ],
    };
  } finally { await pdf.loadingTask.destroy(); }
}

const escapeMarkdown = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;').replace(/([`*_[\]\\])/g, '\\$1');

export function toReviewMarkdown(source: ExtractedSource): string {
  const lines = [`# ${escapeMarkdown(source.title)}`, '> REVIEW COPY — not approved for publication. Check accuracy, attribution, and reuse terms.'];
  for (const block of source.blocks) {
    if (block.type === 'image') {
      const image = source.images[Number(block.text)];
      lines.push(image?.filename ? `![${escapeMarkdown(image.alt || 'Source image; description needed')}](${image.filename})` : '[Remote source image — see document.json]');
    } else if (block.type === 'heading') lines.push(`${'#'.repeat(block.level ?? 2)} ${escapeMarkdown(block.text)}`);
    else if (block.type === 'page') lines.push(`## Source page ${block.page}\n\n${escapeMarkdown(block.text)}`);
    else if (block.type === 'table' && block.rows?.length) {
      const rows = block.rows.map(row => `| ${row.map(cell => escapeMarkdown(cell).replace(/\|/g, '\\|')).join(' | ')} |`);
      rows.splice(1, 0, `| ${block.rows[0].map(() => '---').join(' | ')} |`);
      lines.push(rows.join('\n'));
    } else lines.push(`${block.type === 'list-item' ? '- ' : ''}${escapeMarkdown(block.text)}`);
  }
  if (source.links.length) lines.push('## Extracted source links', ...source.links.map(link => `- ${link}`));
  return `${lines.join('\n\n')}\n`;
}
