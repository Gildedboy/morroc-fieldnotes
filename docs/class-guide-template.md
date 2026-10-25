# Job class guide template

This is the required structure for every class guide, including its first incomplete draft. Reuse the established components, section order, boxes, image presentation, allocation formats, and gear tabs. Change class-specific facts, not the design. Missing content gets a visible WIP placeholder in its prescribed place; it does not justify omitting or redesigning a section.

Use Trickster, Revenant, Vagabond, and the reviewed Legend sections as implementation references. Research each class independently; never copy another class’s stats, skill priorities, equipment choices, or combat mechanics without support.

## Required guide contract

| Order | Part | Required presentation |
| --- | --- | --- |
| 1 | Portraits | Male and female portraits side by side, using local assets. |
| 2 | Final-job scope | Exact warning Callout below; change only the class name. Omit for non-final jobs. |
| 3 | Overview | Short class/build identity and relevant mechanics, followed by the Refuge Changes Callout. |
| 4 | Job Change Quest | One enclosing Callout holding requirements, numbered travel/quest steps, NPC cards, contextual images, warnings, reward, and male/female attacking sprites. |
| 5 | Core Gameplay & Skills | Concise descriptions with SkillIcon; effects and meaningful restrictions, no numerical breakdowns or unlock requirements. Separate utility list when applicable. |
| 6 | Stat allocation | Subsection under Core Gameplay; shared StatAllocationNotice, followed by numbered targets or Stage / Stats / Notes table. Explicit Base Level scope and supported adjustments. |
| 7 | Skill allocation | Separate subsection after stats; numbered learning priorities with SkillIcon. Distinguish unlock, level target, and max. Do not confuse this order with description order. |
| 8 | Skill-tree example | Owner-authorized SourceScreenshot immediately after skill allocation, cropped to the skill window when requested, labeled an example, full original available. |
| 9 | How to Play | Numbered actionable combat loop with SkillIcon, upkeep, sustain, defenses, and recovery/reset. Group related defensive tools in one step when appropriate. |
| 10 | Leveling Spots | Link to the shared guide; reusable route information stays in locations.ts. |
| 11 | Progress Gear | Shared ProgressGearNotice, then all standard slot tabs with GearTabBehavior; Equipment / Level / Notes tables; cards below divider. Main/off hand together inside Weapon. Final jobs also require a Class Gem tab. |
| 12 | Next Step(s) | Next job and actual requirements for evolving jobs; class discussion and Build Planner for final jobs. |
| 13 | Source metadata | Source provenance, separate editorial/source/verification dates and attribution through the existing About metadata system. |

Required sections, gear slots, and missing card recommendations stay visible with WIP labels and specific pending notes. If an instructional screenshot is unavailable, mark that missing illustration WIP beside the relevant step. Never invent artwork, allocations, or mechanics to fill the structure. Keep the whole guide WIP until its required content has been reviewed.

## Page structure

1. **Overview** — Introduce the class, its role and gameplay identity in a short, sourced paragraph. Include Refuge-specific changes when they affect how the class works.
2. **Job Change Quest** — Keep the entire quest—requirements, travel directions, ordered steps, NPC cards, instructional screenshots, warnings, and rewards—inside one enclosing `Callout`, matching Trickster. Never box only the requirement while leaving the quest outside. Use `NpcCard` for quest NPC instructions, with an existing identified sprite or owner-screenshot crop when available. Put each supplied NPC or location screenshot beside the step it illustrates. Explain the reward, then end the box with both male and female attacking sprites of the obtained class. Use the existing `.trickster-quest-reward` layout and `picture` elements that serve the corresponding still images for `prefers-reduced-motion: reduce`. Reuse local assets with `withBase()`. Use `JobRewardSprites` for the male/female reward pair, extending its supported jobs when adding a class.
3. **Core Gameplay & Skills** — Explain the class's build or gameplay path and the relevant skills. Use skill icons from the Refuge database. Make combo states and combat restrictions explicit; put unlock prerequisites in Skill allocation. For skill-based builds, present main damage skills first, then buffs and passives; for auto-attack builds, lead with their relevant masteries and buffs. Preserve owner-approved description order. Group convenience skills separately. Follow the skill descriptions with **Stat allocation**, then **Skill allocation**, as detailed below. These are required parts of a complete class guide, not optional extras.
4. **How to Play** — Use `SkillIcon` beside each named skill, matching Trickster. Give an actionable sequence: what to maintain, what to cast first, which follow-up to use, and the resource or timing details that affect the result.
5. **Leveling Spots** — Link to the shared Leveling Spots guide for monster ranges, routes, and location notes. Do not duplicate location details in each class guide.
6. **Progress Gear** — Start with the shared `ProgressGearNotice.astro` callout ("Keep leveling — gear upgrades come over time"), preserving its shared wording. For final jobs, pass `finalJob` to add that players may pause leveling at Base Level 130 to improve gear before harder content. Always use the tabbed slot layout, including drafts with only one populated slot: Weapon, Top Headgear, Mid Headgear, Low Headgear, Armor, Garment, Shoes, Accessories, Shadow Sets, Runes, and Manuals. Include Shield after Weapon when the selected build uses a shield; dual-wield off-hand weapons stay inside Weapon. Final jobs always include a separate Class Gem tab before Runes, with WIP if recommendations are pending. Do not substitute old job-specific Shadow sets for current Class Gems. Only include a Shadow Sets tab when the owner requests supported Shadow equipment; Legend includes the owner-approved Legacy of Coins, Endless Forest, Bushido, and Fanatic Servant sets, separately from Class Gems. Use the Trickster tables in every populated gear tab: Equipment, Level, Notes. Keep slot counts on equipment names and set membership or tradeoffs in Notes. Do not replace these tables with inline lists of links. Put card recommendations below a horizontal separator from the equipment list. Always use a bold Cards label followed by a bulleted list, one recommendation per bullet, including single-card slots. Keep effects, affordability, pairing, and tradeoffs in the relevant bullet; never use inline card paragraphs or dot-separated links. For dual-wielding jobs, put Main hand and Off hand tables together inside the Weapon tab. Never place gear tables directly in the article outside the tab panels. Keep all remaining slot tabs visible with WIP labels and concise pending notes. Use the shared `GearTabBehavior.astro` rather than custom tab logic.
7. **Next Step** — Name the next job and its requirement when known, then link to its guide or class page. Mark unfinished material as WIP.
8. **Sources & acknowledgements metadata** — Record sources, editorial date, source update dates, verification status, and required attribution on About, following `docs/content-workflow.md`. Do not add a separate credits section to the guide body.

Keep sections focused on the selected class and build. Keep every required template section visible. For a section without supported content, add a `WIP` badge to its heading and one short sentence identifying what is pending. Never invent details to fill it. Gear slot counts use `[N]` only for equipment with card slots; shadow equipment has no card-slot marker. Keep set membership in the notes. Distinguish optional upgrades from recommended progression, and preserve any owner-approved caveats.

## Stats and skill progression

Use Trickster’s early-leveling progression as the structural reference, with class-specific recommendations from reviewed sources or owner input. Do not copy its STR/LUK targets or skill priorities to another class.

- **Stat allocation:** start with the shared `StatAllocationNotice.astro` callout (“Adjust stats to your build”), preserving its wording in every class guide. Then name the build and its main stats, then provide an ordered progression of stat targets. Use a numbered list for a single progression, or a Stage / Stats / Notes table when allocations change with a job skill, equipment milestone, or leveling stage. State whether paired targets mean raising both stats or choosing between them. Explain supported HP, SP, accuracy, damage, and survival adjustments. Identify Base Level milestones explicitly. Describe the allocation as an example players can adapt.
- **Skill allocation:** give a numbered learning order, one priority per step. Distinguish unlocking a skill, raising it to a specific level, and maxing it. Include prerequisites, `SkillIcon` beside named skills, and supported alternatives or remaining-point choices. Skill points come from Job Level; a Base Level scope does not establish the available point budget.
- Put an owner-supplied or otherwise authorized skill-tree screenshot directly after the allocation, using `SourceScreenshot`. Label it as an allocation example; do not infer an unshown Job Level or make the pictured build mandatory.
- Drafts missing supported stat targets, skill order, or gear progression remain WIP. Track the missing sections in `docs/todo.md`; do not invent recommendations. Keep missing sections visible with a `WIP` heading badge and a short, specific pending note. A class’s main stats alone do not establish numerical targets or a skill-learning order.

Before completing a class guide, review it against Trickster for: portraits; overview and Refuge Changes; boxed job change, instructional images, rewards and attacking sprite; core and utility skills; stat progression; skill-learning order and available skill-tree image; How to Play; shared leveling links; gear progression and cards; Next Step or final-job Next Steps; and source metadata on About.

## Implementation reference

The shared class page shell, header, article outline, mobile outline, and source block live in `src/pages/classes/[id].astro`. Class-specific guide content lives in a component under `src/components/classes/`; `src/components/classes/TricksterGuide.astro` is the current full example. Add outline entries in the class page when adding or renaming sections. Keep class-specific mechanics, screenshots, and gear in that class's component.

- Final-job guides cover progression from obtaining the job through Base Level 130. Use the exact scope callout below, replacing only `{Class}` with the job name. Keep its title, wording, emphasis, and warning tone consistent across final-job guides. Most jobs reach their final evolution around Base Level 99 or later; retain each class’s actual job-change requirements and distinguish Base Level from Job Level.

```astro
<Callout title="Guide scope: job change to level 130" tone="warning">
  <p><strong>This guide follows your progression from the {Class} job change all the way to Base Level 130.</strong> Beyond level 130, most locations require specific equipment and setups. Use this foundation to explore, adapt your build, and choose your own route.</p>
</Callout>
```

- Place a **Refuge Changes** callout in Overview for every job guide, containing supported Refuge-specific changes. Do not invent changes for jobs without documented differences.

- Put class portraits first in the guide body, followed by the final-job scope notice, then Overview.

- Skill allocation uses separate numbered steps for each skill priority. Skill points depend on Job Level; never treat the Base Level scope as a skill-point budget.

- Use `SkillIcon` throughout skill allocation and How to Play, including prerequisites and combo sequences, not only in Core Gameplay. Use shared `GearTabBehavior.astro` for gear tab mouse and keyboard controls.

- Keep utility skills in one consistently formatted bulleted list, including their skill icons.

- Gear tables follow progression order: starter options first, later upgrades next, and best-in-slot pieces in the final rows. Append new endgame recommendations at the end of the relevant slot table.

- For final jobs, use Next Steps for class discussion/help links and a build-sharing link to https://amfsizzy.github.io/refuge-buildplanner/. Link the relevant Discord discussion when available. If only the server invite is known, label it as the server link rather than pretending it opens the thread directly.

- The shared gear notice must keep this entire sentence bold: **These are general recommendations, not a complete best-in-slot set. Some useful items or cards may be missing, and recommendations may change as builds and equipment evolve.**

## Incomplete sections

Keep required sections in the template even when their content is pending. Use the existing `wip-badge` class beside the section heading. Name only what is missing, for example “Stat targets are pending,” “The numbered skill-learning order is pending,” or “Equipment progression and card recommendations are pending.” Keep existing reviewed content and mark only its missing portion. Do not add promises or invented advice. Stat allocation and Skill allocation remain separate subsections under Core Gameplay & Skills; a screenshot alone does not complete a learning order. Keep each unfinished guide WIP until required content is reviewed.

- Keep Core Gameplay skill descriptions concise: explain effects and meaningful restrictions, without numerical breakdowns or unlock requirements. Put supported prerequisites in Skill allocation where they affect the learning order.

## Mandatory consistency checks before delivering an edit

- Reuse the existing guide layout and components immediately; do not wait for all content to be available.
- Gear always stays in slot tabs, with main/off hand inside Weapon, standard tables, cards below the divider, and unfinished slots visibly WIP.
- Keep a quest’s full contents in one enclosing Callout. An NPC or monster uses one NpcCard, without a second enclosing warning box. Keep a separate minimap crop only when it adds location information; do not repeat an NPC card’s screenshot crop.
- Preserve the exact final-job scope callout and shared stat-allocation example notice.
- A supplied skill-learning order belongs in numbered Skill allocation. Do not reorder the descriptive skill list unless requested.
- Check the changed section against its counterpart in Trickster, Revenant, or Vagabond before reporting completion. Do not introduce a new presentation for an already established pattern.

## References across the four current guides

| Guide | Patterns to reuse when relevant |
| --- | --- |
| Trickster | Starter-job requirements and item reward; sequential stat targets; combo states and optional skill choices; numbered combat loop; next-job requirement and link. |
| Revenant | Exact final-job scope; Stage / Stats / Notes allocation table for a skill milestone; core/utility skill split; reward choices and exchange NPC inside the quest; optional quick combo rotation; final-job Next Steps. |
| Vagabond | Starter quest with a banking step; contextual new-character/alt Callout; early and equipment-milestone stat stages; owner-approved grouped passive allocation; sustain/recovery loop and specific HP warning; Shield tab. |
| Legend | Final-job scope; route/NPC/monster cards and useful minimap crop; dual-wield main/off hand inside Weapon; concise skills; allocation followed by cropped skill-tree example; incomplete slot/card WIP labels. |

These are supported variations within the same structure, not four separate templates. Add class-specific context boxes only where supported. Keep one numbered priority per allocation step unless the owner explicitly groups related skills, as in Vagabond. Optional combo rotations, reward exchanges, equipment milestones, and new-character/alt notes belong beside the section they explain; do not copy them to unrelated jobs. Source and owner corrections in game-reference.md take precedence over outdated descriptions in an existing guide.

## Four-guide alignment — October 22, 2026

The owner approved aligning the four guides. Trickster now has separate Stat allocation and Skill allocation headings. Trickster, Revenant, and Vagabond use NpcCard for illustrated quest NPC instructions, while useful banking and environmental screenshots remain SourceScreenshot. Core skill descriptions are concise; numerical combat thresholds belong in How to Play and learning requirements in Skill allocation. Trickster and Vagabond Runes/Manuals now use equipment tables.

Preserve these supported differences: Vagabond’s owner-approved grouped passive priority; its contextual new-character/alt box and Shield tab; Revenant’s staged stat table and optional combo rotation; Legend’s dual-wield tables, weapon cards, and current Class Gem options; Revenant’s Manuals table. Revenant and Legend alone receive final-job scope and finalJob gear notices.

## Merchant utility exception

Merchant is a non-combat vendor job that cannot level. Start with the owner-confirmed separate Merchant-only account tied to the main account Callout before portraits, directing account creation through the Commands, Account and Donation channel in Refuge Discord. Preserve the common section order, portraits, boxed quest, NPC card, paired reward sprites, skills, usage steps, and source metadata. Omit Stat allocation entirely at the owner’s request. Keep Skill allocation only to state the skills granted at job change; omit redundant commentary such as “There is no leveling order.” Omit Leveling Spots and Progress Gear, including their outline entries, at the owner’s request. Do not add the level-130 scope, stat-example notice, combat gear notice, empty equipment-slot tabs, or a Class Gem tab. Explain the Merchant License beside its reward and usage steps, without a separate equipment table. Keep missing NPC and skill-tree illustrations WIP until supplied; Merchant’s images are now supplied and the guide is approved for publication. Its reward pair and selected class-tree pose use existing Refuge idle sprites at the owner’s request rather than the combat-job attacking pose. This exception does not apply to combat jobs.

## Shadow equipment tip

Every combat guide uses `ShadowSetNotice.astro`, rendered by the shared `ProgressGearNotice.astro`, before the gear tabs. Keep it concise: players can mix pieces from different Shadow sets; a complete set is optional. Retain supported set recommendations as starting points rather than listing every combination. Merchant retains its no-gear exception.
