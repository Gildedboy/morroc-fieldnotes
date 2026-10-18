# Job class guide template

Use the Trickster guide at `/classes/trickster/` as the reference for future class guides. Keep this section order and layout consistent; research every class's own details rather than copying Trickster-specific advice.

## Page structure

1. **Overview** — Introduce the class, its role and gameplay identity in a short, sourced paragraph. Include Refuge-specific changes when they affect how the class works.
2. **Job Change Quest** — State the requirements first, then give the steps in order. Put each supplied NPC or location screenshot beside the step it illustrates. Explain the reward.
3. **Core Gameplay & Skills** — Explain the class's build or gameplay path and the relevant skills. Use skill icons from the Refuge database. Make combo prerequisites and required states explicit.
4. **How to Play** — Give an actionable sequence: what to maintain, what to cast first, which follow-up to use, and the resource or timing details that affect the result.
5. **Leveling Spots** — Link to the shared Leveling Spots guide for monster ranges, routes, and location notes. Do not duplicate location details in each class guide.
6. **Progress Gear** — Use the tabbed slot layout when the guide has enough recommendations: Weapon, Top Headgear, Mid Headgear, Low Headgear, Armor, Garment, Shoes, Accessories, Shadow Sets, Runes, and Manuals. Show required levels and notes in tables where that improves scanning. Put card recommendations below a horizontal separator from the equipment list.
7. **Next Step** — Name the next job and its requirement when known, then link to its guide or class page. Mark unfinished material as WIP.
8. **Sources & acknowledgements** — Link the sources used and retain the page's editorial date, source update date, verification status, and required attribution.

Keep sections focused on the selected class and build. Do not add empty or unsupported details to fill the template. Gear slot counts use `[N]` only for equipment with card slots; shadow equipment has no card-slot marker. Keep set membership in the notes. Distinguish optional upgrades from recommended progression, and preserve any owner-approved caveats.

## Implementation reference

The shared class page shell, header, article outline, mobile outline, and source block live in `src/pages/classes/[id].astro`. Class-specific guide content lives in a component under `src/components/classes/`; `src/components/classes/TricksterGuide.astro` is the current full example. Add outline entries in the class page when adding or renaming sections. Keep class-specific mechanics, screenshots, and gear in that class's component.
