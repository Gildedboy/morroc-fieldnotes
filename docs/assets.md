# Asset provenance

## Job class artwork

Files under `public/images/classes/` are unmodified local copies from Refuge, reviewed and downloaded on 2026-10-17. Each class's animated idle and sitting WebP and reduced-motion stills come from its class page's `data-anim` metadata under `https://rtmrefuge.pages.dev/assets/img/anim/`. Initial `{class-id}-sprite.webp` and `{class-id}-face.webp` copies were downloaded from the tree but are superseded in the UI by animated sprites. `thief-portrait.webp` comes from `assets/img/portraits/thief-male.webp`. Exact source URLs, including version queries, are preserved in ignored `imports/refuge-classes/asset-manifest.json`; source HTML is alongside it. There are four pose assets per class, plus the original 85 reference assets. The Refuge footer says site content is free to copy; game artwork remains with its respective owners. No broader license is asserted. Echoes artwork is not used.

Animated attacking sprites and their still versions were subsequently copied from the same `data-anim` metadata for all 42 classes, at the owner's request. Selected classes use these attacking poses; the manifest records the exact source URLs.

Merchant's selected pose instead uses `merchant-casting.webp` and `merchant-casting-still.webp`, copied unmodified from its Refuge class page's male casting-pose metadata at the owner's request. Exact URLs are in the same manifest.

`public/images/classes/trickster-portrait.webp` is the unmodified male Trickster portrait from https://rtmrefuge.pages.dev/assets/img/portraits/trickster-male.webp?v=bcd2dd73, added to the Trickster guide. The artwork belongs to its respective owner.

The global Male/Female selector uses local female idle, sitting, and attacking WebPs and their reduced-motion stills for all 42 classes, downloaded unmodified from each Refuge class page's female `data-anim` metadata. Merchant uses female casting instead of attacking. Files follow `{class-id}-female-{pose}[-still].webp`; exact versioned source URLs are recorded in `imports/refuge-classes/asset-manifest.json`. Male assets remain as previously recorded.

Downloaded on 2026-10-17. Files are served locally; no runtime image hotlinking.

| Local file | Source |
| --- | --- |
| `public/images/valley.webp` | https://rtmrefuge.pages.dev/assets/img/bg/green-valley-760.webp |
| `public/images/citadel.webp` | https://rtmrefuge.pages.dev/assets/img/bg/sky-citadel-760.webp |
| `public/images/orphan.webp` | https://rtmrefuge.pages.dev/assets/img/faces/orphan.webp |
| `public/images/thief.webp` | https://rtmrefuge.pages.dev/assets/img/faces/thief-male.webp |
| `public/images/assassin.webp` | https://rtmrefuge.pages.dev/assets/img/faces/assassin.webp |
| `public/images/rogue.webp` | https://rtmrefuge.pages.dev/assets/img/faces/rogue.webp |

The server website footer says site content is free to copy. That statement does not transfer ownership of third-party artwork. Credits appear in figures and the site's credits page. No broader license is asserted here.

`public/images/brand/refuge-mark.png` is an unmodified local copy of the 192 × 192 Refuge mark used by the database website header: https://rtm-database.pages.dev/assets/img/icon-192.png. The header and favicon use this local file rather than fetching it from the database at runtime. The Fieldnotes wordmark remains separate text.

Fonts are unmodified Google Fonts distributions: Amarante by Karolina Lach and Atkinson Hyperlegible by the Braille Institute. SIL Open Font License files are stored with the fonts. The Fieldnotes mark and line icons are authored SVG interface elements.

The original Google Doc contains 26 images. At the owner's explicit request they are included, without cropping or alteration, under `public/images/new-orphan/image-001.png` through `image-026.png`. Source copies remain in ignored `imports/new-orphan-guide/assets/`. Metadata, intrinsic dimensions, and alt text are in `src/data/source-images.ts`.

Images 1–8 accompany the character tutorial, scarves, Nanny, Orphan Badge, and Memory Mirror. Images 9–26 accompany the leveling guide, including the three additional Varmundt library access images. Image 9 is an archived community message by [ADM]Ornstein, included in Gryph's original guide. Source attribution accompanies every figure; inclusion does not claim ownership or assert a broader license.

## Item database artwork

`public/images/items/my-first-card-album.png` is the unmodified 75 × 100 illustration from https://rtm-database.pages.dev/assets/icons/art/616.png, downloaded on 2026-10-17. The database identifies item 616 as **My First Card Album**, formerly **Old Card Album**. Its illustration and name link to https://rtm-database.pages.dev/index.html?id=616 beside the Memory Mirror screenshot.

## Orphanage NPC sprites

Happy Girl was matched visually against the owner's `screenPRM041.jpg` screenshot, taken on 2026-10-17. Her name and the **Headgear/Costumes** service label are visible there. The matching standard sprite is `4_f_kid3`, ID 717, listed at https://ratemyragnarok.com/npcs/. The initial similar-looking `4_f_06` candidate was incorrect and has been replaced.

`public/images/npcs/happy-girl.gif` is the unmodified transparent idle GIF downloaded from https://assets.latam-tools.com.br/gif?job=717&action=0 on 2026-10-17. It contains 32 frames on a 55 × 93 canvas and loops every 1600 ms. Renderer source: https://github.com/adsonpleal/ragassets. Ragnarok artwork belongs to its respective owners; no ownership or broader reuse license is asserted.

The owner's screenshots `screenPRM039.jpg` and `screenPRM040.jpg` identify **Mr Kim** and **Mr Kim's Helper** beside the Cash Shop service label. Both handle donation points, as confirmed by the owner. Mr Kim's exact sprite remains unresolved; candidate downloads remain in ignored `imports/npc-sprites/` and are not published.

All published NPC GIFs below were downloaded unmodified from `https://assets.latam-tools.com.br/gif?job=ID&action=0`, substituting the recorded numeric ID. Matches were checked against the owner's screenshots. See `docs/orphanage-npcs.md` for the full inventory. Rune Nifelheim's catalog at https://rune-nifelheim.com/npc/ was also reviewed; https://rune-nifelheim.com/db/mob/img/717.gif independently matches Happy Girl.

| Local GIF under `public/images/npcs/` | Sprite ID | Frames | Native canvas |
| --- | --- | --- | --- |
| `happy-girl.gif` | 717 | 32 | 55 × 93 |
| `mr-kims-helper.gif` | 612 | 1 | 46 × 89 |
| `lucy-guille.gif` | 641 | 1 | 37 × 92 |
| `kafra-alysia.gif` | 894 | 1 | 38 × 94 |
| `amadeus-windsor.gif` | 10085 | 1 | 59 × 105 |
| `mary-cenia.gif` | 10122 | 1 | 45 × 104 |
| `heimdall.gif` | 813 | 1 | 74 × 117 |
| `shadow-recycler.gif` | 666 | 1 | 51 × 100 |
| `master-of-cards.gif` | 878 | 7 | 55 × 94 |
| `black-market.gif` | 10380 | 1 | 58 × 100 |

Some NPCs have a single idle frame. Their GIFs are static; no artificial motion was added.

Additional unmodified RagAssets idle GIFs use the same URL pattern: `horacio.gif` (63, 69 × 105, 1 frame), `helmut.gif` (52, 61 × 120, 1 frame), `shadow-assistant.gif` (726, 43 × 97, 40 frames), and `stylist-shalosh.gif` (10041, 54 × 94, 1 frame).

`lily.gif` (74, 36 × 95, 1 frame), `alfred.gif` (10057, 39 × 101, 1 frame), and `skia-nerius.gif` (10116, 44 × 89, 1 frame) are also unmodified RagAssets idle GIFs from the same URL pattern. They were visually matched against the owner's screenshots 061, 044, and 046 respectively. Their service labels are visible in those screenshots. `public/images/npcs/screenshots/mr-kim.jpg` is an unchanged copy of screenshot 039; its display is clipped to Mr Kim with the same `NpcCard` CSS crop used for the other unmatched NPCs, at the owner's request.

`public/images/npcs/screenshots/ornstein.jpg`, `croc.jpg`, and `great-collector.jpg` are unchanged copies of the owner's screenshots 048, 049, and 060 respectively. `NpcCard` clips their display to the actual NPC with CSS; the underlying screenshots are not repainted or altered. Sprite candidates that did not match were rejected.

`public/images/npcs/screenshots/weaver-of-dreams.jpg` is an unchanged copy of the owner's `screenPRM062.jpg`, integrated at the owner's request. The blonde hair, ornate headdress, and layered dress did not match the female and episode NPC sprites reviewed at https://ratemyragnarok.com/npcs/. No exact stock match is asserted. `NpcCard` displays the NPC using a CSS crop at x=571, y=347, width=189, height=224 on the original 1904 × 1041 screenshot. The Dream Enchant service was confirmed by the owner.

`public/images/npcs/memory-fountain.png` is an imagegen-assisted transparent extraction from the owner's screenshot 042, requested by the owner. It is an edited screenshot reference, not a recovered original game asset or a pixel-identical crop. The built-in tool was used with this prompt: extract only the Memory Fountain left of the stairs (approximately x 465–615, y 389–582), preserve its shape, color, texture, perspective, and game appearance; exclude room, UI labels, speech bubble, characters, stairs and railing; use a tight transparent background without redesign or added objects. The original result is retained at `/home/gilded/.codex/generated_images/01a14ba2-09de-70f1-a1a0-52d622a12086/exec-94db24d6-a668-477f-b9fa-4c8be59e9135.png`; the project copy is 1290 × 1219 with alpha transparency.

## Orphan skill icons

The seven icons in `public/images/skills/` were downloaded unmodified from `https://rtm-database.pages.dev/assets/skills/ICON.png` on 2026-10-17. Handles come from the `icon` field of each Orphan skill in `assets/data/db-skills.json`.

| Skill | Icon handle |
| --- | --- |
| Warp Portal | `AL_WARP` |
| Teleport | `AL_TELEPORT` |
| Heal | `AL_HEAL` |
| Hiding | `TF_HIDING` |
| Increase AGI | `AL_INCAGI` |
| Area Loot | `BS_GREED` |
| Morroc's Mark | `ALL_FULL_THROTTLE` |

Area Loot's icon is 26 × 26; the other six are 24 × 24. All display at 24 × 24 beside the existing skill bullet labels. Artwork remains credited to the Refuge team and original rights holders.
