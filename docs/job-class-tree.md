# Job Class Tree implementation

Game mechanics and their evidence are in `docs/game-reference.md`. This document records presentation and implementation decisions.

- The user chose http://57.131.145.72/classes as a branching-card design reference. Author original components and CSS; use Refuge data and artwork.
- Thief must appear in the middle of Orphan's first row of job choices, alongside the other jobs. The owner's earlier wording about "above Orphan" was explicitly corrected. Orphan remains the starter.
- Orphan links to the New Player Guide, with no dedicated class page.
- Every other class has a local `/classes/{id}/` page. Thief is the first reviewed example; the rest are WIP with source-reviewed metadata.
- `src/data/job-classes.ts` contains the reviewed 42-class roster, parents, derived children, roles, difficulty, weapons, and local image paths.
- `ClassExplorer.astro` controls recursive `ClassCard.astro` cards. The entire card selects its class; there are no Expand, Back, Main, or guide controls inside cards. Orphan remains selected and shows "Start here". A small external Back control appears by Orphan only when a selected path hides the other first-job options; it resets the path and disappears when those options return. Clicking a selected ancestor clears only its descendants, keeping its own current options visible (Orphan → Trickster → Revenant returns to Trickster without collapsing that branch). Selected classes flip and use Refuge's attacking animation, with reduced-motion stills. Their external info boxes show source strengths/weaknesses and guide links. On narrow screens the box sits below its card. Sprites use a 140 × 140 frame.
- Merchant is a separate card to the right of Orphan, outside the first-job options list. Show "Vendor only" and "Base Level 1 · Job Level 1". This is a display arrangement; its data parent remains Orphan.
- Orphan is exactly centered in the full tree area; Merchant aligns to the far-right edge of the same row. All cards have identical dimensions at a given viewport. Merchant's Base Level 1 / Job Level 1 requirement is written on its connection line, not inside its card.
- Use actual parent-to-child connector lines, including a horizontal Orphan–Merchant line; do not use full-width separator rules. Orphan starts attacking and sits after another class is selected. Remove opacity fades and color fade-ins: pose changes are immediate, while card flips and positional transitions remain smooth.
- Difficulty badges use green for easy, mustard yellow for moderate, and red for hard/expert. Strengths text is green; weaknesses text is red.

## Latest interaction corrections

These decisions supersede the earlier request for a flip: the 3D card flip was removed after the owner observed half-rendered sprites during rapid clicking. Keep full-color, immediate pose swaps and short, cancellable positional movement only. Do not animate container heights, opacity, or card rotation. Cancel in-flight movement before computing the next destination; keep all sprite elements mounted.

Place tags in the top-right header area, with a separate sprite area below so images never sit behind tags. All cards remain the same size. Remove all progression lines except the Orphan–Merchant line and its level requirements.

Move class information panels into the shared `.class-info-layer` outside the recursive cards. They are fixed overlays with a close control, including on mobile, and must never contribute to tree layout or move other cards. Orphan remains exactly centered and Merchant stays at the far right.

The conditional Back control sits above Orphan. Hide Merchant while any regular first-job path is selected; restore it when Back returns to the starting choices. Selecting a regular class also clears any Merchant selection.

Selected cards have an immediate purple background/border highlight, including Orphan on initial load. Merchant's requirements sit below its horizontal line and explicitly say "Requires Orphan", Base Level 1, and Job Level 1. Do not connect Orphan to its first-job options. Once a regular class is selected, show lines from that class to its visible next jobs (for example Trickster → Revenant), and likewise for deeper selected branches.

Merchant uses Refuge's animated casting pose when selected, with its casting still for reduced-motion users. This supersedes the earlier idle/movement request. Other selected classes use their attacking pose.

Connect Orphan to the selected first job (for example Orphan → Trickster), while leaving unselected starting options unconnected. Keep the rest of that selected branch's visible progression lines.

Info boxes are anchored beside the selected card, preferring its right side. If that side is too close to the viewport edge, use the left side instead (especially Merchant at the far right). Positioning follows scrolling and selection movement but stays outside layout; never put the box underneath Merchant or shift other cards to accommodate it.

Merchant's rightmost position aligns with the rightmost column of the first-job card grid, not the article's outer edge. Orphan remains on the center column. This clarification supersedes the earlier full-area-edge placement.

Leaf classes, including Merchant, have no branch-panel spacing. Their empty controlled panel must have zero height and padding when selected, so selecting them cannot push later rows down.

Selecting Merchant hides the regular first-job options and shows Back above Orphan. Back restores all starting choices, including Merchant, and then hides itself. Orphan remains selected throughout.

The tree has one global Male/Female sprite selector. It changes every class's sitting, idle, active, and reduced-motion still paths using local Refuge assets; Merchant's active pose remains casting. Predecode visible replacement images before switching, keep current branch selection and layout intact, and discard stale switches if the user toggles quickly. Default to male; this is a presentation choice, not a character/build variant or progression tracker.

Display the selector as a compact rounded capsule containing bold blue ♂ and pink ♀ with a thin vertical divider. Center it vertically beside Orphan, on Trickster's column axis rather than at Orphan's top edge. Preserve accessible Male/Female radio labels and keyboard focus styles.

Fill the selected half blue or pink edge to edge, with no inset or gap. The full-height vertical divider separates the two halves; the capsule clips the outer corners. Do not use a circular selection around the symbol.

Measure card-button coordinates for selection movement, not the expanding wrapper's edges. A terminal class such as Revenant must stay in place when selected, and its connector must not swing left/right as the wrapper changes width.

Initial grid placement is server-rendered and controlled by CSS container queries. Use three or five centered columns, with Thief in the middle of the first row. Card sizes, Merchant alignment, and the sprite selector position must be correct before JavaScript runs. Do not reorder DOM nodes or resize/reposition the grid during initialization; that caused a visible jump when opening the page.
- Use animated idle and sitting sprites from each Refuge class page, with still versions for reduced-motion users. Use those animated sprites on class pages too. Splash art is supplementary.
- First-job ordering adapts to available row width to center Thief in the first row. Reorder DOM nodes only when viewport width actually changes; never on height changes or selections. Do not auto-scroll on selection. Animate row height and card movement instead of jumping between layouts. Both poses stay mounted and crossfade so selection does not replace image sources or restart their animations. Hidden siblings are inert, card buttons expose pressed/expanded state, and a no-JavaScript list preserves class-page access.
- `src/pages/classes/[id].astro` renders class pages with a right-hand outline and narrow-screen outline.
- The Job Class Tree itself uses the full article width without a right-hand or mobile "On this page" outline. Individual class articles retain their outlines.
- Class artwork is local under `public/images/classes/`; asset evidence is recorded in `docs/assets.md`. Raw reference HTML and a full URL manifest remain in ignored `imports/refuge-classes/`.
- Use `job-class-tree` as the guide ID and public URL, matching its title. Redirect the former `/guides/choosing-your-path/` address to `/guides/job-class-tree/` to preserve existing links.
