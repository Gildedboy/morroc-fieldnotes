# Asset provenance

## Equipment systems

Owner screenshots 140–143 add the Shadow Assistant and her ore exchanges. Originals remain in ignored imports, with unchanged JPEGs in `public/images/refining/`. Native viewports display 140 for the named NPC, 141 for the Jewel Shadowdecon price, and 143 for the lower-tier ore offer and full menu. Layout matches Croc’s grouped images and wraps on narrow screens.

Owner screenshot 139 is archived in ignored imports and copied unchanged to `public/images/refining/class-gem-refining.jpg`. Its native viewport shows the Class Gem UI, normal/protected choices, and the +2 to +3 material requirements. The full original frame remains linked.

Owner screenshots 136–138 show the refining window. Originals are archived in `imports/equipment-systems/`; the guide uses a native viewport from 136 to show the selected item and material choices. The UI’s displayed 0% is not used to infer rates.

Owner screenshots 134–135 replace the earlier 122 reference in `public/images/refining/`: `croc-npc.jpg` identifies Croc and `croc-exchanges.jpg` shows his clearer dialogue and menu. Native CSS viewports preserve the originals and full-size links. The New Player Guide also uses the new Croc portrait. Owner screenshots 132–133 are archived in ignored `imports/equipment-systems/` and copied unaltered to `public/images/dream-enchants/`. The Dream guide displays only 133, showing prices and menu in a native viewport with the original frame linked. NPC sprites reuse credited Heimdall and Weaver assets. Random Rolls reuses owner screenshot 123 and the existing Old Rose Sandals viewport.

## Celestial Tome crafting minimap

The reward illustration `public/images/celestial-tome/celestial-tome.png` is the unaltered 75 × 100 PNG from `https://rtm-database.pages.dev/assets/icons/art/24236.png`, downloaded at the owner’s request. Credit remains in the guide’s database source entry; game artwork belongs to its respective owner.

Owner screenshots 129–131 add Vali Sage, Vidar Sage, and Thor Sage inside the cottage. Unaltered JPEGs are stored in `public/images/celestial-tome/` and archived in ignored `imports/celestial-tome/owner-screenshots/`. Native CSS crop metadata in `src/data/celestial-tome-images.ts` isolates each NPC and name; full original frames remain linked. These are owner-provided images, separate from the spreadsheet’s minimap.

`public/images/celestial-tome/tome-crafting-minimap.png` is the original 130 × 123 PNG embedded beside the first Tome recipe in Pitaya’s Celestial Tome spreadsheet tab. The owner supplied the workbook for guide integration. It is displayed without cropping or color changes through `SourceScreenshot`, with its full-size link. The workbook and extracted manifest remain in ignored imports. No general reuse license or source revision date is stated; source credits remain in guide frontmatter. No additional NPC or dialogue screenshots were present in that tab.

## Astrologika quest screenshots

`public/images/sun-headgears/quest-01.png`–`quest-19.png` are unaltered instructional images from Pitaya’s Sun Headgear Guide spreadsheet, tab 636686625. The owner supplied the source for integrating this quest. The original workbook, extraction manifest, and images remain in ignored `imports/astrologika-headgears/`; metadata and alt text are in `src/data/sun-headgears-images.ts`. Images show the bookshelf, telescopes, Stone, Frozen Tides, Serpens tooltip, and nine observer minimaps. Source update date and general reuse license are unspecified; the workbook invites personal progression copies. Attribution is retained in guide frontmatter for About. The owner approved publication of the illustrated guide on October 18, 2026.

## Job class artwork

Files under `public/images/classes/` are unmodified local copies from Refuge, reviewed and downloaded on 2026-10-17. Each class's animated idle and sitting WebP and reduced-motion stills come from its class page's `data-anim` metadata under `https://rtmrefuge.pages.dev/assets/img/anim/`. Initial `{class-id}-sprite.webp` and `{class-id}-face.webp` copies were downloaded from the tree but are superseded in the UI by animated sprites. `thief-portrait.webp` comes from `assets/img/portraits/thief-male.webp`. Exact source URLs, including version queries, are preserved in ignored `imports/refuge-classes/asset-manifest.json`; source HTML is alongside it. There are four pose assets per class, plus the original 85 reference assets. The Refuge footer says site content is free to copy; game artwork remains with its respective owners. No broader license is asserted. Echoes artwork is not used.

Animated attacking sprites and their still versions were subsequently copied from the same `data-anim` metadata for all 42 classes, at the owner's request. Selected classes use these attacking poses; the manifest records the exact source URLs.

Merchant's selected pose instead uses `merchant-casting.webp` and `merchant-casting-still.webp`, copied unmodified from its Refuge class page's male casting-pose metadata at the owner's request. Exact URLs are in the same manifest.

`public/images/classes/trickster-portrait.webp` is the unmodified male Trickster portrait from https://rtmrefuge.pages.dev/assets/img/portraits/trickster-male.webp?v=bcd2dd73, added to the Trickster guide. The artwork belongs to its respective owner.

`public/images/classes/trickster-female-portrait.webp` is the unmodified female Trickster portrait from https://rtmrefuge.pages.dev/assets/img/portraits/trickster-female.webp?v=6b77c7d5. Both portraits appear together beside each other at the start of the Trickster guide.

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

`public/images/npcs/weaver-of-dreams.gif` is the unchanged animated Baroness of Blood sprite (monster ID 2661) from https://rtm-database.pages.dev/assets/sprites/2661.gif, identified by the owner via https://rtm-database.pages.dev/mvp-timer on October 18, 2026. It is 101 × 117 pixels with eight animation frames and transparency. `NpcCard` displays it without a screenshot crop. The previous owner screenshot `screenPRM062.jpg` remains as appearance evidence; the Dream Enchant service is owner-confirmed.

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

## Trickster skill icons

These icons were downloaded unmodified from the Refuge database at `https://rtm-database.pages.dev/assets/skills/{ICON}.png` on 2026-10-18. Handles come from the `icon` field in `assets/data/db-skills.json` for Trickster skills.

| Skill | Icon handle |
| --- | --- |
| Burning Scythe | `SA_FLAMELAUNCHER` |
| Hellraiser | `RK_IGNITIONBREAK` |
| Increase SP Recovery | `MG_SRECOVERY` |
| Scythe Mastery | `PR_MACEMASTERY` |
| Scythe Reap | `LK_SPIRALPIERCE` |
| Shadow Parry | `LK_PARRYING` |
| Sweeping Slash | `KN_PIERCE` |
| True Sight | `SN_SIGHT` |

The component displays icons at 24 × 24. PNGs that are 26 × 26 retain their source files and aspect ratio. Dark Message and Dark Messenger are INT-build skills and are outside the STR/LUK Trickster guide.

## Trickster leveling screenshots

`public/images/classes/trickster-skill-tree.png` (562 × 403) is an unmodified, full-frame copy of the Basic Trickster skill-tree screenshot embedded in Phawkes' leveling spreadsheet. It appears in the Trickster guide beside the early skill allocation. The spreadsheet credits suggestions from Sparda, Arumakan, Kim, Kharon, and knoxzera; its date and image reuse terms are unspecified. The image remains credited to its source and rights holders. The separate Revenant skill-tree image is reserved for its own guide.

The owner's Refuge game screenshots `screenPRM063.jpg`, `screenPRM064.jpg`, and `screenPRM065.jpg` are 1904 × 1041 JPEGs from `C:\Users\Gilded\Downloads\Refuge\ScreenShot`. Unchanged originals are retained in ignored `imports/trickster-job-change/`. Public copies are tightly cropped PNGs showing only Lorelei Sorin (140 × 150), the Wisp (90 × 100), and Trickster Serin (160 × 230), respectively. The job-change callout displays only these NPC crops; the full game screens are not published.

## Death Castle screenshots

Owner-supplied Refuge gameplay screenshots `screenPRM109.jpg`–`screenPRM114.jpg` were reviewed on October 18, 2026. Unchanged originals are retained in ignored `imports/death-castle/`. The Leveling Spots entry uses a single crop of `screenPRM114.jpg` as `public/images/locations/death-castle-monsters.svg`. Its SVG viewport crops the embedded original JPEG at (1200,250), 600 × 600, without changing its pixels or colors. Only two mobs and nearby terrain are visible; the player and HUD are excluded. The full-size link opens the same crop. Game artwork remains the property of its respective rights holders.

## Mad Drinker screenshots

Owner-supplied Refuge gameplay screenshots `screenPRM115.jpg`–`screenPRM118.jpg` were reviewed on October 18, 2026. Unchanged originals are retained in ignored `imports/mad-drinker/`. The Leveling Spots entry uses one square crop of `screenPRM117.jpg` in `public/images/locations/mad-drinker-monsters.svg`. Its SVG viewport crops the embedded original JPEG at (1400,370), 500 × 500, preserving original pixels and colors. It shows three mobs and nearby terrain without the player or HUD. The full-size link opens the same crop. Game artwork remains the property of its respective rights holders.

## Comodo Swamp screenshots

Owner-supplied Refuge gameplay screenshots `screenPRM119.jpg`–`screenPRM121.jpg` were reviewed on October 18, 2026. Unchanged originals are retained in ignored `imports/comodo-swamp/`. The Leveling Spots entry uses one square crop of `screenPRM120.jpg` in `public/images/locations/comodo-swamp-monsters.svg`. Its SVG viewport crops the embedded original JPEG at (980,550), 480 × 480, preserving original pixels and colors. It shows two Alligators and a Galapago with nearby terrain, excluding the player and HUD. The full-size link opens the same crop. Game artwork remains the property of its respective rights holders.

## Dungeon entrance screenshots

- Source: **Low Res Dungeon Location Guide**, https://docs.google.com/spreadsheets/d/1RJ_aT-3F3K8f3Q6gjNiOebnsKmBMF6t87sVa95RUz5Y/edit, reviewed October 18, 2026.
- Public attribution requested by the owner: **OG Community of the OG Server**. The source introduction names ElPato/Duck and acknowledges rimesrea. Reuse terms and source revision date are unspecified; the owner directed proceeding with the community credit.
- Original workbook and 163 full-frame PNG images remain in ignored `imports/dungeon-entrances/`. `images.json` records sheet, row, column, section, original filename, dimensions, and published path. The additional widescreen Abyss Glast Heim screenshot is anchored to its proper section, not the last sheet row.
- Published assets: `public/images/entrances/dungeons-001.webp` through `dungeons-122.webp`, and `distortions-001.webp` through `distortions-041.webp`. Lossless WebP conversion preserves original pixels; no crops, filters, or frame changes. `SourceScreenshot` provides lazy loading, natural aspect ratio, and keyboard-accessible full-size links.

## Bifrost Mirror walkthrough

- Sources: https://necropolecomercial.com/nc/guia-da-hide-quest-bifrost-mirror-shard/ by **Bahadur**, published October 23, 2023; and https://rtmrefuge.pages.dev/guides. Reviewed October 18, 2026. Necrópole Comercial states all rights reserved and provides no open reuse license; the selected game screenshots are reproduced as contextual instructional references with attribution on About. Refuge permits copying site content. No permission or open license from Necrópole Comercial is asserted.
- Fourteen selected gameplay frames are copied unchanged to `public/images/bifrost-mirror/`; this does not import the source’s full illustrated document or its route-map GIF collection. Original JPEG files, raw source HTML, importer inventory, and `image-manifest.json` are retained in ignored `imports/bifrost-mirror/`.
- `src/data/bifrost-mirror-images.ts` records source-frame dimensions, alt text, and captions. `SourceScreenshot` preserves the complete supplied frame and colors and offers full-size viewing. Red circles were present in the source minimaps; no new markings, filters, or crops are added.

## Blooming Rose Sandals guide

Uses owner screenshots `screenPRM123.jpg`–`screenPRM128.jpg` from `C:\Users\Gilded\Downloads\Refuge\ScreenShot\`. Original frames are archived in ignored `imports/blooming-rose-sandals/owner-screenshots/`, with unchanged public JPEGs in `public/images/blooming-rose-sandals/`. `src/data/blooming-rose-sandals-images.ts` records natural dimensions, captions, and alt text. Screenshots show Old Rose Sandals (123), Blooming Rose Sandals (124), the correct Orphanage Distortion orb near Merchant Guild (125), Rose Sage’s service label (126), repair choices (127), and the required materials (128). The owner explicitly rejected the previously borrowed entrance images for this guide; they are no longer used here. Owner-requested native crop viewports isolate the relevant tooltip, orb, NPC, and dialogue panels while keeping original JPEGs unchanged and available through full-size links. The old sandal crop includes its roll bars; the Blooming crop includes its fixed option bars at the owner’s request. Old Rose Sandals have random rolls; the Blooming option bonuses are fixed. Vendor prices are not fixed quest costs.
