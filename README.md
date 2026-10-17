# Morroc Fieldnotes

An independent English guide library for Return to Morroc: Refuge. Built with Astro, strict TypeScript, and MDX. Static output; no accounts, database, backend, or CMS.

## Run locally

Requires Node.js 22.22+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

Open the URL printed by Astro. Only the New Player Guide is published. Choosing Your Path and Leveling Foundations display WIP notices; their draft bodies remain in the content files and are excluded from the public pages and search index. The New Player Guide includes its eight original screenshots, scarf table, starter skills, and Orphanage NPC services.

```sh
npm run check
npm test
npm run build
npm run preview
```

Browser validation:

```sh
npx playwright install chromium
npm run test:e2e
```

Set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to use an existing Chromium installation. Use `E2E_BASE_PATH=/repository-name` when testing a build under a GitHub Pages project path.

## Content

- `src/content/guides/`: reviewed MDX with validated frontmatter. Set `publication: published` to release a guide; the default is `wip`. WIP routes show notices without rendering draft content.
- `src/data/locations.ts`: shared location references, independent of class/build instructions.
- `scripts/import-source.ts`: public webpage, Google Doc, and selectable-text PDF extraction.
- `imports/`: ignored editorial workspace; never deployed or automatically published.
- `docs/content-workflow.md`: ingestion and attribution procedure.
- `AGENTS.md`: product constraints and task-dependent model/effort recommendations.

## Hosting

GitHub Pages is the intended host. The manual `Deploy to GitHub Pages` workflow builds static output and handles repository subpaths. Select GitHub Actions in the repository's Pages settings before running it. CI validation runs on pushes and pull requests. No remote repository or hosted site is created by local builds.

For a custom host, deploy `dist/`. Set `SITE_URL` to the site's origin and `BASE_PATH` to its path prefix before building. No Railway service is needed for this MVP.

## Credits

The initial community reference is **The New Orphan’s Guide To Morroc**, by Gryph, with the introduction and framework by Agent Q. The public source explicitly states it has not been updated for Refuge. Full original credits remain linked from each relevant guide.

Scenic illustrations and class artwork come from the Refuge website. Its footer states that site content is free to copy; third-party artwork remains with its respective owners. See `docs/assets.md`. Locally hosted Amarante and Atkinson Hyperlegible fonts include their SIL Open Font License files. All 26 original Google Doc screenshots are served locally with source attribution, at the owner's request. No ownership or broader reuse license is asserted.
