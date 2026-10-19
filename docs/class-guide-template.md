# Job class guide template

Use the Trickster guide at `/classes/trickster/` as the reference for future class guides. Keep this section order and layout consistent; research every class's own details rather than copying Trickster-specific advice.

## Page structure

1. **Overview** — Introduce the class, its role and gameplay identity in a short, sourced paragraph. Include Refuge-specific changes when they affect how the class works.
2. **Job Change Quest** — State the requirements first, then give the steps in order. Put each supplied NPC or location screenshot beside the step it illustrates. Explain the reward.
3. **Core Gameplay & Skills** — Explain the class's build or gameplay path and the relevant skills. Use skill icons from the Refuge database. Make combo prerequisites and required states explicit. Present main damage skills first, then buffs and passives; group convenience skills separately.
4. **How to Play** — Use `SkillIcon` beside each named skill, matching Trickster. Give an actionable sequence: what to maintain, what to cast first, which follow-up to use, and the resource or timing details that affect the result.
5. **Leveling Spots** — Link to the shared Leveling Spots guide for monster ranges, routes, and location notes. Do not duplicate location details in each class guide.
6. **Progress Gear** — Start with the shared `ProgressGearNotice.astro` callout ("Keep leveling — gear upgrades come over time"), preserving its shared wording. For final jobs, pass `finalJob` to add that players may pause leveling at Base Level 130 to improve gear before harder content. Use the tabbed slot layout when the guide has enough recommendations: Weapon, Top Headgear, Mid Headgear, Low Headgear, Armor, Garment, Shoes, Accessories, Shadow Sets, Runes, and Manuals. Use the Trickster tables in every populated gear tab: Equipment, Level, Notes. Keep slot counts on equipment names and set membership or tradeoffs in Notes. Do not replace these tables with inline lists of links. Put card recommendations below a horizontal separator from the equipment list.
7. **Next Step** — Name the next job and its requirement when known, then link to its guide or class page. Mark unfinished material as WIP.
8. **Sources & acknowledgements** — Link the sources used and retain the page's editorial date, source update date, verification status, and required attribution.

Keep sections focused on the selected class and build. Do not add empty or unsupported details to fill the template. Gear slot counts use `[N]` only for equipment with card slots; shadow equipment has no card-slot marker. Keep set membership in the notes. Distinguish optional upgrades from recommended progression, and preserve any owner-approved caveats.

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
