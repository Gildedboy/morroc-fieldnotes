# Refuge game reference

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

## Other owner-confirmed facts

- Display a weapon label alongside each job name. Mimic's main weapon is Codex (Refuge lists Codex and Cantrips, with Codex in its Available Weapons section). Illusionist's requested label is Puppet; keep the source equipment field as Illusion Gloves, since the puppet is its combat companion rather than its equipped weapon.
- Trickster starter guide: Orphan Job Level 10; Lorelei Sorin at `va_orpha 376,129`; choose the cold-hearted response, touch the wisp at `va_orpha 391,133`, and win Serin's number game at `que_trck01 197,198`. The Refuge page describes the reward as Serin's scythe, but the owner confirms the in-game reward is a **Black Scythe**. Advances to Revenant at Trickster Job Level 70. Source: https://rtmrefuge.pages.dev/classes/trickster, reviewed October 17, 2026; source date unknown, not verified in game. The source footer permits copying site content.
- The owner supplied Refuge gameplay screenshots 063–065 showing Lorelei Sorin, the Wisp, and Trickster Serin. Retain the originals unaltered in ignored imports; publish tight NPC-only crops beside the matching steps in the Trickster job-change callout. Do not link the leveling spreadsheet from the public guide; retain its text attribution and allocation guidance without an external link.
- Owner correction: the Trickster job-change reward is a **Black Scythe**. Ornstein can exchange the Exchange Voucher for a **Scythe of the Orphan**. Do not identify either item as Serin's scythe.
- Early Trickster leveling reference: https://docs.google.com/spreadsheets/d/1Z_9RXyn390tUyyvndG04YOMMVHmy3f0kksOx5mH3is0/edit?gid=109244848. Credited in the sheet to Phawkes, with suggestions from Sparda, Arumakan, Kim, Kharon, and knoxzera. Source date and reuse terms are unspecified. It lists stat targets and a Trickster skill allocation order for levels 1–100. For the stat example, direct players to raise both STR and LUK to 49 before progressing to later targets, adding VIT and INT as needed. It recommends maxing Burning Scythe; the owner says to use those points on Hellraiser instead when Fire endowment is not needed. The embedded Basic Trickster skill-tree screenshot (562 × 403) is reproduced unaltered in the Trickster guide. The Revenant screenshot is reserved for a separate guide.
- Trickster's main combo is Scythe Reap → Sweeping Slash. Scythe Reap activates Combo Ready; casting Sweeping Slash without Combo Ready causes reduced damage. Hellraiser has a long cooldown and activates Finisher Ready, which changes Sweeping Slash from two hits to three. Keep Combo Ready and Finisher Ready distinct and bolded in the guide.

- The New Player Guide serves as the Orphan guide; Orphan does not need a separate class page.
- All 90 headgears in https://hatredguide.segasunset.workers.dev/ are needed for Celestial Tome, per the owner. Acquisition details still need source review.
- Orphanage services and NPC evidence are tracked in `docs/orphanage-npcs.md`.
