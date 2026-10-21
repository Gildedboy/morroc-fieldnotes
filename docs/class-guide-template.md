# Job class guide template

Use the Trickster guide at `/classes/trickster/` as the reference for future class guides. Keep this section order and layout consistent; research every class's own details rather than copying Trickster-specific advice.

## Page structure

1. **Overview** — Introduce the class, its role and gameplay identity in a short, sourced paragraph. Include Refuge-specific changes when they affect how the class works.
2. **Job Change Quest** — Keep the requirements, ordered steps, and rewards together in one `Callout`, matching Trickster. Put each supplied NPC or location screenshot beside the step it illustrates. Explain the reward, then end the box with the obtained class’s attacking sprite. Use the existing `.trickster-quest-reward` layout and a `picture` element that serves the corresponding still image for `prefers-reduced-motion: reduce`. Reuse local assets with `withBase()`.
3. **Core Gameplay & Skills** — Explain the class's build or gameplay path and the relevant skills. Use skill icons from the Refuge database. Make combo prerequisites and required states explicit. Present main damage skills first, then buffs and passives; group convenience skills separately. Follow the skill descriptions with **Stat allocation**, then **Skill allocation**, as detailed below. These are required parts of a complete class guide, not optional extras.
4. **How to Play** — Use `SkillIcon` beside each named skill, matching Trickster. Give an actionable sequence: what to maintain, what to cast first, which follow-up to use, and the resource or timing details that affect the result.
5. **Leveling Spots** — Link to the shared Leveling Spots guide for monster ranges, routes, and location notes. Do not duplicate location details in each class guide.
6. **Progress Gear** — Start with the shared `ProgressGearNotice.astro` callout ("Keep leveling — gear upgrades come over time"), preserving its shared wording. For final jobs, pass `finalJob` to add that players may pause leveling at Base Level 130 to improve gear before harder content. Use the tabbed slot layout when the guide has enough recommendations: Weapon, Top Headgear, Mid Headgear, Low Headgear, Armor, Garment, Shoes, Accessories, Shadow Sets, Runes, and Manuals. Use the Trickster tables in every populated gear tab: Equipment, Level, Notes. Keep slot counts on equipment names and set membership or tradeoffs in Notes. Do not replace these tables with inline lists of links. Put card recommendations below a horizontal separator from the equipment list.
7. **Next Step** — Name the next job and its requirement when known, then link to its guide or class page. Mark unfinished material as WIP.
8. **Sources & acknowledgements metadata** — Record sources, editorial date, source update dates, verification status, and required attribution on About, following `docs/content-workflow.md`. Do not add a separate credits section to the guide body.

Keep sections focused on the selected class and build. Do not add empty or unsupported details to fill the template. Gear slot counts use `[N]` only for equipment with card slots; shadow equipment has no card-slot marker. Keep set membership in the notes. Distinguish optional upgrades from recommended progression, and preserve any owner-approved caveats.

## Stats and skill progression

Use Trickster’s early-leveling progression as the structural reference, with class-specific recommendations from reviewed sources or owner input. Do not copy its STR/LUK targets or skill priorities to another class.

- **Stat allocation:** start with the shared `StatAllocationNotice.astro` callout (“Adjust stats to your build”), preserving its wording in every class guide. Then name the build and its main stats, then provide an ordered progression of stat targets. Use a numbered list for a single progression, or a Stage / Stats / Notes table when allocations change with a job skill, equipment milestone, or leveling stage. State whether paired targets mean raising both stats or choosing between them. Explain supported HP, SP, accuracy, damage, and survival adjustments. Identify Base Level milestones explicitly. Describe the allocation as an example players can adapt.
- **Skill allocation:** give a numbered learning order, one priority per step. Distinguish unlocking a skill, raising it to a specific level, and maxing it. Include prerequisites, `SkillIcon` beside named skills, and supported alternatives or remaining-point choices. Skill points come from Job Level; a Base Level scope does not establish the available point budget.
- Put an owner-supplied or otherwise authorized skill-tree screenshot directly after the allocation, using `SourceScreenshot`. Label it as an allocation example; do not infer an unshown Job Level or make the pictured build mandatory.
- Drafts missing supported stat targets, skill order, or gear progression remain WIP. Track the missing sections in `docs/todo.md`; do not invent recommendations or insert empty public sections just to match the outline. Vagabond’s main stats are confirmed as STR, AGI, and LUK, but that does not establish numerical targets or a skill-learning order.

Before completing a class guide, review it against Trickster for: portraits; overview and Refuge Changes; boxed job change, instructional images, rewards and attacking sprite; core and utility skills; stat progression; skill-learning order and available skill-tree image; How to Play; shared leveling links; gear progression and cards; Next Step or final-job Next Steps; and source metadata on About.

## Implementation reference

The shared class page shell, header, article outline, mobile outline, and source block live in `src/pages/classes/[id].astro`. Class-specific guide content lives in a component under `src/components/classes/`; `src/components/classes/TricksterGuide.astro` is the current full example. Add outline entries in the class page when adding or renaming sections. Keep class-specific mechanics, screenshots, and gear in that class's component.

- Final-job guides cover progression from obtaining the job through Base Level 130. Add a prominent scope notice explaining that most locations beyond 130 require specific equipment and setups, leaving further exploration and adaptation to players. Most jobs reach their final evolution around Base Level 99 or later; retain each class’s actual job-change requirements and distinguish Base Level from Job Level.

- Place a **Refuge Changes** callout in Overview for every job guide, containing supported Refuge-specific changes. Do not invent changes for jobs without documented differences.

- Put class portraits first in the guide body, followed by the final-job scope notice, then Overview.

- Skill allocation uses separate numbered steps for each skill priority. Skill points depend on Job Level; never treat the Base Level scope as a skill-point budget.

- Use `SkillIcon` throughout skill allocation and How to Play, including prerequisites and combo sequences, not only in Core Gameplay. Use shared `GearTabBehavior.astro` for gear tab mouse and keyboard controls.

- Keep utility skills in one consistently formatted bulleted list, including their skill icons.

- Gear tables follow progression order: starter options first, later upgrades next, and best-in-slot pieces in the final rows. Append new endgame recommendations at the end of the relevant slot table.

- For final jobs, use Next Steps for class discussion/help links and a build-sharing link to https://amfsizzy.github.io/refuge-buildplanner/. Link the relevant Discord discussion when available. If only the server invite is known, label it as the server link rather than pretending it opens the thread directly.

- The shared gear notice explains that recommendations are not a complete best-in-slot set and may change as builds and equipment evolve.
