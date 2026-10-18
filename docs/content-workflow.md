# Source-to-guide workflow

## Import for review

```sh
npm run import:source -- --url 'https://docs.google.com/document/d/DOCUMENT_ID/edit' --output imports/example --author 'Original author'
npm run import:source -- --url 'https://example.com/guide' --output imports/web-guide
npm run import:source -- --input '/path/to/guide.pdf' --output imports/pdf-guide
```

For a previously downloaded HTML export, combine `--input` with `--url` to retain source provenance. Imports refuse to overwrite an existing directory and must remain under ignored `imports/`.

The importer produces `document.json`, `review.md`, and extracted embedded HTML image files. Public Google Doc editor URLs are normalized to HTML exports. Web content is parsed, not executed; scripts and page chrome are removed. Tables, headings, images, and outbound links are inventoried. Remote images are recorded without downloading them automatically.

Selectable-text PDFs keep text per page and extracted links. Scanned/empty pages are flagged for OCR, which is not implemented in the MVP. PDF table layout and figures require visual comparison with the original; the importer does not claim to recover them automatically. Private or dynamically rendered sources may require a local export.

## Review before authoring

1. Identify authors, original URL, revision information, and reuse terms. Public access alone is not a license.
2. Read the full source and its footnotes, including any statements about obsolete server versions.
3. Separate current Refuge facts, archived guidance, and our editorial additions. Do not silently merge contradictions.
4. Transfer the useful instructions into consistent English MDX within the permitted reuse scope. Preserve the tutorial itself; do not replace it with a source link or a generic summary. Keep instructional screenshots near their corresponding steps and describe each meaningful image with alt text.
5. Link to the original work. Preserve contributor credits where applicable and relevant. Do not invent author names, update years, or verification dates.

## Author

Each guide declares publication (`published` or `wip`, default `wip`), title, description, category, icon, order, updated, status, statusNote, readingMinutes, tags, and sources. `verified` is null until actual in-game confirmation. `updated` refers to our editorial work, not the source's last edit.

WIP placeholders may declare `sources: []` while references are pending. Published guides must include at least one source; the content schema enforces this requirement.

Use second-level headings for the generated outline. Reuse `Callout`, `GuideFigure`, and shared location components. Keep internal navigation base-path aware with `guideHref()` / `withBase()`.

Use `SourceScreenshot` for original instructional images. It preserves the full frame, natural dimensions, readable colors, and a full-size image link. `GuideFigure` is for decorative landscape imagery and crops to fit; it must not be used for dialogue screenshots or item tooltips. The initial source's 26 images are explicitly mapped to their tutorial and leveling sections.

Model character stage, class, technique, location, and resource assumptions separately. Several techniques can use a location without sharing combat instructions. Do not add a first-character/alt selector before supported variants actually exist.

## Validate

Run `npm run check` and `npm run build`. Run importer tests after extraction changes and browser tests after navigation/search/layout changes. Check source links, image attribution, keyboard controls, narrow layouts, and dates. Imports must never appear in `dist/`.

The standard footer states that the source guides are publicly available and their material has been transferred into a consistent format. It preserves ownership and attribution and identifies editorial updates separately.

Only published guide bodies appear in public HTML and search. WIP guides remain visible as labeled notices in the library, sidebar, and related links. Before publishing a draft, review its content and images, change its publication field, and rerun checks.
