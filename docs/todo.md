# Website development to-do

- [x] Remove Refine Guide’s WIP at the owner’s request. Included in the owner-authorized publication batch.
- [x] Remove Random Rolls’ WIP at the owner’s request. Its single comparison table includes Shadow equipment and distinguishes monster-drop and coffer stat rolls. Included in the owner-authorized publication batch.
- [x] Remove Dream Enchants’ WIP and publish the accumulated changes at the owner’s request. Includes all 20 enchants and owner-confirmed Weaver services from screenshots 132–133.

Track upcoming work across the entire Morroc Fieldnotes website here. Add new requests as they are agreed, and mark items complete after they are implemented in the site. Requested edits to existing pages should be applied to the development site immediately.

## Priorities and first feedback milestone

The owner prioritizes Job Class Tree because it is the most visible part of the planned experience. Deliver at least one complete example of each guide type so users can try the site and give feedback before the full library is filled out.

1. Build and review Job Class Tree first, including Refuge's class branches, sprites, splash art, and tags. Add one complete class page to establish the class-page format; keep remaining class pages WIP until authored and reviewed.
2. Establish reusable formats for Leveling Spots, Dungeons, Distortions, and Quests & Unlocks. Include one reviewed level-range entry, one dungeon section, one distortion section, and one complete quest guide. Choose examples with the owner as supporting sources become available.
3. Gather feedback on navigation, readability, class browsing, and finding locations and unlock instructions. Revise the formats before expanding the library.
4. Fill the remaining class pages, leveling ranges, dungeon and distortion sections, and quest guides using the reviewed formats. Keep unfinished entries clearly WIP.

The New Player Guide is already available as the Getting Started example. Do not delay the first feedback milestone until every guide is complete.

## Orphanage guide

- [x] Add the Weaver of Dreams image; the owner later identified the animated Baroness of Blood sprite in the Refuge database, which replaces the screenshot crop.
- [ ] Confirm the Weaver of Dreams' precise location within the Orphanage and add directions.

## Guide library

- [x] Build Job Class Tree using Echoes' selection animation behavior with original implementation and Refuge's 42-class roster. Use the full article width without the right-hand outline; center Thief among Orphan's first-job choices. Keep Orphan permanently selected, clickable cards with larger animated sprites and no 3D flip, and a separate guide box for the selected class. No Expand/Back controls or Main tag. See `docs/job-class-tree.md`.
- [x] Use Refuge's animated class sprites and the Thief splash illustration, with provenance and attribution.
- [x] Give each class a local page except Orphan, which links to the New Player Guide. Thief is the first reviewed guide; the remaining class guides are WIP.
- [x] Review class tags against Refuge, including Bouncer and Pit Boss. Game facts and source caveats are recorded in `docs/game-reference.md`.

- [x] Add weapon labels to job names, including Puppet for Illusionist and Codex for Mimic.
- [x] Start the Trickster guide with sourced job-change steps and a core combat overview.
- [ ] Complete Trickster equipment, leveling, and skill-build sections with supporting sources and in-game review.

## Leveling, dungeons, and distortions

- [ ] Complete and review Leveling Spots with level ranges and recommended spots. Preserve the existing archived route and screenshots as review material until the current Refuge route is authored.
- [x] Add Dungeons with the entrance spreadsheet’s 51 sections, both Pyramid routes, full-frame screenshots, current database routes, and a dungeon-rank warning.
- [x] Add Distortions with the spreadsheet’s 24 sections plus Mad Drinker, screenshots, current mirror Master requirements, and source/version differences.
- [x] Organize Dungeons and Distortions as one page each, with a section per location. Use the right-hand article outline to jump to a specific dungeon or distortion. Link to these sections from relevant leveling spots, and keep reusable access information in `src/data/locations.ts`.

## Quests & Unlocks

- [x] Add the Bifrost Mirror quest with all five tombs, Dicastes Diel travel, elevators, four Master upgrades, fees, reward, and full-frame instructional screenshots.
- [x] Add Blooming Rose Sandals with the current recipe, Rose Sage location, mansion access screenshots, numbered steps, and separate crafting/equipment requirements.
- [x] Add the owner’s correct distortion, Rose Sage, repair dialogue, material requirements, and old/upgraded item screenshots (123–128).
- [x] Publish Astrologika Moon and Sun Headgears with the owner’s approval: bookshelf/telescope sequence, Serpens recipe, exactly +9 requirement, nine observer coordinates, and nineteen instructional images.
- [x] Complete Celestial Tome and remove WIP at the owner’s request. Guide includes all 90 HATred quests as a requirement, three prerequisite Tome recipes, Chaos/Iris/Coffin storyline, final exchange, and account-bound reward. Full HATred catalogue and acquisition records reviewed; links lead to its individual headgear instructions. The Tome tab supplies one crafting minimap; owner photos show the three sages and the database supplies the reward artwork. Exact Coffin coordinates remain unavailable.

## External resources

- [x] Add https://hatredguide.segasunset.workers.dev/ as the Hatred tracker & guide link alongside the main website and database links in the top-right header, mobile menu, and sidebar.

- [ ] Verify dungeon entrances and rank labels in game; confirm missing current mirror requirements for Old Payon, Old Monastery, and Field of Fire. Recheck the spreadsheet’s Jormungand Base Level 130 entry requirement.

- [x] Start Revenant’s local WIP guide using the full Phawkes workbook and Refuge class reference.
- [ ] Review Revenant gear details and job-change screenshots with the owner before publication.

- [x] Add Refuge Build Planner to sidebar, desktop header, mobile resources, and Revenant Next Steps.

- [x] Add Amatsu Seals Unlock as a WIP entry under Getting Started.
- [ ] Author Amatsu Seals Unlock from supporting quest sources and screenshots.

- [x] Add shareable # links beside dungeon and distortion headings; direct fragment URLs jump to the selected location.
