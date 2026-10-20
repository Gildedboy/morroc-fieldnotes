# Refuge game reference

## Equipment systems — October 18, 2026

- Owner now authorizes upload of the accumulated changes and removal of Dream Enchants’ WIP. Refine Guide, Random Rolls, and Dream Enchants are all published with source-reviewed status. This supersedes the earlier local-only instruction.

- Owner approved removing Random Rolls’ WIP. It is now published locally with source-reviewed status; Dream Enchants remains WIP and is the next review target. The instruction not to upload remains in force.

- Owner clarifies Shadow equipment stat rolls: **monster drops give +1** to one stat; **coffers can also give +2 or +3**. The main option table distinguishes these sources instead of applying the coffer range to all Shadow equipment.

- Shadow random rolls appear in the main Random Rolls table at the owner’s request, alongside the other equipment categories. Current database Shadow coffer descriptions confirm **+1–3 to one stat**; the September 2 Legend patch explicitly confirms **ATK +3% while in Frenzy** as a Shadow roll. The reviewed current sources do not enumerate the complete skill pool or establish option-line order. Keep the skill bonus as an example; do not import Echoes’ blanket +5% skill damage or rarity system into Refuge.

- Owner approved **Refine Guide WIP removal** and explicitly requested **no upload yet**. Random Rolls is being reviewed: the owner wants only a concise info box and the random-option reference table. Remove the numbered tutorial, general build advice, sandal screenshot, and separate calibration/gem-reroll sections from that page; preserve the pools themselves and a short revolver calibration note in its table row. Dream Enchants remains WIP.

- Owner screenshots **140–143** confirm the **Shadow Assistant** exchanges **250 Shadow Ore → 1 Jewel Shadowdecon** and **10 Shadow Ore → Elunium or Oridecon**. Dialogue identifies Chief Cammy; the visible world label is Shadow Assistant. These photos correct the earlier generic “Shadowdecon” wording to **Jewel Shadowdecon**, including in the New Player Guide. Use the same NPC/description/dialogue presentation as Croc. The owner removed generic menu-selection instructions and the explanatory paragraph before the rate table; retain the concise **Original-server success rates** heading so archived probabilities remain identified.

- Owner screenshot **139** shows a **+2 → +3 Class Gem attempt** with **100 Distortion Shards normal / 500 protected**. This confirms that target only; do not extrapolate quantities to +1 or +2. The owner separately supplied the complete Patch 19 material progression and failure rules. The guide now separates Normal and Protected columns, including Pine Soot versus Enenra Soot at +9. Exact remaining material quantities, Zeny fees, and current success percentages are not provided by the reviewed public references; do not invent them.

- Subsequent rate research found current Patch 19/20 **Class Gem** rules. These supersede the draft’s mistaken “Class Gems (runes)” Bradium association: **+1–3 Distortion Shards; +4–6 Distortion Essence (50 normal / 200 protected); +7 Shadow Gem Fragment; +8 Dream Shard; +9 Pine Soot or Enenra Soot when protected; +10 Jormungandr Scale**. Normal/protected success chances are equal. The owner confirms Shards through +3 followed by Essence. Bradium remains a Dragon Orb/old-rune material, not current Class Gem material.
- Current Patch 22 gives **Iris** the Class Gem option service: equip the gem, spend **20 Gem Dust**, select one line. Stat pairs STR/INT, AGI/VIT, DEX/LUK; values −3, −2, −1, +1. Result may repeat or worsen; no Zeny, refine and other lines preserved. This is a separate exception to dropped-equipment option rules.
- Rate searches found the original-server tables preserved on Refuge Gear, but no confirmed current numerical table. `src/data/refine-rates.ts` retains that reference with explicit original-server labels, including old runes distinct from current Class Gems. The current interface is authoritative for a selected attempt. Owner screenshots 136–138 show interface states with 0%; do not interpret those as actual refining probabilities.

- Local WIP Refine Guide, Random Rolls, and Dream Enchants are authored from Refuge Gear `#refine`, `#random-options`, `#enchants`, current item records, and owner screenshots 122, 132–133. Original source files are in ignored `imports/equipment-systems/`. Refuge permits copying site content. No completed refine or enchant attempt is recorded.
- Refining: maximum **+10**, no item destruction on failure; inherited guidance describes a one-level downgrade. Current ore descriptions confirm Oridecon for weapons, Elunium for armour, Regular through +3, HD +4–6, Enriched +7–9, Jewel +10. Higher-tier protection doubles the Zeny fee. Bradium/Jewel Bradium serve old runes and Dragon Orbs; Shadowdecon/Jewel Shadowdecon serve Shadow equipment. Archived exact success-rate and Zeny tables are omitted rather than asserted as current. Owner screenshots 134–135 supersede screenshot 122, showing Croc’s name and a clearer exchange menu. Use the displayed menu rather than interpreting abbreviated dialogue as a complete recipe.
- Current random-option pools cover **21 categories** and are described as read from the server. One result per available line. No reroll orbs or weapon rarity. Revolvers drop optionless; Judge’s Quartermaster calibrates only optionless revolvers using bow pools. The separate owner-confirmed Shadow Recycler Class Gem service is not an equipment-option reroll. The data extraction preserves both list cells and plain-text cells (Decks, Draco Orbs).
- Current **20 Dream Enchants** include corrected Dream of Skill and Nightmare Piercer names. `src/data/equipment-systems.ts` records base effects, +10 effects, and extra conditions. Old numerical success formula is not confirmed current; screenshots say chance depends on refine.
- Owner screenshot **133** confirms random enchant **100 Dream Shards**, guaranteed chosen enchant **2,000 Dream Shards / 100% success**, and removal for **500 Distortion Shards OR 100 Distortion Essence**. Do not infer an exchange rate from those alternative service prices. Screenshot 132 is nearly identical and remains archived rather than repeated in the walkthrough. These images answer the pending price question.
- Current Dream Pouch (7365): Dream Box in Varmundt’s Orphanage exchanges **100 Distortion Essence** for one pouch. Open it for Dream Shards (7364); the older source’s 1–10 yield is not asserted as current. Weaver uses the existing owner-identified Baroness of Blood animation.

## Starter mechanics additions — October 18, 2026

- Owner requests a published **ASPD & Element Table** guide under Getting Started, a glossary link and dying section in the New Player Guide, and **“Good consistent damage”** in Prowler’s strengths instead of “High burst damage.” Prowler’s owner correction overrides the older class reference; its other strengths remain unchanged.
- Current database Codex `#aspd-cap`: shared **180** base cap for every job; **+1 per 40 AGI**, equipment ASPD Limit, **+3 for knowing Frenzy**, **+1 each for maxed Card Mastery and Sleight Mastery**; normal ceiling **190**, active Frenzy **193**. Increasing the cap does not itself supply attack speed. Mechanics page confirms **Increase AGI affects movement, not ASPD**. Its broad introduction about different job base limits is superseded by the detailed current Codex numbers; do not invent a separate per-class cap list.
- Both 10 × 10 element matrices from `https://rtmrefuge.pages.dev/mechanics#elements` are in `src/data/elements.ts`. Rows attack, columns defend. Levels 1–3 share one matrix; level 4 is separate. Preserve exact server values, including **Wind attacking Dark 4 = 90%** even where other natural elements use 75%. These are numerical facts transcribed from the current server table, not the older inherited wiki prose. Raw page retained in ignored `imports/refuge-mechanics/`; footer permits copying site content.
- Dying section uses the provided `#death` reference: dungeon deaths create rank-dependent Shadows, each hit deals 1 damage, and defeating all Shadows from multiple deaths revives the last player who died on the map with partial HP/SP. Explosion damage is 100 per remaining Shadow HP. These rules are in the page’s inherited original-server block, with no in-game verification date; source context stays on About. The page explicitly identifies **one Base Level lost on death in Nightmare in Amatsu** as a Refuge change. Do not silently treat old EXP or respawn percentages outside that section as current additions.
- The database Codex glossary is linked early in the New Player Guide for unfamiliar skill, equipment, state, and stat keywords. No glossary is duplicated and no external scripts are imported.

## Celestial Tome — October 18, 2026

- Owner screenshots **screenPRM129.jpg–screenPRM131.jpg** show **Vali Sage**, **Vidar Sage**, and **Thor Sage** inside the **cottage**. Owner terminology overrides the older guide’s “cafeteria” label. NPC crops preserve native pixels and full original links. The owner confirms the recipes: **Vali → Inferno Tome**, **Vidar → Paradiso Tome**, **Thor → Purgatorio Tome**. Each screenshot appears beside that sage’s recipe.

- Reviewed Pitaya’s Celestial Tome tab (`gid=2052741816`) in the same workbook as Sun Headgears, segasunset’s full 90-entry HATred catalogue and four Tome records, Refuge’s Gear page, and the current item snapshot. Raw CSV, HATred data, HTML references, and extracted original crafting minimap are in ignored `imports/celestial-tome/`. Both community references agree on the recipes and sequence. The HATred footer identifies segasunset and attributes its data to the spreadsheet and server NPC scripts; no general reuse license is specified. No completed in-game quest is recorded.
- Complete **all 90 HATred quests**, then speak with **Chaos and Iris in Old Payon / Payon Distortion**. At **Death’s Castle**, interact with **Coffin**, enter the small room, and exhaust every dialogue option with **Balder**, identified by the owner as the NPC who gives Celestial Tome. Return to **Iris in the Orphanage Blacksmith Room**, choose yes, then return through the Coffin to Balder with the final materials. Exact Coffin coordinates are not recorded.
- Refuge’s Gear page confirms the **southern cafeteria in Varmundt’s Mansion** crafts the three great Tomes. Each costs **1,000 Distortion Shards + 100 Distortion Essence**, plus: Inferno — Vanish Manual X, Pickpocket Manual X, Agility Manual X, Hammer Manual X, **5 Jewel Bradium**; Purgatorio — Blink Manual X, Portal Manual Z, Union Manual, **10 Jewel Elunium**; Paradiso — Medic Manual X, Medic Manual Z, Life Manual X, **10 Jewel Oridecon**. One of each manual is listed. The current Tome item payload has no recipe field; retain community recipe provenance rather than claiming database confirmation of quantities.
- Final exchange: **1 Inferno Tome (24225), 1 Purgatorio Tome (24148), 1 Paradiso Tome (24107), 500 Distortion Essence (7361), 25 Jewel Shadowdecon (23080), 25 Growth Shadow Coffer (14735), 10 MVP Shards (7615)**. That means 800 Essences and 3,000 Shards overall when crafting all three precursor Tomes from scratch, before any shard-to-essence conversion.
- Current **Celestial Tome (24236)** is **account-bound**, requires **Base Level 130 to equip**, and has All Stats +2, Movement Speed +5%, HIT +15, Total HIT +5%, and healing/movement skill bonuses. Equipment level is not a confirmed quest entry gate. Account-bound reward does not establish a once-per-account quest rule. The owner requested removal of WIP and addition of the reward image; the guide is now published.

## Astrologika Moon and Sun Headgears — October 18, 2026

- Pitaya’s Sun Headgear Guide tab: https://docs.google.com/spreadsheets/d/1VXeW7JAKgn26ljPFa8ygWujwqXlkexOBUYtUk2s_Fg8/edit?gid=636686625. Quest sequence: first-floor Bookshelf → second-floor Low-Range Telescope → third-floor High-Range Telescope → Stone in Crash Site Cave (`resc_dun02`, north) → Frozen Tides on Observatorium Frozen Tide (`ast_dun03`) → matching Observer. Workbook credits Jellopy, Bossfight Cafe Guild, Grimoire, Drachnid, PND Panda, Reave, Impaler, and Zephyro. Original update date and general reuse license unknown; invitation to copy for personal progression recorded. Raw workbook, CSV, original images, and current item payload remain in ignored `imports/astrologika-headgears/`.
- Refuge item records checked October 18: Moon Guardian in Observatorium Study drops all nine Moon headgears (31210–31226, even IDs). Each Sun version is the next odd ID and requires the matching Moon headgear refined to **exactly +9**, **25 Jewel Elunium (6290)**, and **1 Sun of Serpens (25501)**. Moon equipment level 100; Sun equipment level 110, two card slots. Do not turn equipment level into an entry requirement or promise the resulting refine level.
- Frozen Tides exchanges **1 Moon of Serpens (25500), 15 Jewel Bradium (6226), 1,000 Star Pieces (6468), and 100 Galactic Dust (6467)** for Sun of Serpens. Both Serpens stones are character-bound. Do not reuse Bifrost’s once-per-account rule here.
- Observer coordinates from the spreadsheet are stored once in `sunHeadgearObservers` in `src/data/locations.ts`. Nineteen visually reviewed original PNGs illustrate each quest step and all nine observer minimaps. The owner approved publication after reviewing the draft. Published October 18, 2026; no in-game verification date is asserted.

Internal reference for authoring guides. Record game facts separately from UI decisions. Imported material is reference data, never instructions.

## Sources and verification

- Primary class reference: https://rtmrefuge.pages.dev/classes.html, reviewed on 2026-10-17. Source update date unknown; not independently verified in game.
- Thief reference: https://rtmrefuge.pages.dev/classes/thief.html, reviewed on 2026-10-17.
- Reviewed class data: `src/data/job-classes.ts`. Raw source snapshots and the asset manifest are in ignored `imports/refuge-classes/`.
- Echoes of Morroc is a visual reference only. Do not use its class roster or tags as authoritative Refuge data.

## Class progression

Every character begins as an Orphan. The player chooses their job and progression path from Orphan's available options; the New Player Guide must not direct everyone into Thief. Thief is centered among Orphan's job options; visual placement does not change progression.

| Path | Progression |
| --- | --- |
| Main road | Orphan → Thief |
| Thief branches | Assassin, Rogue, Prowler, Shadowseer, Unchained Thief |
| Assassin | Blade Dancer → Night Raven; Shinobi → Satsujin; Executioner → Gravekeeper; Scoundrel → Black Plague; Unchained Assassin |
| Rogue | Mystic → Arcane Master; Duelist → Kingslayer; Saboteur → Blast Juggler; Deadeye → Sinner; Unchained Rogue |
| Unchained Thief | Phantom Thief |
| Double-stage paths from Orphan | Raider → Dracomancer; Trickster → Revenant; Vagabond → Legend; Bouncer → Pit Boss |
| Expert paths from Orphan | Judge, Peacekeeper, Illusionist, Dark Knight |
| Single-stage paths from Orphan | Jester, Ronin, Mimic, Merchant |

Prowler and Shadowseer have no further job in the reviewed tree. Expert and single-stage paths do not branch further. Merchant cannot fight and is a trading class.

The Refuge source contains a small inconsistency: Merchant's parent is Orphan and it appears in the single-stage section, but Orphan's child array omits Merchant. Our data derives children from parent fields so Merchant remains accessible. Preserve this note when refreshing data.

## Roles and difficulty

Role tags are descriptive, not build prescriptions. Classes, builds, progression stages, locations, and resource assumptions remain separate dimensions.

Orphan displays "Start here" and Merchant displays "Vendor only" in the UI; retain the underlying source utility role in the data. The owner confirms Merchant requires Base Level 1 and Job Level 1. It is displayed beside Orphan as a separate vendor path.

The class-page snapshots provide explicit strengths and weaknesses for 20 of the 42 classes. These are recorded in `src/data/job-classes.ts`; missing entries remain null, and the info box states that Refuge has not listed them. Do not invent strengths or weaknesses for missing entries.

- Bouncer: Physical damage, Durable; moderate difficulty.
- Pit Boss: Physical damage, Durable, Battlefield control; moderate difficulty.
- Other class tags and difficulty are recorded individually in `src/data/job-classes.ts`.

## Thief

- Changes from Orphan at Job Level 10, with 500 Zeny in hand.
- Speak to Lydia the Thief in the Orphanage, `va_orpha 64,41`, ask for the test, and return with the Zeny.
- Rewards: Thief job and a starter dagger.
- Maximum Thief Job Level: 50.
- Weapons: daggers, swords, bows. Supports physical and magic playstyles.
- Double Attack is a dagger equipment property, not a learnable Thief skill.
- Back Stab supports dagger/sword attacks; Rolling Cutter and Cross Ripper Slasher form a spinning-attack sequence; Double Strafe and Arrow Shower use arrows.
- Flaming Petals, Freezing Spear, and Wind Blade build elemental focus. Auto Spell triggers learned spells through normal attacks.
- Envenom, Enchant Poison, and Detoxify provide poison-related options.
- Check current numerical skill details in https://rtm-database.pages.dev/skills.html rather than preserving balance-sensitive values without review.

## Leveling locations

- Sunken Ship: From the Orphanage, use Kafra Allysia to warp to Alberta, then speak with Fisk at the harbor entrance. The Refuge place record lists Fisk at Alberta `189,151`. Owner screenshot `screenPRM066.jpg` shows Fisk and the player at `187,145` on the Alberta map. The guide retains the Fisk crop and adds a 450 × 450 crop from `screenPRM081.jpg` showing two Pirate Skeletons inside the ship without the player or HUD.
- Upper Pyramid: owner screenshots `screenPRM067.jpg`–`screenPRM075.jpg` are in the Windows screenshot folder above. The guide uses a 420 × 420 crop from `screenPRM075.jpg`, showing two Mummies and a Minorous in the pyramid corridor without the player or HUD panels.
- Horn: owner screenshots `screenPRM076.jpg`–`screenPRM078.jpg` show Horns on Geffen Field. The guide uses a 500 × 500 crop from `screenPRM076.jpg` with three Horns, excluding the player and HUD panels.
- Faceworm: from the Orphanage, use Skia Nerius's Dungeon Caravan to warp to Payon Archer Village, then go one map east and one map north to the Dark Nest. Toxic Scorpions (Lv. 66) spawn in Faceworm's Inner Forest and Den Forest; Faceworm (Lv. 68), Faceworm Dark (Lv. 69), and Faceworm Queen (Lv. 70 MVP) spawn in the Dark Nest.
- The owner's Windows game screenshots are stored at `C:\Users\Gilded\Downloads\Refuge\ScreenShot\` (WSL path: `/mnt/c/Users/Gilded/Downloads/Refuge/ScreenShot/`). Use these as the first place to look for future in-game screenshots. `screenPRM066.jpg` is Fisk; the project uses a tight crop in `public/images/npcs/fisk-alberta.jpg`.
- For leveling routes, state the Orphanage as the starting point where applicable: speak with Skia Nerius in the main hall for dungeon travel, or use Kafra Allysia to warp to the route's starting city before giving the local directions. Keep separate warpers at other locations clearly identified by their map.
- Reach Orc Village by asking Skia Nerius in the Orphanage to warp there. West Orc Village is one map west.
- Upper Pyramid is reached from the Orphanage hallway past the Caravan Leader and Thief Guild; at the junction, take the upper portal. Pyramid Basement uses the lower portal.
- Frontier Fields is restored as a grouped leveling entry for the current Refuge records: Abandoned Frontier Outpost (Lv. 51–55), East Frontier Fields (Lv. 55–59), and Frontier Rocky Road (Lv. 55–60). Their listed monsters are in `src/data/locations.ts`; the old guide's leveling advice is not copied forward as current advice.
- The Toy Monitoring Room Refuge place record is the Toy Factory sub-area listing Stormy Knight Lv. 75 MVP. Link the Toy Factory guide entry to both Toy Factory Warehouse and Toy Monitoring Room records.
- Opera House place records use the map names `nif_dun01` and `nif_dun02`; Baroness of Sorrow (Lv. 120 MVP) appears in `nif_dun02`.
- Faceworm screenshot `screenPRM083.jpg` is cropped to a 500 × 500 exact in-game image showing a Faceworm and Toxic Scorpion without the player or HUD in `public/images/locations/faceworm.png`.
- Rachel Sanctuary is listed in the Refuge database as Freya's Sacred Precinct, maps `ra_san01`–`ra_san05`, with monsters Lv. 101–110. The row identifies Rachel Guard at Freya's Grand Temple (`166,215`) as the entry NPC; Gloom Under Night (Lv. 110 MVP) is on F5.
- Rachel Sanctuary image: owner screenshot `screenPRM106.jpg`, cropped to 600 × 600 in `public/images/locations/rachel-sanctuary.jpg` to show Vanberk and Isilla among the red stone platforms without the HUD or player.
- Most jobs transition to their endgame jobs in Rachel Sanctuary.
- Sky Garden has three leveling areas in the Refuge database: Village (`skydun1`, Lv. 101–104), Temple (`skydun2`, Lv. 101–104), and Okolnir (`skydun3`, Lv. 101–105). From the Orphanage, warp to Umbala, go one map north to Yggdrasil Tree, and continue through Yggdrasil Dungeon F1 and F2 to reach Yggdrasil Tree Trunk. Go one map north to Yggdrasil Tree Branches and speak with the Sky Garden NPC in the middle section. The shared monster list is Sif Avatar (101), Sleipnir Avatar (101), Idun Avatar (102), Siegfried Avatar (103), and Thor Avatar (104); the database spells Sarah Irene's name "Sarah Irine" and lists her at Lv. 105 MVP on the last floor of Okolnir. The owner confirms Sarah Irene; trade Einherjar Soul at the end of Sky Garden for powerful equipment. If warping someone there, do it for free.
- Sky Garden image: `screenPRM091.jpg` from the owner's Windows screenshot folder, cropped to a 600 × 600 square for `public/images/locations/sky-garden.jpg` to show a wider variety of enemies and the area.
- Leaf Cats image: `screenPRM097.jpg` from the owner's Windows screenshot folder, cropped to a 600 × 600 square in `public/images/locations/leaf-cats-field.jpg` to show Leaf Cats and their field.
- Opera House: From the Orphanage, Kafra Allysia warps to Umbala; use Umbala's Kafra to warp to Nifflheim, then enter at the pictured entrance. Owner screenshots `screenPRM100.jpg` and `screenPRM101.jpg` supply the entrance and enemy images in `public/images/locations/`.
- Kafra Allysia does not warp to Rachel. Routes to Rachel Sanctuary and Thor Volcano must go from the Orphanage to Prontera first, then use Prontera's Kafra to reach Rachel before following local directions.
- The Orphanage is itself a distortion of Varmundt Mansion. With the Bifrost Mirror unlocked, use the Orphanage distortion orb, then leave through the Pyramid-side passage and go to the library building at the upper-right of the map.

## Other owner-confirmed facts

- Display a weapon label alongside each job name. Mimic's main weapon is Codex (Refuge lists Codex and Cantrips, with Codex in its Available Weapons section). Illusionist's requested label is Puppet; keep the source equipment field as Illusion Gloves, since the puppet is its combat companion rather than its equipped weapon.
- Trickster starter guide: Orphan Job Level 10; Lorelei Sorin at `va_orpha 376,129`; choose the cold-hearted response, touch the wisp at `va_orpha 391,133`, and win Serin's number game at `que_trck01 197,198`. The Refuge page describes the reward as Serin's scythe, but the owner confirms the in-game reward is a **Black Scythe**. Advances to Revenant at Trickster Job Level 70. Source: https://rtmrefuge.pages.dev/classes/trickster, reviewed October 17, 2026; source date unknown, not verified in game. The source footer permits copying site content.
- The owner supplied Refuge gameplay screenshots 063–065 showing Lorelei Sorin, the Wisp, and Trickster Serin. Retain the originals unaltered in ignored imports; publish tight NPC-only crops beside the matching steps in the Trickster job-change callout. Do not link the leveling spreadsheet from the public guide; retain its text attribution and allocation guidance without an external link.
- Owner correction: the Trickster job-change reward is a **Black Scythe**. Ornstein can exchange the Exchange Voucher for a **Scythe of the Orphan**. Do not identify either item as Serin's scythe.
- Early Trickster leveling reference: https://docs.google.com/spreadsheets/d/1Z_9RXyn390tUyyvndG04YOMMVHmy3f0kksOx5mH3is0/edit?gid=109244848. Credited in the sheet to Phawkes, with suggestions from Sparda, Arumakan, Kim, Kharon, and knoxzera. Source date and reuse terms are unspecified. It lists stat targets and a Trickster skill allocation order for levels 1–100. For the stat example, direct players to raise both STR and LUK to 49 before progressing to later targets, adding VIT and INT as needed. It recommends maxing Burning Scythe; the owner says to use those points on Hellraiser instead when Fire endowment is not needed. The embedded Basic Trickster skill-tree screenshot (562 × 403) is reproduced unaltered in the Trickster guide. The Revenant screenshot is reserved for a separate guide.
- Trickster's main combo is Scythe Reap → Sweeping Slash. Scythe Reap activates Combo Ready; casting Sweeping Slash without Combo Ready causes reduced damage. Hellraiser has a long cooldown and activates Finisher Ready, which changes Sweeping Slash from two hits to three. Keep Combo Ready and Finisher Ready distinct and bolded in the guide.
- The Trickster guide covers the STR/LUK damage setup. True Sight is a key damage skill: it grants +3 to all stats and +3 Hit and Critical per skill level. Keep Dark Message and Dark Messenger out of this guide; they belong to the INT build. Mirror Image is not a focus for this setup.

- The New Player Guide serves as the Orphan guide; Orphan does not need a separate class page.
- All 90 headgears in https://hatredguide.segasunset.workers.dev/ are needed for Celestial Tome, per the owner. Acquisition details still need source review.
- Orphanage services and NPC evidence are tracked in `docs/orphanage-npcs.md`.

## Owner additions — October 18, 2026

- Trickster: Night Boots are nice to have, not mandatory; Samurai Mask is a good upgrade. Refuge item records list Night Boots [1] (16135) at level 20 and Samurai Mask [0] (5767, lower headgear) at level 50 with +20% total Critical Rate.
- Mad Drinker: Lv. 125–135; entry is the Mad Drinker Distortion in the Orphanage kitchen at 389,180, with Master of Balder listed as its requirement. Strange Love is the MVP.
- Death Castle: Entrance and Grandhall, Lv. 135–140. Travel west from Nifflheim → Valley of Niflheim → Skellington → Entrance; Strange Soul at nif_cas01 30,125 enters the Grandhall. Lord of Death is the MVP. Database records reviewed October 18, 2026; source update dates unknown.
- Comodo Swamp is mapped to Zenhai Marsh (cmd_fild03), Lv. 46–50, via Comodo and Papuchicha Forest (cmd_fild01). The owner confirms traveling east from Comodo for Galapagos; the database names the swamp Zenhai Marsh. Monsters: Alligator 46, Grove 47, Galapago 48, Mutant Dragonoid 50.
- Death Castle images: owner screenshots `screenPRM109.jpg`–`screenPRM114.jpg`; the leveling entry displays one 600 × 600 crop of 114, showing two mobs and nearby terrain without the player or HUD. Its SVG viewport preserves original screenshot pixels and colors. Originals are archived in ignored `imports/death-castle/`.
- Mad Drinker images: owner screenshots `screenPRM115.jpg`–`screenPRM118.jpg`; 115 shows the distortion orb in the Orphanage kitchen. The leveling entry uses one 500 × 500 crop of 117 showing three mobs without the player or HUD. Originals are archived in ignored `imports/mad-drinker/`.
- Comodo Swamp images: owner screenshots `screenPRM119.jpg`–`screenPRM121.jpg`; the leveling entry uses one 480 × 480 crop of 120 showing two Alligators and a Galapago without the player or HUD. Originals are archived in ignored `imports/comodo-swamp/`.

## Dungeon and distortion entrances — October 18, 2026

- Entrance spreadsheet: https://docs.google.com/spreadsheets/d/1RJ_aT-3F3K8f3Q6gjNiOebnsKmBMF6t87sVa95RUz5Y/edit. Bonfires tab `233624138` contains 51 locations; Distortions tab `1488763682` contains 24. Its introduction names ElPato/Duck and thanks rimesrea for suggesting written directions. The owner requests the public credit **OG Community of the OG Server**. Reuse terms and revision date are unspecified; the owner directed proceeding with the community credit. Raw XLSX, HTML, CSV, extracted original PNGs, and a row-to-section image manifest remain in ignored `imports/dungeon-entrances/`.
- All 163 embedded entrance references were mapped by drawing anchor to their spreadsheet section and reviewed in contact sheets. Local lossless WebP copies retain their full frames, dimensions, and colors. They use `SourceScreenshot`, alongside the corresponding entrance instructions. See `docs/assets.md` for provenance.
- `src/data/locations.ts` stores `dungeonEntrances`, reusing existing leveling routes by `locationId`. It contains the 75 spreadsheet entries, both Pyramid routes, and Mad Drinker. Each guide has one second-level heading per destination for the article outline. Leveling entries link back to their matching entrance section.
- https://rtmrefuge.pages.dev/world preserves original-server wiki tables, explicitly warns of Refuge changes, and allows copying site content in its footer. Use its ranks as original-server reference labels, not as confirmation of current numerical levels or mechanics. Current entrance NPCs, map sequences, monster levels, and mirror Master gates were checked against https://rtm-database.pages.dev/assets/data/db-places.json on October 18, 2026. Source update dates and in-game verification remain unknown.
- Owner confirms that dungeon rank indicates difficulty and aggression; a low monster level does not imply a safe dungeon. The shared warning uses **Thanatos Tower, Rank B** as its example and appears on Leveling Spots, Dungeons, and Distortions.
- Owner highlights the mouse arrow in map references as a location cue. The entrance guides explain how to follow that pointer to the destination map and use the gameplay minimap for the local entrance. World-map screenshot captions and alt text identify that cue; original pointers and frames remain unaltered.
- Current database differences: Abyss Lakes distortion requires **Master of Balder**, despite the original world table listing Thor. Rachel Hidden Temple/Freya Chambers list monsters Lv. 140–144, not the original table's 145–150. Current Regenschutz Secret Laboratory record lists Lv. 140–142. Current Thanatos Paradise route goes through Tower Lower and Upper Level before the distortion; the old spreadsheet calls the entrance “first floor.” Preserve that specific difference in its entry.
- Geffenia Antitower is a distortion in the world page and entrance sheet, but its current place records are classified as Dungeon. Preserve the classification note. Old Payon, Old Monastery, and Field of Fire have screenshot-supported entrance locations but no matching current database requirement records in this review; do not invent mirror requirements.
- Jormungand's entrance sheet lists Base Lv. 130 as a requirement; current records list monsters at Lv. 150 in the lair and Lv. 155–160 in Hall of the Last God. Keep entrance requirements distinct from monster levels.
- Owner presentation update: keep sources, acknowledgements, source/version caveats, and verification metadata on `/about/`, not in individual guide sections. Guide headers retain editorial update dates and the shared footer links to the source index. This also applies to the Trickster guide and its article outline.
- Distortion Entry requirements callouts are reserved for special conditions, including Loki’s one-time Enriched Oridecon unlock and the original sheet’s Jormungand Base Level 130 condition. State the common Bifrost Mirror requirement once in the introduction; keep mirror Master gates in the detailed routes, without repeating a generic requirement/WIP box under every distortion. Abandoned Castle’s screenshot says Rank A, while the world table says S; retain both labels and the specific conflict.

- Additional access reference: Bahadur, “Guia de acesso para as Distortion Dungeons,” https://necropolecomercial.com/nc/guia-de-acesso-para-as-distortion-dungeons/, published October 31, 2023; reviewed October 18, 2026. Original-server guidance, last revision unknown, all rights reserved. Archived HTML remains in ignored imports; no source images or prose reproduced. Confirms the Assassin accepts **1 Enriched Oridecon once**, permanently unlocking Loki’s entrance. Inside the guild: first right portal, upstairs, left corridor, south, then east to the Assassin. The page’s old numerical levels, fares, and conflicting orb names do not override current Refuge records. Credits are in the About page’s Distortions source group.
- Owner display update: show the required mirror jewel beside the distortion rank (`Eye of Vidar`, `Eye of Vali`, `Eye of Thor`, or `Eye of Balder`). `mirrorEye` records the destination’s Master/eye, while detailed routes retain earlier mirror gates for nested distortions. Omit the jewel when the reviewed requirement is unknown. The long general Orphanage travel introduction was removed from Dungeons at the owner’s request.
- Terminology: the owner requests **Mirror eye**, not “Mirror jewel,” beside ranks. Old Payon and Old Monastery metadata remain unknown: their supplied screenshots show entrance orbs without rank/eye dialogue; neither has a matching record in the reviewed Refuge place payload or an entry in its dungeon rank table. A further reference search did not confirm their monster levels, ranks, or required eyes. Do not infer requirements from orb colors or copy the levels of their entrance maps.

- Owner identifies the Weaver of Dreams sprite as **Baroness of Blood**, database monster ID **2661**, listed on https://rtm-database.pages.dev/mvp-timer. The new-player NPC card uses its original animated GIF from `/assets/sprites/2661.gif`, replacing the previous screenshot crop. Preserve the public NPC name Weaver of Dreams and its Dream Enchant service.

## Bifrost Mirror quest — October 18, 2026

- References: https://rtmrefuge.pages.dev/guides (copying permitted in footer) and Bahadur’s https://necropolecomercial.com/nc/guia-da-hide-quest-bifrost-mirror-shard/, published October 23, 2023 for the original server. Last revision dates unknown. Both agree on the collection sequence, assembly fees/order, and reward. Source snapshots, importer review, selected originals, and image manifest remain in ignored `imports/bifrost-mirror/`. No in-game verification date is recorded.
- Collect the Bifrost Mirror Shard at the eastern tomb in `moc_fild14`. The illustrated route from Morroc goes south, then follows `moc_fild12` → `moc_fild11` → `moc_fild15` → `moc_fild14`.
- Eye of Vidar: Alberta northwest → `pay_fild03` → south to `pay_fild06`, tomb on the west side. Eye of Vali: south of Hugel, `hu_fild06`, tomb behind a house near the middle. Eye of Thor: Rachel east → `ra_fild12` → north `ra_fild08` → north `ra_fild04` → west `ra_fild03`, tomb near the middle. Eye of Balder: northeast Nifflheim. Each tomb is labeled Bifrost Stone Shard; select “Dig the thing out.” These routes are reusable data in `bifrostQuestLocations` in `src/data/locations.ts`.
- Use the owner-confirmed Orphanage city routes: Prontera then Rachel for Thor, Umbala then Nifflheim for Balder. Do not direct Kafra Allysia straight to Rachel.
- Hugel Ferry → Snow Fields, then east, north, north to Dicastes Diel. Cross the bridge into the palace. Main Elevator behind reception → Main Corridor; Study Elevator to the right → Sage’s Study.
- Add eyes in order at their matching Masters: Vidar 25,000 Zeny; Vali 50,000; Thor 100,000; Balder 300,000. Total assembly fees **475,000 Zeny**, excluding travel. Original-source travel fares are not promised as current costs.
- Completing the mirror awards **Complete Mirror** and **Costume Cold Angel Wings**. The owner confirms the Bifrost Mirror is account-bound and the quest only needs completing once per account; do not present the older source’s character-bound mirror statement as current. A completed mirror does not bypass extra entrance conditions such as Loki’s one-time payment.
- The walkthrough uses fourteen manually reviewed instructional frames: five tombs, ferry, palace, two elevators, four Masters, and costume reward. Source captions retain the relevant map or elevator selection; full-size links preserve readability. The owner requested the Before you start content as a callout box. Credits, historical-source context, and verification metadata remain on About.

- Owner confirmation: **Bifrost Mirror is account-bound; complete its quest once per account**. This overrides the older world reference’s character-bound mirror statement. Do not infer the individual eyes’ transfer rules from that correction. Prerequisites and rewards use bullet lists, and the walkthrough sections are numbered 1) through 8).

## Blooming Rose Sandals — October 18, 2026

- Current Refuge item **22071**, https://rtm-database.pages.dev/index.html?id=22071, reviewed October 18, 2026. Recipe: **500 Distortion Shards (7360)** and **10 MVP Shards (7615)** at **Rose Sage**, **Varmundt’s Mansion — Interior**, **top right / northeast**. The `how[9] = 9` position is interpreted by the database UI as top right. No precise NPC coordinates, extra crafting gate, or Zeny fee is present in the reviewed recipe; do not invent any.
- Base Level **120** is the **equipment** requirement, not a confirmed crafting prerequisite. The item has one slot, +10% movement speed, and +1 ASPD limit. Base-stat thresholds of 90 activate the listed per-refine bonuses; consult the current item entry for full numerical effects.
- Distortion Shards have monster drop records in the database. Double-clicking converts 100 Shards into one Distortion Essence, so reserve the 500 required Shards before converting extras. MVP Shards are included in MVP Prize Boxes. Do not substitute Essences for Shards in the recipe.
- https://rtmrefuge.pages.dev/gear confirms crafting sandals in Varmundt’s Mansion and the Lighthalzen airship route. The existing owner-confirmed mirror route exits the Orphanage via the Pyramid-side passage after using its distortion orb. `bloomingRoseSandalsLocation` stores the NPC and route text; reuse it rather than repeating access facts elsewhere.
- Owner correction: do not use the earlier borrowed entrance frames for this quest. Use the owner’s `screenPRM125.jpg`, showing the **Orphanage Distortion** orb in the hallway near **Merchant Guild**. The guide follows that route rather than the earlier main-hall orb/airship alternatives.
- Raw current item payload, Refuge Gear page, and database UI field definitions remain in ignored `imports/blooming-rose-sandals/`. Source update and in-game verification dates are unknown. Public credits are grouped on About, with prerequisites, numbered sections, and a rewards callout matching the Bifrost guide.
- Owner correction: begin the sandal guide by obtaining **1 pair of Old Rose Sandals (22070)**, then gather the other materials, visit the NPC in Varmundt’s distortion, and receive Blooming Rose Sandals. Treat the old pair as required even though the Blooming database ingredient array lists only the two stack materials. Old Rose Sandals’ current drops: Lost Traveler (Mansion Garden), Navigator (Mansion Hidden Garden), Paradox Amdarais (Mansion Lost Area). The owner subsequently confirms the Old Rose Sandals must be refined to **exactly +7** before the repair. Do not interpret this as at least +7.
- Distortion Shard farming examples checked in the current item data: Penomena, Joker, Owl Duke, Owl Baron in Nightmare Clock Tower; Spectre Raydric, Spectre Raydric Archer, Khalitzburg Knight in Old Glast Heim. Source links lead to each distortion and the material’s full drop record. The guide uses four numbered sections: old sandals, materials, Rose Sage, rewards.

- Owner screenshots 123–128 now illustrate the sandal walkthrough. 126 shows **Rose Sandals Repair** above Rose Sage; 127 shows **“Please, fix my Sandals!”** and **“What do you need to fix them?”**; 128 confirms repair of Old Rose Sandals for **10 MVP Shards + 500 Distortion Shards**. These screenshots verify the displayed NPC, dialogue, and requirements, not a completed turn-in. Do not treat the vendor listings in 123/124 as fixed prices or their random item options as guaranteed rewards.

- Owner-confirmed sandal details: **Old Rose Sandals have random roll options; Blooming Rose Sandals do not**. The base pair must be **exactly +7**, not a minimum threshold. Show both in the walkthrough; treat the Blooming option bars as fixed bonuses, not random rolls. Owner-requested screenshot crops isolate the old tooltip (including its roll bars), upgraded tooltip and fixed option bars, correct distortion orb, Rose Sage/service label, repair choices, and material dialogue. Native CSS viewports preserve the original JPEG pixels and full-size links.

- Owner clarification: display the option bars on the Blooming Rose Sandals screenshot as well. Those bonuses are **fixed options**, unlike Old Rose Sandals’ random rolls. The reward viewport includes the complete item tooltip and option panel.

## Revenant guide — October 19, 2026

- Owner confirms final-job guides cover obtaining the job through Base Level 130; most jobs evolve around Base Level 99 onward. Beyond 130, most locations require specific equipment and setups; a prominent scope notice sets that boundary. Actual job requirements remain distinct: Revenant requires Trickster Job Level 70.
- Reviewed Refuge's Revenant page and the complete Phawkes workbook (StatsSkills Guide, Gears Guide, How to Combo). Previous local exports contained only the stats/skills tab. Full workbook and text extractions remain in ignored `imports/phawkes-full.xlsx` and related files. Source revision and reuse terms unspecified; owner requested guide integration. Credits: Phawkes; Sparda, Arumakan, Kim, Kharon, knoxzera (suggestions); Trueduck (gear template). No in-game verification recorded.
- Local WIP Revenant guide follows the class template, using the original full-frame skill-tree image, stat targets, allocation order, combo sequences, and selected gear suggestions. Refuge Changes is a named Overview callout shared by job guides. Refuge source permits copying site content; its Revenant mechanics were transcribed by another community before the original wiki went offline.

- Owner prioritizes Darkside Shadow and Vampire Mark as Revenant buffs, and High Jump as utility. Include them in Core Gameplay and the buff maintenance sequence; keep the spreadsheet’s original allocation order distinct.

- Owner confirms the Revenant job-change egg’s pet grants leech. Include this benefit in the reward description; no numerical leech value was supplied.

- Owner questions the Reaper pet’s stun effect. Remove that claim from the guide despite the Refuge class page mentioning it; leech remains owner-confirmed.

- Owner classifies Underworld Rainstorm as Revenant’s final damage spell: present it with Reaping Slash and Roaring Overslash in core gameplay. Haunting Slice, Phantom Slice, and High Jump belong under utility. This supersedes the earlier convenience grouping for Rainstorm.

- Owner emphasizes investing in DEX after learning Darkside Shadow for its physical skill damage scaling. No target DEX value is specified; include this alongside the spreadsheet’s STR/LUK/VIT targets.

- Owner requests a stat-allocation callout: spreadsheet allocations are examples, subject to each player's build, equipment, and survival needs. DEX improves physical skill damage when Darkside Shadow is learned and active. Owner’s personal Base Level 131 example is 99 STR / 90 LUK / 90 DEX / 10 VIT / 17 INT, with possible VIT removal under consideration; this is context, not a prescribed allocation or a reason to extend the guide beyond 130.

- Owner replaces Revenant’s level-based stat table with before/after Darkside Shadow examples. Before: carry forward Trickster’s 70 STR / 90 LUK foundation, splitting support points between VIT and INT, without requiring DEX. After learning and using Darkside Shadow: 99 STR / 90 LUK / 90 DEX / 10 VIT / 17 INT. Treat both as examples rather than mandatory allocations; shifting to lower VIT/INT requires reallocation. This supersedes the earlier decision to retain the personal allocation only as context.

- Owner revises the post-Darkside Shadow example at Base Level 130 to **99 STR / 90 LUK / 90 DEX / 25 INT**, removing the 10 VIT entry. This supersedes the earlier 10 VIT / 17 INT example.

- Owner explains the lower-VIT example: at higher levels of Ominous Presence and Darkside Shadow, reliance on the overheal shield can allow moving points out of VIT. Present this as an option, not a universal recommendation.

- Owner supersedes Phawkes’ older Revenant allocation for the Base Level 130 guide: unlock Roaring Overslash, max the buffs/passives (Advanced Scythe Mastery, Ominous Presence, Darkside Shadow, Vampire Mark), then max Roaring Overslash. Remaining points are choices between unlocking Phantom Slice, Haunting Slice, High Jump, Underworld Rainstorm, or maxing Reaping Slash; do not prescribe maxing Haunting/Phantom or imply level 150 skill points are available. Remove Phawkes’ outdated skill-tree screenshot from the guide.

- Skill points come from **Job Level**, not Base Level. Base Level 130 defines the guide’s content scope, not an exact skill-point budget. Do not infer available skill points from Base Level. Keep each max-skill priority as its own numbered step, matching Trickster.

- Owner supplies new Trickster and Revenant skill-tree screenshots for local development. Display both full-frame as allocation examples, replacing the older Trickster spreadsheet screenshot. Do not infer Job Level or a universal skill build from the images.

- Owner confirms Haunting Slice autocasts Scythe Reap, granting Combo Ready and allowing the regular Reaping Slash / Roaring Overslash combo after closing the gap. Use this explanation instead of the older spreadsheet’s fixed gap-closing sequence.

- Owner supplies a quick Revenant rotation: Combo Ready enabler (Haunting Slice, Scythe Reap, or Sweeping Slash) → Reaping Slash → Hellraiser → Reaping Slash → Sweeping Slash → Roaring Overslash. Include it under How to Play with skill icons.

- Owner clarifies Haunting Slice’s Scythe Reap trigger: 100% success at maximum Haunting Slice level. Remove Haunting Slice from the main quick-rotation opener choices and explain it as an alternative that must trigger Scythe Reap to grant Combo Ready. This qualifies the earlier unconditional autocast wording.

- Owner confirms Ominous Lament as the current best-in-slot Revenant scythe and requests removing Abyss Wanderer Card from its weapon recommendations.

- Owner identifies Volan of the Sun as current best-in-slot Revenant top headgear and adds Dream of Kings Card to top-headgear recommendations. Local item snapshot confirms Volan of the Sun (31221), required level 110, two card slots.

- Owner adds Veins Ghoul Card to Revenant mid-headgear cards and identifies Eye of Hearts as current best-in-slot mid headgear. Dandelion Eyepatch is useful with a Roaring Overslash damage % roll. Local snapshot: Eye of Hearts (5930), level 125, one slot.

- Owner removes Magician Hat from Revenant recommendations and prioritizes Darkness Helm as an upgrade after the job change.

- Owner marks Asgard Blessing and Stormwalker Fin as optional upgrades in the Revenant guide.

- Owner adds optional Toast in Mouth and Donut in Mouth, marks Mystic Blue Rose optional for SP regeneration, and identifies Flaming Weaver as best-in-slot Revenant low headgear. Adds Voice of Sorrow Card. Local item snapshot confirms Toast/Donut level 100 with one slot each; Flaming Weaver level 125 with two slots.

- Owner adds Dry Goblin Card and Genesis Bright Armor / Genesis Raid Cloth as possible best-in-slot Revenant Holy armor choices; marks Fate and Power Dragon Plate as upgrades after the job change and removes Excellion Suit. Current Refuge item payload reviewed October 19, 2026 (`imports/revenant-items-current.json`) confirms White Knight Armor is Holy, Khalitzburg Knight Armor is Dark, and both Genesis pieces are Holy, level 130 with one slot and knockback immunity.

- Owner provides the direct Revenant Discord discussion thread: https://discord.com/channels/1500898812942745602/1545533508515143833. Use it in the final help section instead of the general server invite.

- Owner adds Apocalypse Scale Mail and Apocalypse Occult Suit as possible best-in-slot Revenant choices when Dark armor is needed. Current item records confirm both are Dark element, required level 130, with one slot.

- Owner recommends pairing Revenant’s Metal Boots MK I with Strange Metal Ring for the set bonus and adds Blooming Rose Sandals as a possible best-in-slot shoe choice. Current item records confirm the Metal set and sandals level 120 with one slot.

- Owner updates Revenant accessories: pair Strange Metal Ring with Metal Boots MK I; add Sage Ring (current record: level 100, three slots). Remove Silent Ronin, Echio, and Wormtail cards; add Doomfist Card.

- Owner adds Megingjard to Revenant accessories; current database spelling is Megingjard, required level 100, zero slots.

- Owner corrects Revenant Shadow equipment: Red Velvet does not exist in current Refuge; remove it. Unknown Tech is the current best-in-slot set. Current item records list Armor, Boots, Pendant, and Shield at required level 100.

- Owner approves removing Revenant’s WIP and publishing the guide on October 19, 2026. Remove WIP labels from the guide, sidebar, and class-tree info link, and allow indexing. Source-reviewed status remains; no in-game verification date is asserted.

## Amatsu seals — October 19, 2026

- Owner screenshots 145–155 and `amatsu unlocks.png` establish the Tatami Maze route: I Spell (lower center), II Surge (southwest), III Blade (northwest), IV Bow (northeast). Dialogue says to choose **Touch the stone** and clear summoned enemies within **90 seconds**. Cleared seals become tall jagged stones with **[awake]** labels. Do not infer reset, cooldown, failure, party-credit, or level requirements from these images.
- Owner explicitly supplies enemies in route order: **3 The Paper + 3 Shinobi; 5 Tengu + 1 Silent Ronin; 4 Miyabi Doll; 5 Antique Firelock**. Nearby normal spawns and looted items are not evidence overriding these encounter counts.
- Owner confirms awakening all four rewards **20% EXP server-wide for one hour**, and **weakening the entire Amatsu SS distortion dungeon**.
- Owner approved publication and upload on October 19, 2026; Amatsu Seals Unlock is published. Original screenshots and supplied map retained in ignored `imports/amatsu-seals/`; selected seal/dialogue crops displayed with SourceScreenshot at the owner’s request, with full originals available through image links. Map creator/reuse terms unknown; do not assert an open license.

- Owner screenshot **156** confirms the server-wide **Seal of Amatsu (4/4)** buff on another character: +20% EXP, all four seals awake, remaining duration, and **Amatsu SS is at its weakest**. This is dungeon weakening in addition to the EXP reward; do not describe it merely as EXP applying inside Amatsu SS. No numerical weakening amount is supplied. The guide displays a crop of the right-side icon and tooltip.

- Owner confirms all seal encounter enemies are aggressive and can be difficult for players leveling in the area. The guide recommends a party or help from a high-level player and thanking whoever awakens the seals for the server.

## Forest Maze — October 19, 2026

- Forest Maze is the database’s **Labyrinth Forest** (`labyrinth-forest`, `prt_maze02` and `prt_maze03`). Current `db-places.json` gives the full monster range **1–50**. Current `db-mobs.json` confirms **Baphomet Jr. 45**, **Baphomet’s Shadow 48**, **Baphomet MVP 50**, and **Rank C Shadow 1**, alongside lower-level regular monsters. Preserve the full 1–50 range as data, but place Forest Maze alongside 45–50 encounters: the owner confirms Baphomet Jr. and Baphomet’s Shadow are abundant and dangerous for low-level players.
- Leveling Spots uses ascending minimum monster level, then maximum. Dungeons normally follows the same order, with explicit exceptions for Forest Maze’s abundant 45–50 encounters and Yggdrasil’s misleading Level 1 plant range.

## Yggdrasil Tree safety and ordering — October 19, 2026

- Owner confirms Yggdrasil Tree plants cast magic and its Level 1 range is misleading as a beginner recommendation. Keep the accurate plant range but place the entry directly before Sky Garden in Dungeons with a warning, as requested by the owner.
- Current Refuge place and monster records list **Yggdrasil Tree Trunk and Branches at 96–99**, correcting the owner’s tentative recollection of around 80: **Miming 96, Menblatt 97, Fairy Les 98, Parus 99**. These are separate areas from `ygg_dun01`/`ygg_dun02`; do not blend them into the dungeon’s plant-level range or invent a connecting exit route from the database’s separate travel routes.

## Dungeon route presentation — October 19, 2026

- Dungeon entries with a route display that route once, without repeating shared access text or legacy directions above it. Unique entrance positions, final interactions, and library access are folded into the route. Sky Garden’s Umbala approach and Varmundt’s mirror approach remain separate alternatives. All dungeon entries use a Route box; shared access directions supply the route when no step list exists. Forest Maze’s route follows the current place record: Skia Nerius → Forest Maze → Prontera Field F1 → Labyrinth Forest. Distortion access display is unchanged.
