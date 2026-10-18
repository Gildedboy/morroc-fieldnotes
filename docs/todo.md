# Website development to-do

Track upcoming work across the entire Morroc Fieldnotes website here. Add new requests as they are agreed, and mark items complete after they are implemented in the site. Requested edits to existing pages should be applied to the development site immediately.

## Priorities and first feedback milestone

The owner prioritizes Job Class Tree because it is the most visible part of the planned experience. Deliver at least one complete example of each guide type so users can try the site and give feedback before the full library is filled out.

1. Build and review Job Class Tree first, including Refuge's class branches, sprites, splash art, and tags. Add one complete class page to establish the class-page format; keep remaining class pages WIP until authored and reviewed.
2. Establish reusable formats for Leveling Spots, Dungeons, Distortions, and Quests & Unlocks. Include one reviewed level-range entry, one dungeon section, one distortion section, and one complete quest guide. Choose examples with the owner as supporting sources become available.
3. Gather feedback on navigation, readability, class browsing, and finding locations and unlock instructions. Revise the formats before expanding the library.
4. Fill the remaining class pages, leveling ranges, dungeon and distortion sections, and quest guides using the reviewed formats. Keep unfinished entries clearly WIP.

The New Player Guide is already available as the Getting Started example. Do not delay the first feedback milestone until every guide is complete.

## Orphanage guide

- [x] Add the Weaver of Dreams' image to the new-player guide using the owner's screenshot when no exact sprite match is confirmed.
- [ ] Confirm the Weaver of Dreams' precise location within the Orphanage and add directions.

## Guide library

- [x] Build Job Class Tree using Echoes' selection animation behavior with original implementation and Refuge's 42-class roster. Use the full article width without the right-hand outline; center Thief among Orphan's first-job choices. Keep Orphan permanently selected, clickable cards with larger animated sprites and no 3D flip, and a separate guide box for the selected class. No Expand/Back controls or Main tag. See `docs/job-class-tree.md`.
- [x] Use Refuge's animated class sprites and the Thief splash illustration, with provenance and attribution.
- [x] Give each class a local page except Orphan, which links to the New Player Guide. Thief is the first reviewed guide; the remaining class guides are WIP.
- [x] Review class tags against Refuge, including Bouncer and Pit Boss. Game facts and source caveats are recorded in `docs/game-reference.md`.

## Leveling, dungeons, and distortions

- [ ] Complete and review Leveling Spots with level ranges and recommended spots. Preserve the existing archived route and screenshots as review material until the current Refuge route is authored.
- [ ] Write and review Dungeons with locations, entry requirements, and unlock steps. Its separate link under Leveling is WIP.
- [ ] Write and review Distortions with locations, entry requirements, and unlock steps. Its separate link under Leveling is WIP.
- [ ] Organize Dungeons and Distortions as one page each, with a section per location. Use the right-hand article outline to jump to a specific dungeon or distortion. Link to these sections from relevant leveling spots, and keep reusable access information in `src/data/locations.ts`.

## Quests & Unlocks

- [ ] Write and review Bifrost Mirror. Its separate guide link is WIP.
- [ ] Write and review Blooming Rose Sandals. Its separate guide link is WIP.
- [ ] Write and review Sun Headgears. Its separate guide link is WIP.
- [ ] Write and review Celestial Tome. Its separate guide link is WIP. Use https://hatredguide.segasunset.workers.dev/ as a reference for the headgear requirements: the owner confirms that all 90 headgears are needed for the tome. Review the full list and acquisition details before authoring.

## External resources

- [x] Add https://hatredguide.segasunset.workers.dev/ as the Hatred tracker & guide link alongside the main website and database links in the top-right header, mobile menu, and sidebar.
