export interface JobClass {
  id: string;
  name: string;
  parents: string[];
  children: string[];
  roles: string[];
  difficulty: string;
  weapons: string;
  weaponLabel?: string;
  stage: string;
  attacking: string;
  attackingStill: string;
  strengths: string | null;
  weaknesses: string | null;
  idle: string;
  idleStill: string;
  sitting: string;
  sittingStill: string;
  sprite: string;
  face: string;
  portrait?: string;
  female: { idle: string; idleStill: string; sitting: string; sittingStill: string; selected: string; selectedStill: string };
}

// Reviewed against Refuge classes.html on 2026-10-17. See docs/assets.md.
export const jobClasses: JobClass[] = [
  {
    "id": "orphan",
    "name": "Orphan",
    "parents": [],
    "children": [
      "thief",
      "trickster",
      "jester",
      "ronin",
      "mimic",
      "vagabond",
      "raider",
      "bouncer",
      "merchant",
      "judge",
      "peacekeeper",
      "illusionist",
      "dark-knight"
    ],
    "roles": [
      "utility"
    ],
    "difficulty": "easy",
    "weapons": "Daggers and Swords",
    "stage": "orphan",
    "sprite": "images/classes/orphan-sprite.webp",
    "face": "images/classes/orphan-face.webp",
    "idle": "images/classes/orphan-idle.webp",
    "idleStill": "images/classes/orphan-idle-still.webp",
    "sitting": "images/classes/orphan-sitting.webp",
    "sittingStill": "images/classes/orphan-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/orphan-attacking.webp",
    "attackingStill": "images/classes/orphan-attacking-still.webp",
    "female": {
      "idle": "images/classes/orphan-female-idle.webp",
      "idleStill": "images/classes/orphan-female-idle-still.webp",
      "sitting": "images/classes/orphan-female-sitting.webp",
      "sittingStill": "images/classes/orphan-female-sitting-still.webp",
      "selected": "images/classes/orphan-female-attacking.webp",
      "selectedStill": "images/classes/orphan-female-attacking-still.webp"
    }
  },
  {
    "id": "thief",
    "name": "Thief",
    "parents": [
      "orphan"
    ],
    "children": [
      "assassin",
      "rogue",
      "prowler",
      "shadowseer",
      "unchained-thief"
    ],
    "roles": [
      "physical",
      "magic"
    ],
    "difficulty": "easy",
    "weapons": "Daggers, Swords and Bows",
    "stage": "first",
    "sprite": "images/classes/thief-sprite.webp",
    "face": "images/classes/thief-face.webp",
    "portrait": "images/classes/thief-portrait.webp",
    "idle": "images/classes/thief-idle.webp",
    "idleStill": "images/classes/thief-idle-still.webp",
    "sitting": "images/classes/thief-sitting.webp",
    "sittingStill": "images/classes/thief-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/thief-attacking.webp",
    "attackingStill": "images/classes/thief-attacking-still.webp",
    "female": {
      "idle": "images/classes/thief-female-idle.webp",
      "idleStill": "images/classes/thief-female-idle-still.webp",
      "sitting": "images/classes/thief-female-sitting.webp",
      "sittingStill": "images/classes/thief-female-sitting-still.webp",
      "selected": "images/classes/thief-female-attacking.webp",
      "selectedStill": "images/classes/thief-female-attacking-still.webp"
    }
  },
  {
    "id": "trickster",
    "name": "Trickster",
    "parents": [
      "orphan"
    ],
    "children": [
      "revenant"
    ],
    "roles": [
      "physical"
    ],
    "difficulty": "moderate",
    "weapons": "Scythes",
    "stage": "first",
    "sprite": "images/classes/trickster-sprite.webp",
    "face": "images/classes/trickster-face.webp",
    "idle": "images/classes/trickster-idle.webp",
    "idleStill": "images/classes/trickster-idle-still.webp",
    "sitting": "images/classes/trickster-sitting.webp",
    "sittingStill": "images/classes/trickster-sitting-still.webp",
    "strengths": "Constant high damage, leeching properties, great defensive options.",
    "weaknesses": "High SP Cost, many cooldowns to juggle, less than average defenses for a short-ranged job.",
    "attacking": "images/classes/trickster-attacking.webp",
    "attackingStill": "images/classes/trickster-attacking-still.webp",
    "female": {
      "idle": "images/classes/trickster-female-idle.webp",
      "idleStill": "images/classes/trickster-female-idle-still.webp",
      "sitting": "images/classes/trickster-female-sitting.webp",
      "sittingStill": "images/classes/trickster-female-sitting-still.webp",
      "selected": "images/classes/trickster-female-attacking.webp",
      "selectedStill": "images/classes/trickster-female-attacking-still.webp"
    }
  },
  {
    "id": "jester",
    "name": "Jester",
    "parents": [
      "orphan"
    ],
    "children": [],
    "roles": [
      "physical"
    ],
    "difficulty": "easy",
    "weapons": "Decks",
    "stage": "final",
    "sprite": "images/classes/jester-sprite.webp",
    "face": "images/classes/jester-face.webp",
    "idle": "images/classes/jester-idle.webp",
    "idleStill": "images/classes/jester-idle-still.webp",
    "sitting": "images/classes/jester-sitting.webp",
    "sittingStill": "images/classes/jester-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/jester-attacking.webp",
    "attackingStill": "images/classes/jester-attacking-still.webp",
    "female": {
      "idle": "images/classes/jester-female-idle.webp",
      "idleStill": "images/classes/jester-female-idle-still.webp",
      "sitting": "images/classes/jester-female-sitting.webp",
      "sittingStill": "images/classes/jester-female-sitting-still.webp",
      "selected": "images/classes/jester-female-attacking.webp",
      "selectedStill": "images/classes/jester-female-attacking-still.webp"
    }
  },
  {
    "id": "ronin",
    "name": "Ronin",
    "parents": [
      "orphan"
    ],
    "children": [],
    "roles": [
      "physical"
    ],
    "difficulty": "hard",
    "weapons": "Swords. Unique Scabbard",
    "stage": "final",
    "sprite": "images/classes/ronin-sprite.webp",
    "face": "images/classes/ronin-face.webp",
    "idle": "images/classes/ronin-idle.webp",
    "idleStill": "images/classes/ronin-idle-still.webp",
    "sitting": "images/classes/ronin-sitting.webp",
    "sittingStill": "images/classes/ronin-sitting-still.webp",
    "strengths": "High damage potential. High Mobility. High flee and perfect dodge. Defensive options are buff that evades any physical attack.",
    "weaknesses": "Squishy. Taking any damage removes Damage buffs. High skill ceiling.",
    "attacking": "images/classes/ronin-attacking.webp",
    "attackingStill": "images/classes/ronin-attacking-still.webp",
    "female": {
      "idle": "images/classes/ronin-female-idle.webp",
      "idleStill": "images/classes/ronin-female-idle-still.webp",
      "sitting": "images/classes/ronin-female-sitting.webp",
      "sittingStill": "images/classes/ronin-female-sitting-still.webp",
      "selected": "images/classes/ronin-female-attacking.webp",
      "selectedStill": "images/classes/ronin-female-attacking-still.webp"
    }
  },
  {
    "id": "mimic",
    "name": "Mimic",
    "parents": [
      "orphan"
    ],
    "children": [],
    "roles": [
      "magic"
    ],
    "difficulty": "hard",
    "weapons": "Codex and Cantrips",
    "weaponLabel": "Codex",
    "stage": "final",
    "sprite": "images/classes/mimic-sprite.webp",
    "face": "images/classes/mimic-face.webp",
    "idle": "images/classes/mimic-idle.webp",
    "idleStill": "images/classes/mimic-idle-still.webp",
    "sitting": "images/classes/mimic-sitting.webp",
    "sittingStill": "images/classes/mimic-sitting-still.webp",
    "strengths": "Unpredictable, Fun, chance to use powerful late-game skills early on.",
    "weaknesses": "Unpredictable, Fun, chance to use weak early-game skills later on.",
    "attacking": "images/classes/mimic-attacking.webp",
    "attackingStill": "images/classes/mimic-attacking-still.webp",
    "female": {
      "idle": "images/classes/mimic-female-idle.webp",
      "idleStill": "images/classes/mimic-female-idle-still.webp",
      "sitting": "images/classes/mimic-female-sitting.webp",
      "sittingStill": "images/classes/mimic-female-sitting-still.webp",
      "selected": "images/classes/mimic-female-attacking.webp",
      "selectedStill": "images/classes/mimic-female-attacking-still.webp"
    }
  },
  {
    "id": "vagabond",
    "name": "Vagabond",
    "parents": [
      "orphan"
    ],
    "children": [
      "legend"
    ],
    "roles": [
      "physical"
    ],
    "difficulty": "easy",
    "weapons": "Daggers",
    "stage": "first",
    "sprite": "images/classes/vagabond-sprite.webp",
    "face": "images/classes/vagabond-face.webp",
    "idle": "images/classes/vagabond-idle.webp",
    "idleStill": "images/classes/vagabond-idle-still.webp",
    "sitting": "images/classes/vagabond-sitting.webp",
    "sittingStill": "images/classes/vagabond-sitting-still.webp",
    "strengths": "Great scaling, simple gameplay, complete skill tree. Best job for monsters with Plant Defense. Goes BRRRR.",
    "weaknesses": "Low base SP, can't adapt to content easily, difficult early game.",
    "attacking": "images/classes/vagabond-attacking.webp",
    "attackingStill": "images/classes/vagabond-attacking-still.webp",
    "female": {
      "idle": "images/classes/vagabond-female-idle.webp",
      "idleStill": "images/classes/vagabond-female-idle-still.webp",
      "sitting": "images/classes/vagabond-female-sitting.webp",
      "sittingStill": "images/classes/vagabond-female-sitting-still.webp",
      "selected": "images/classes/vagabond-female-attacking.webp",
      "selectedStill": "images/classes/vagabond-female-attacking-still.webp"
    }
  },
  {
    "id": "raider",
    "name": "Raider",
    "parents": [
      "orphan"
    ],
    "children": [
      "dracomancer"
    ],
    "roles": [
      "physical",
      "tank"
    ],
    "difficulty": "moderate",
    "weapons": "Spears, Wyrm Spears, limited Daggers and Swords",
    "weaponLabel": "Spears",
    "stage": "first",
    "sprite": "images/classes/raider-sprite.webp",
    "face": "images/classes/raider-face.webp",
    "idle": "images/classes/raider-idle.webp",
    "idleStill": "images/classes/raider-idle-still.webp",
    "sitting": "images/classes/raider-sitting.webp",
    "sittingStill": "images/classes/raider-sitting-still.webp",
    "strengths": "Versatile fighter, decent resistances, good party potential.",
    "weaknesses": "below average damage, gear reliant, hard to balance stats.",
    "attacking": "images/classes/raider-attacking.webp",
    "attackingStill": "images/classes/raider-attacking-still.webp",
    "female": {
      "idle": "images/classes/raider-female-idle.webp",
      "idleStill": "images/classes/raider-female-idle-still.webp",
      "sitting": "images/classes/raider-female-sitting.webp",
      "sittingStill": "images/classes/raider-female-sitting-still.webp",
      "selected": "images/classes/raider-female-attacking.webp",
      "selectedStill": "images/classes/raider-female-attacking-still.webp"
    }
  },
  {
    "id": "bouncer",
    "name": "Bouncer",
    "parents": [
      "orphan"
    ],
    "children": [
      "pit-boss"
    ],
    "roles": [
      "physical",
      "tank"
    ],
    "difficulty": "moderate",
    "weapons": "Fists",
    "stage": "first",
    "sprite": "images/classes/bouncer-sprite.webp",
    "face": "images/classes/bouncer-face.webp",
    "idle": "images/classes/bouncer-idle.webp",
    "idleStill": "images/classes/bouncer-idle-still.webp",
    "sitting": "images/classes/bouncer-sitting.webp",
    "sittingStill": "images/classes/bouncer-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/bouncer-attacking.webp",
    "attackingStill": "images/classes/bouncer-attacking-still.webp",
    "female": {
      "idle": "images/classes/bouncer-female-idle.webp",
      "idleStill": "images/classes/bouncer-female-idle-still.webp",
      "sitting": "images/classes/bouncer-female-sitting.webp",
      "sittingStill": "images/classes/bouncer-female-sitting-still.webp",
      "selected": "images/classes/bouncer-female-attacking.webp",
      "selectedStill": "images/classes/bouncer-female-attacking-still.webp"
    }
  },
  {
    "id": "merchant",
    "name": "Merchant",
    "parents": [
      "orphan"
    ],
    "children": [],
    "roles": [
      "utility"
    ],
    "difficulty": "easy",
    "weapons": "None",
    "stage": "alt",
    "sprite": "images/classes/merchant-sprite.webp",
    "face": "images/classes/merchant-face.webp",
    "idle": "images/classes/merchant-idle.webp",
    "idleStill": "images/classes/merchant-idle-still.webp",
    "sitting": "images/classes/merchant-sitting.webp",
    "sittingStill": "images/classes/merchant-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/merchant-attacking.webp",
    "attackingStill": "images/classes/merchant-attacking-still.webp",
    "female": {
      "idle": "images/classes/merchant-female-idle.webp",
      "idleStill": "images/classes/merchant-female-idle-still.webp",
      "sitting": "images/classes/merchant-female-sitting.webp",
      "sittingStill": "images/classes/merchant-female-sitting-still.webp",
      "selected": "images/classes/merchant-female-casting.webp",
      "selectedStill": "images/classes/merchant-female-casting-still.webp"
    }
  },
  {
    "id": "judge",
    "name": "Judge",
    "parents": [
      "orphan"
    ],
    "children": [],
    "roles": [
      "ranged",
      "physical"
    ],
    "difficulty": "expert",
    "weapons": "Revolvers",
    "stage": "final",
    "sprite": "images/classes/judge-sprite.webp",
    "face": "images/classes/judge-face.webp",
    "idle": "images/classes/judge-idle.webp",
    "idleStill": "images/classes/judge-idle-still.webp",
    "sitting": "images/classes/judge-sitting.webp",
    "sittingStill": "images/classes/judge-sitting-still.webp",
    "strengths": "Massive damage potential, High mobility and range, very quick SP regen.",
    "weaknesses": "Very small SP pool, squishy, extremely skill point starved even with 100 job levels.",
    "attacking": "images/classes/judge-attacking.webp",
    "attackingStill": "images/classes/judge-attacking-still.webp",
    "female": {
      "idle": "images/classes/judge-female-idle.webp",
      "idleStill": "images/classes/judge-female-idle-still.webp",
      "sitting": "images/classes/judge-female-sitting.webp",
      "sittingStill": "images/classes/judge-female-sitting-still.webp",
      "selected": "images/classes/judge-female-attacking.webp",
      "selectedStill": "images/classes/judge-female-attacking-still.webp"
    }
  },
  {
    "id": "peacekeeper",
    "name": "Peacekeeper",
    "parents": [
      "orphan"
    ],
    "children": [],
    "roles": [
      "physical",
      "control"
    ],
    "difficulty": "expert",
    "weapons": "Whips. Trinkets",
    "stage": "final",
    "sprite": "images/classes/peacekeeper-sprite.webp",
    "face": "images/classes/peacekeeper-face.webp",
    "idle": "images/classes/peacekeeper-idle.webp",
    "idleStill": "images/classes/peacekeeper-idle-still.webp",
    "sitting": "images/classes/peacekeeper-sitting.webp",
    "sittingStill": "images/classes/peacekeeper-sitting-still.webp",
    "strengths": "High damage potential. High leech power with certain trinkets. High natural resistances. Weapon Endows from trinkets. Damage scaling depends on trinkets used.",
    "weaknesses": "High skill ceiling. Trinkets are expensive to make.Squishy without investments. Long Cooldown on finisher skills.",
    "attacking": "images/classes/peacekeeper-attacking.webp",
    "attackingStill": "images/classes/peacekeeper-attacking-still.webp",
    "female": {
      "idle": "images/classes/peacekeeper-female-idle.webp",
      "idleStill": "images/classes/peacekeeper-female-idle-still.webp",
      "sitting": "images/classes/peacekeeper-female-sitting.webp",
      "sittingStill": "images/classes/peacekeeper-female-sitting-still.webp",
      "selected": "images/classes/peacekeeper-female-attacking.webp",
      "selectedStill": "images/classes/peacekeeper-female-attacking-still.webp"
    }
  },
  {
    "id": "illusionist",
    "name": "Illusionist",
    "parents": [
      "orphan"
    ],
    "children": [],
    "roles": [
      "magic",
      "support"
    ],
    "difficulty": "expert",
    "weapons": "Illusion Gloves",
    "weaponLabel": "Puppet",
    "stage": "final",
    "sprite": "images/classes/illusionist-sprite.webp",
    "face": "images/classes/illusionist-face.webp",
    "idle": "images/classes/illusionist-idle.webp",
    "idleStill": "images/classes/illusionist-idle-still.webp",
    "sitting": "images/classes/illusionist-sitting.webp",
    "sittingStill": "images/classes/illusionist-sitting-still.webp",
    "strengths": "High potential, low gear requirements, unique gameplay.",
    "weaknesses": "Lowest base HP by far, very vulnerable when alone, few weapon choices.",
    "attacking": "images/classes/illusionist-attacking.webp",
    "attackingStill": "images/classes/illusionist-attacking-still.webp",
    "female": {
      "idle": "images/classes/illusionist-female-idle.webp",
      "idleStill": "images/classes/illusionist-female-idle-still.webp",
      "sitting": "images/classes/illusionist-female-sitting.webp",
      "sittingStill": "images/classes/illusionist-female-sitting-still.webp",
      "selected": "images/classes/illusionist-female-attacking.webp",
      "selectedStill": "images/classes/illusionist-female-attacking-still.webp"
    }
  },
  {
    "id": "dark-knight",
    "name": "Dark Knight",
    "parents": [
      "orphan"
    ],
    "children": [],
    "roles": [
      "physical",
      "control"
    ],
    "difficulty": "expert",
    "weapons": "Swords, Knight Swords (2-handed, very rare)",
    "weaponLabel": "Swords",
    "stage": "final",
    "sprite": "images/classes/dark-knight-sprite.webp",
    "face": "images/classes/dark-knight-face.webp",
    "idle": "images/classes/dark-knight-idle.webp",
    "idleStill": "images/classes/dark-knight-idle-still.webp",
    "sitting": "images/classes/dark-knight-sitting.webp",
    "sittingStill": "images/classes/dark-knight-sitting-still.webp",
    "strengths": "Massive damage potential, multiple resources for any situation, unique properties.",
    "weaknesses": "Very high risk, complex, requires precise gameplay to not underperform.",
    "attacking": "images/classes/dark-knight-attacking.webp",
    "attackingStill": "images/classes/dark-knight-attacking-still.webp",
    "female": {
      "idle": "images/classes/dark-knight-female-idle.webp",
      "idleStill": "images/classes/dark-knight-female-idle-still.webp",
      "sitting": "images/classes/dark-knight-female-sitting.webp",
      "sittingStill": "images/classes/dark-knight-female-sitting-still.webp",
      "selected": "images/classes/dark-knight-female-attacking.webp",
      "selectedStill": "images/classes/dark-knight-female-attacking-still.webp"
    }
  },
  {
    "id": "assassin",
    "name": "Assassin",
    "parents": [
      "thief"
    ],
    "children": [
      "blade-dancer",
      "shinobi",
      "executioner",
      "scoundrel",
      "unchained-assassin"
    ],
    "roles": [
      "physical"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords, Axes and Katars",
    "stage": "second",
    "sprite": "images/classes/assassin-sprite.webp",
    "face": "images/classes/assassin-face.webp",
    "idle": "images/classes/assassin-idle.webp",
    "idleStill": "images/classes/assassin-idle-still.webp",
    "sitting": "images/classes/assassin-sitting.webp",
    "sittingStill": "images/classes/assassin-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/assassin-attacking.webp",
    "attackingStill": "images/classes/assassin-attacking-still.webp",
    "female": {
      "idle": "images/classes/assassin-female-idle.webp",
      "idleStill": "images/classes/assassin-female-idle-still.webp",
      "sitting": "images/classes/assassin-female-sitting.webp",
      "sittingStill": "images/classes/assassin-female-sitting-still.webp",
      "selected": "images/classes/assassin-female-attacking.webp",
      "selectedStill": "images/classes/assassin-female-attacking-still.webp"
    }
  },
  {
    "id": "rogue",
    "name": "Rogue",
    "parents": [
      "thief"
    ],
    "children": [
      "mystic",
      "duelist",
      "saboteur",
      "deadeye",
      "unchained-rogue"
    ],
    "roles": [
      "physical",
      "magic"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords and Bows",
    "stage": "second",
    "sprite": "images/classes/rogue-sprite.webp",
    "face": "images/classes/rogue-face.webp",
    "idle": "images/classes/rogue-idle.webp",
    "idleStill": "images/classes/rogue-idle-still.webp",
    "sitting": "images/classes/rogue-sitting.webp",
    "sittingStill": "images/classes/rogue-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/rogue-attacking.webp",
    "attackingStill": "images/classes/rogue-attacking-still.webp",
    "female": {
      "idle": "images/classes/rogue-female-idle.webp",
      "idleStill": "images/classes/rogue-female-idle-still.webp",
      "sitting": "images/classes/rogue-female-sitting.webp",
      "sittingStill": "images/classes/rogue-female-sitting-still.webp",
      "selected": "images/classes/rogue-female-attacking.webp",
      "selectedStill": "images/classes/rogue-female-attacking-still.webp"
    }
  },
  {
    "id": "prowler",
    "name": "Prowler",
    "parents": [
      "thief"
    ],
    "children": [],
    "roles": [
      "physical"
    ],
    "difficulty": "hard",
    "weapons": "Daggers, Prowler's Armguards",
    "stage": "final",
    "sprite": "images/classes/prowler-sprite.webp",
    "face": "images/classes/prowler-face.webp",
    "idle": "images/classes/prowler-idle.webp",
    "idleStill": "images/classes/prowler-idle-still.webp",
    "sitting": "images/classes/prowler-sitting.webp",
    "sittingStill": "images/classes/prowler-sitting-still.webp",
    "strengths": "Good consistent damage, amazing damage negation, small and tight skill kit.",
    "weaknesses": "High SP Cost, vulnerable to unavoidable damage, restricted left hand slot.",
    "attacking": "images/classes/prowler-attacking.webp",
    "attackingStill": "images/classes/prowler-attacking-still.webp",
    "female": {
      "idle": "images/classes/prowler-female-idle.webp",
      "idleStill": "images/classes/prowler-female-idle-still.webp",
      "sitting": "images/classes/prowler-female-sitting.webp",
      "sittingStill": "images/classes/prowler-female-sitting-still.webp",
      "selected": "images/classes/prowler-female-attacking.webp",
      "selectedStill": "images/classes/prowler-female-attacking-still.webp"
    }
  },
  {
    "id": "shadowseer",
    "name": "Shadowseer",
    "parents": [
      "thief"
    ],
    "children": [],
    "roles": [
      "magic",
      "physical"
    ],
    "difficulty": "hard",
    "weapons": "Daggers, Swords, Offhand Daggers",
    "stage": "final",
    "sprite": "images/classes/shadowseer-sprite.webp",
    "face": "images/classes/shadowseer-face.webp",
    "idle": "images/classes/shadowseer-idle.webp",
    "idleStill": "images/classes/shadowseer-idle-still.webp",
    "sitting": "images/classes/shadowseer-sitting.webp",
    "sittingStill": "images/classes/shadowseer-sitting-still.webp",
    "strengths": "Constant magic damage, multiple approaches to building, damage goes brrrrrrr.",
    "weaknesses": "Complex to play and master, extreme status spread needs, harder than usual to properly build.",
    "attacking": "images/classes/shadowseer-attacking.webp",
    "attackingStill": "images/classes/shadowseer-attacking-still.webp",
    "female": {
      "idle": "images/classes/shadowseer-female-idle.webp",
      "idleStill": "images/classes/shadowseer-female-idle-still.webp",
      "sitting": "images/classes/shadowseer-female-sitting.webp",
      "sittingStill": "images/classes/shadowseer-female-sitting-still.webp",
      "selected": "images/classes/shadowseer-female-attacking.webp",
      "selectedStill": "images/classes/shadowseer-female-attacking-still.webp"
    }
  },
  {
    "id": "dracomancer",
    "name": "Dracomancer",
    "parents": [
      "raider"
    ],
    "children": [],
    "roles": [
      "physical",
      "tank"
    ],
    "difficulty": "moderate",
    "weapons": "Spears, Wyrm Spears, Daggers, Swords, Bone Swords",
    "stage": "final",
    "sprite": "images/classes/dracomancer-sprite.webp",
    "face": "images/classes/dracomancer-face.webp",
    "idle": "images/classes/dracomancer-idle.webp",
    "idleStill": "images/classes/dracomancer-idle-still.webp",
    "sitting": "images/classes/dracomancer-sitting.webp",
    "sittingStill": "images/classes/dracomancer-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/dracomancer-attacking.webp",
    "attackingStill": "images/classes/dracomancer-attacking-still.webp",
    "female": {
      "idle": "images/classes/dracomancer-female-idle.webp",
      "idleStill": "images/classes/dracomancer-female-idle-still.webp",
      "sitting": "images/classes/dracomancer-female-sitting.webp",
      "sittingStill": "images/classes/dracomancer-female-sitting-still.webp",
      "selected": "images/classes/dracomancer-female-attacking.webp",
      "selectedStill": "images/classes/dracomancer-female-attacking-still.webp"
    }
  },
  {
    "id": "revenant",
    "name": "Revenant",
    "parents": [
      "trickster"
    ],
    "children": [],
    "roles": [
      "physical"
    ],
    "difficulty": "moderate",
    "weapons": "Scythes",
    "stage": "final",
    "sprite": "images/classes/revenant-sprite.webp",
    "face": "images/classes/revenant-face.webp",
    "idle": "images/classes/revenant-idle.webp",
    "idleStill": "images/classes/revenant-idle-still.webp",
    "sitting": "images/classes/revenant-sitting.webp",
    "sittingStill": "images/classes/revenant-sitting-still.webp",
    "strengths": "Consistent Dps, High leech power, good AoE, inbuilt Leech -> Barrier.",
    "weaknesses": "Weakness to CC, ranged damage, and lingering AoE skills.",
    "attacking": "images/classes/revenant-attacking.webp",
    "attackingStill": "images/classes/revenant-attacking-still.webp",
    "female": {
      "idle": "images/classes/revenant-female-idle.webp",
      "idleStill": "images/classes/revenant-female-idle-still.webp",
      "sitting": "images/classes/revenant-female-sitting.webp",
      "sittingStill": "images/classes/revenant-female-sitting-still.webp",
      "selected": "images/classes/revenant-female-attacking.webp",
      "selectedStill": "images/classes/revenant-female-attacking-still.webp"
    }
  },
  {
    "id": "legend",
    "name": "Legend",
    "parents": [
      "vagabond"
    ],
    "children": [],
    "roles": [
      "physical"
    ],
    "difficulty": "easy",
    "weapons": "Daggers",
    "stage": "final",
    "sprite": "images/classes/legend-sprite.webp",
    "face": "images/classes/legend-face.webp",
    "idle": "images/classes/legend-idle.webp",
    "idleStill": "images/classes/legend-idle-still.webp",
    "sitting": "images/classes/legend-sitting.webp",
    "sittingStill": "images/classes/legend-sitting-still.webp",
    "strengths": "Dual wielding, more support skills including Safety Wall, access to its complete skill tree. Best job for monsters with Plant Defense. Goes double BRRR.",
    "weaknesses": "Low defenses during Frenzy; requires investment in gear and sustain to maintain Frenzy.",
    "attacking": "images/classes/legend-attacking.webp",
    "attackingStill": "images/classes/legend-attacking-still.webp",
    "female": {
      "idle": "images/classes/legend-female-idle.webp",
      "idleStill": "images/classes/legend-female-idle-still.webp",
      "sitting": "images/classes/legend-female-sitting.webp",
      "sittingStill": "images/classes/legend-female-sitting-still.webp",
      "selected": "images/classes/legend-female-attacking.webp",
      "selectedStill": "images/classes/legend-female-attacking-still.webp"
    }
  },
  {
    "id": "pit-boss",
    "name": "Pit Boss",
    "parents": [
      "bouncer"
    ],
    "children": [],
    "roles": [
      "physical",
      "tank",
      "control"
    ],
    "difficulty": "moderate",
    "weapons": "Golf Clubs and Chains",
    "stage": "final",
    "sprite": "images/classes/pit-boss-sprite.webp",
    "face": "images/classes/pit-boss-face.webp",
    "idle": "images/classes/pit-boss-idle.webp",
    "idleStill": "images/classes/pit-boss-idle-still.webp",
    "sitting": "images/classes/pit-boss-sitting.webp",
    "sittingStill": "images/classes/pit-boss-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/pit-boss-attacking.webp",
    "attackingStill": "images/classes/pit-boss-attacking-still.webp",
    "female": {
      "idle": "images/classes/pit-boss-female-idle.webp",
      "idleStill": "images/classes/pit-boss-female-idle-still.webp",
      "sitting": "images/classes/pit-boss-female-sitting.webp",
      "sittingStill": "images/classes/pit-boss-female-sitting-still.webp",
      "selected": "images/classes/pit-boss-female-attacking.webp",
      "selectedStill": "images/classes/pit-boss-female-attacking-still.webp"
    }
  },
  {
    "id": "blade-dancer",
    "name": "Blade Dancer",
    "parents": [
      "assassin"
    ],
    "children": [
      "night-raven"
    ],
    "roles": [
      "physical"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords, Axes and Katars",
    "stage": "spec",
    "sprite": "images/classes/blade-dancer-sprite.webp",
    "face": "images/classes/blade-dancer-face.webp",
    "idle": "images/classes/blade-dancer-idle.webp",
    "idleStill": "images/classes/blade-dancer-idle-still.webp",
    "sitting": "images/classes/blade-dancer-sitting.webp",
    "sittingStill": "images/classes/blade-dancer-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/blade-dancer-attacking.webp",
    "attackingStill": "images/classes/blade-dancer-attacking-still.webp",
    "female": {
      "idle": "images/classes/blade-dancer-female-idle.webp",
      "idleStill": "images/classes/blade-dancer-female-idle-still.webp",
      "sitting": "images/classes/blade-dancer-female-sitting.webp",
      "sittingStill": "images/classes/blade-dancer-female-sitting-still.webp",
      "selected": "images/classes/blade-dancer-female-attacking.webp",
      "selectedStill": "images/classes/blade-dancer-female-attacking-still.webp"
    }
  },
  {
    "id": "shinobi",
    "name": "Shinobi",
    "parents": [
      "assassin"
    ],
    "children": [
      "satsujin"
    ],
    "roles": [
      "physical",
      "magic"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords, Axes and Katars",
    "stage": "spec",
    "sprite": "images/classes/shinobi-sprite.webp",
    "face": "images/classes/shinobi-face.webp",
    "idle": "images/classes/shinobi-idle.webp",
    "idleStill": "images/classes/shinobi-idle-still.webp",
    "sitting": "images/classes/shinobi-sitting.webp",
    "sittingStill": "images/classes/shinobi-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/shinobi-attacking.webp",
    "attackingStill": "images/classes/shinobi-attacking-still.webp",
    "female": {
      "idle": "images/classes/shinobi-female-idle.webp",
      "idleStill": "images/classes/shinobi-female-idle-still.webp",
      "sitting": "images/classes/shinobi-female-sitting.webp",
      "sittingStill": "images/classes/shinobi-female-sitting-still.webp",
      "selected": "images/classes/shinobi-female-attacking.webp",
      "selectedStill": "images/classes/shinobi-female-attacking-still.webp"
    }
  },
  {
    "id": "executioner",
    "name": "Executioner",
    "parents": [
      "assassin"
    ],
    "children": [
      "gravekeeper"
    ],
    "roles": [
      "physical"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords, Axes and Katars",
    "stage": "spec",
    "sprite": "images/classes/executioner-sprite.webp",
    "face": "images/classes/executioner-face.webp",
    "idle": "images/classes/executioner-idle.webp",
    "idleStill": "images/classes/executioner-idle-still.webp",
    "sitting": "images/classes/executioner-sitting.webp",
    "sittingStill": "images/classes/executioner-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/executioner-attacking.webp",
    "attackingStill": "images/classes/executioner-attacking-still.webp",
    "female": {
      "idle": "images/classes/executioner-female-idle.webp",
      "idleStill": "images/classes/executioner-female-idle-still.webp",
      "sitting": "images/classes/executioner-female-sitting.webp",
      "sittingStill": "images/classes/executioner-female-sitting-still.webp",
      "selected": "images/classes/executioner-female-attacking.webp",
      "selectedStill": "images/classes/executioner-female-attacking-still.webp"
    }
  },
  {
    "id": "scoundrel",
    "name": "Scoundrel",
    "parents": [
      "assassin"
    ],
    "children": [
      "black-plague"
    ],
    "roles": [
      "physical",
      "control"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords, Axes and Katars",
    "stage": "spec",
    "sprite": "images/classes/scoundrel-sprite.webp",
    "face": "images/classes/scoundrel-face.webp",
    "idle": "images/classes/scoundrel-idle.webp",
    "idleStill": "images/classes/scoundrel-idle-still.webp",
    "sitting": "images/classes/scoundrel-sitting.webp",
    "sittingStill": "images/classes/scoundrel-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/scoundrel-attacking.webp",
    "attackingStill": "images/classes/scoundrel-attacking-still.webp",
    "female": {
      "idle": "images/classes/scoundrel-female-idle.webp",
      "idleStill": "images/classes/scoundrel-female-idle-still.webp",
      "sitting": "images/classes/scoundrel-female-sitting.webp",
      "sittingStill": "images/classes/scoundrel-female-sitting-still.webp",
      "selected": "images/classes/scoundrel-female-attacking.webp",
      "selectedStill": "images/classes/scoundrel-female-attacking-still.webp"
    }
  },
  {
    "id": "mystic",
    "name": "Mystic",
    "parents": [
      "rogue"
    ],
    "children": [
      "arcane-master"
    ],
    "roles": [
      "magic"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords and Bows",
    "stage": "spec",
    "sprite": "images/classes/mystic-sprite.webp",
    "face": "images/classes/mystic-face.webp",
    "idle": "images/classes/mystic-idle.webp",
    "idleStill": "images/classes/mystic-idle-still.webp",
    "sitting": "images/classes/mystic-sitting.webp",
    "sittingStill": "images/classes/mystic-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/mystic-attacking.webp",
    "attackingStill": "images/classes/mystic-attacking-still.webp",
    "female": {
      "idle": "images/classes/mystic-female-idle.webp",
      "idleStill": "images/classes/mystic-female-idle-still.webp",
      "sitting": "images/classes/mystic-female-sitting.webp",
      "sittingStill": "images/classes/mystic-female-sitting-still.webp",
      "selected": "images/classes/mystic-female-attacking.webp",
      "selectedStill": "images/classes/mystic-female-attacking-still.webp"
    }
  },
  {
    "id": "duelist",
    "name": "Duelist",
    "parents": [
      "rogue"
    ],
    "children": [
      "kingslayer"
    ],
    "roles": [
      "physical",
      "tank"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords and Bows",
    "stage": "spec",
    "sprite": "images/classes/duelist-sprite.webp",
    "face": "images/classes/duelist-face.webp",
    "idle": "images/classes/duelist-idle.webp",
    "idleStill": "images/classes/duelist-idle-still.webp",
    "sitting": "images/classes/duelist-sitting.webp",
    "sittingStill": "images/classes/duelist-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/duelist-attacking.webp",
    "attackingStill": "images/classes/duelist-attacking-still.webp",
    "female": {
      "idle": "images/classes/duelist-female-idle.webp",
      "idleStill": "images/classes/duelist-female-idle-still.webp",
      "sitting": "images/classes/duelist-female-sitting.webp",
      "sittingStill": "images/classes/duelist-female-sitting-still.webp",
      "selected": "images/classes/duelist-female-attacking.webp",
      "selectedStill": "images/classes/duelist-female-attacking-still.webp"
    }
  },
  {
    "id": "saboteur",
    "name": "Saboteur",
    "parents": [
      "rogue"
    ],
    "children": [
      "blast-juggler"
    ],
    "roles": [
      "control"
    ],
    "difficulty": "hard",
    "weapons": "Daggers, Swords and Bows",
    "stage": "spec",
    "sprite": "images/classes/saboteur-sprite.webp",
    "face": "images/classes/saboteur-face.webp",
    "idle": "images/classes/saboteur-idle.webp",
    "idleStill": "images/classes/saboteur-idle-still.webp",
    "sitting": "images/classes/saboteur-sitting.webp",
    "sittingStill": "images/classes/saboteur-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/saboteur-attacking.webp",
    "attackingStill": "images/classes/saboteur-attacking-still.webp",
    "female": {
      "idle": "images/classes/saboteur-female-idle.webp",
      "idleStill": "images/classes/saboteur-female-idle-still.webp",
      "sitting": "images/classes/saboteur-female-sitting.webp",
      "sittingStill": "images/classes/saboteur-female-sitting-still.webp",
      "selected": "images/classes/saboteur-female-attacking.webp",
      "selectedStill": "images/classes/saboteur-female-attacking-still.webp"
    }
  },
  {
    "id": "deadeye",
    "name": "Deadeye",
    "parents": [
      "rogue"
    ],
    "children": [
      "sinner"
    ],
    "roles": [
      "ranged"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords and Bows",
    "stage": "spec",
    "sprite": "images/classes/deadeye-sprite.webp",
    "face": "images/classes/deadeye-face.webp",
    "idle": "images/classes/deadeye-idle.webp",
    "idleStill": "images/classes/deadeye-idle-still.webp",
    "sitting": "images/classes/deadeye-sitting.webp",
    "sittingStill": "images/classes/deadeye-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/deadeye-attacking.webp",
    "attackingStill": "images/classes/deadeye-attacking-still.webp",
    "female": {
      "idle": "images/classes/deadeye-female-idle.webp",
      "idleStill": "images/classes/deadeye-female-idle-still.webp",
      "sitting": "images/classes/deadeye-female-sitting.webp",
      "sittingStill": "images/classes/deadeye-female-sitting-still.webp",
      "selected": "images/classes/deadeye-female-attacking.webp",
      "selectedStill": "images/classes/deadeye-female-attacking-still.webp"
    }
  },
  {
    "id": "night-raven",
    "name": "Night Raven",
    "parents": [
      "blade-dancer"
    ],
    "children": [],
    "roles": [
      "physical"
    ],
    "difficulty": "easy",
    "weapons": "Dagger, Sword, Katar, Axe",
    "stage": "final",
    "sprite": "images/classes/night-raven-sprite.webp",
    "face": "images/classes/night-raven-face.webp",
    "idle": "images/classes/night-raven-idle.webp",
    "idleStill": "images/classes/night-raven-idle-still.webp",
    "sitting": "images/classes/night-raven-sitting.webp",
    "sittingStill": "images/classes/night-raven-sitting-still.webp",
    "strengths": "Flexible builds, highest mobility in the game, easy to pickup.",
    "weaknesses": "No major Combo interactions, relies on older skills for creating a full rotation, hard to master.",
    "attacking": "images/classes/night-raven-attacking.webp",
    "attackingStill": "images/classes/night-raven-attacking-still.webp",
    "female": {
      "idle": "images/classes/night-raven-female-idle.webp",
      "idleStill": "images/classes/night-raven-female-idle-still.webp",
      "sitting": "images/classes/night-raven-female-sitting.webp",
      "sittingStill": "images/classes/night-raven-female-sitting-still.webp",
      "selected": "images/classes/night-raven-female-attacking.webp",
      "selectedStill": "images/classes/night-raven-female-attacking-still.webp"
    }
  },
  {
    "id": "satsujin",
    "name": "Satsujin",
    "parents": [
      "shinobi"
    ],
    "children": [],
    "roles": [
      "physical",
      "magic"
    ],
    "difficulty": "hard",
    "weapons": "Daggers",
    "stage": "final",
    "sprite": "images/classes/satsujin-sprite.webp",
    "face": "images/classes/satsujin-face.webp",
    "idle": "images/classes/satsujin-idle.webp",
    "idleStill": "images/classes/satsujin-idle-still.webp",
    "sitting": "images/classes/satsujin-sitting.webp",
    "sittingStill": "images/classes/satsujin-sitting-still.webp",
    "strengths": "Access to all elements at will, all kinds of damage and full scope of damage types. Excelent for solo and coverage.",
    "weaknesses": "Skill point starved, doesn't shine in anything in particular, can be hard to extract the best all at once, some long cooldowns.",
    "attacking": "images/classes/satsujin-attacking.webp",
    "attackingStill": "images/classes/satsujin-attacking-still.webp",
    "female": {
      "idle": "images/classes/satsujin-female-idle.webp",
      "idleStill": "images/classes/satsujin-female-idle-still.webp",
      "sitting": "images/classes/satsujin-female-sitting.webp",
      "sittingStill": "images/classes/satsujin-female-sitting-still.webp",
      "selected": "images/classes/satsujin-female-attacking.webp",
      "selectedStill": "images/classes/satsujin-female-attacking-still.webp"
    }
  },
  {
    "id": "gravekeeper",
    "name": "Gravekeeper",
    "parents": [
      "executioner"
    ],
    "children": [],
    "roles": [
      "physical"
    ],
    "difficulty": "easy",
    "weapons": "Dagger, Sword, Katar, Axe",
    "stage": "final",
    "sprite": "images/classes/gravekeeper-sprite.webp",
    "face": "images/classes/gravekeeper-face.webp",
    "idle": "images/classes/gravekeeper-idle.webp",
    "idleStill": "images/classes/gravekeeper-idle-still.webp",
    "sitting": "images/classes/gravekeeper-sitting.webp",
    "sittingStill": "images/classes/gravekeeper-sitting-still.webp",
    "strengths": "Many critical options, easy to build, powerful DPS potential.",
    "weaknesses": "Resource intensive, requires many status investments, no unique defensive choices.",
    "attacking": "images/classes/gravekeeper-attacking.webp",
    "attackingStill": "images/classes/gravekeeper-attacking-still.webp",
    "female": {
      "idle": "images/classes/gravekeeper-female-idle.webp",
      "idleStill": "images/classes/gravekeeper-female-idle-still.webp",
      "sitting": "images/classes/gravekeeper-female-sitting.webp",
      "sittingStill": "images/classes/gravekeeper-female-sitting-still.webp",
      "selected": "images/classes/gravekeeper-female-attacking.webp",
      "selectedStill": "images/classes/gravekeeper-female-attacking-still.webp"
    }
  },
  {
    "id": "black-plague",
    "name": "Black Plague",
    "parents": [
      "scoundrel"
    ],
    "children": [],
    "roles": [
      "physical",
      "control",
      "tank"
    ],
    "difficulty": "hard",
    "weapons": "Dagger, Sword, Katar, Axe",
    "stage": "final",
    "sprite": "images/classes/black-plague-sprite.webp",
    "face": "images/classes/black-plague-face.webp",
    "idle": "images/classes/black-plague-idle.webp",
    "idleStill": "images/classes/black-plague-idle-still.webp",
    "sitting": "images/classes/black-plague-sitting.webp",
    "sittingStill": "images/classes/black-plague-sitting-still.webp",
    "strengths": "Many debuff options, high skills scaling, tanky.",
    "weaknesses": "limited potential against some enemy types, very complex rotations and build.",
    "attacking": "images/classes/black-plague-attacking.webp",
    "attackingStill": "images/classes/black-plague-attacking-still.webp",
    "female": {
      "idle": "images/classes/black-plague-female-idle.webp",
      "idleStill": "images/classes/black-plague-female-idle-still.webp",
      "sitting": "images/classes/black-plague-female-sitting.webp",
      "sittingStill": "images/classes/black-plague-female-sitting-still.webp",
      "selected": "images/classes/black-plague-female-attacking.webp",
      "selectedStill": "images/classes/black-plague-female-attacking-still.webp"
    }
  },
  {
    "id": "arcane-master",
    "name": "Arcane Master",
    "parents": [
      "mystic"
    ],
    "children": [],
    "roles": [
      "magic"
    ],
    "difficulty": "hard",
    "weapons": "Dagger, Sword",
    "stage": "final",
    "sprite": "images/classes/arcane-master-sprite.webp",
    "face": "images/classes/arcane-master-face.webp",
    "idle": "images/classes/arcane-master-idle.webp",
    "idleStill": "images/classes/arcane-master-idle-still.webp",
    "sitting": "images/classes/arcane-master-sitting.webp",
    "sittingStill": "images/classes/arcane-master-sitting-still.webp",
    "strengths": "Large AoE coverage, multiple ways to deal damage, high damage potential.",
    "weaknesses": "Few defensive options, too many build variations to optimize, few constant DPS choices.",
    "attacking": "images/classes/arcane-master-attacking.webp",
    "attackingStill": "images/classes/arcane-master-attacking-still.webp",
    "female": {
      "idle": "images/classes/arcane-master-female-idle.webp",
      "idleStill": "images/classes/arcane-master-female-idle-still.webp",
      "sitting": "images/classes/arcane-master-female-sitting.webp",
      "sittingStill": "images/classes/arcane-master-female-sitting-still.webp",
      "selected": "images/classes/arcane-master-female-attacking.webp",
      "selectedStill": "images/classes/arcane-master-female-attacking-still.webp"
    }
  },
  {
    "id": "kingslayer",
    "name": "Kingslayer",
    "parents": [
      "duelist"
    ],
    "children": [],
    "roles": [
      "tank",
      "control"
    ],
    "difficulty": "moderate",
    "weapons": "Dagger, Sword, Bows",
    "stage": "final",
    "sprite": "images/classes/kingslayer-sprite.webp",
    "face": "images/classes/kingslayer-face.webp",
    "idle": "images/classes/kingslayer-idle.webp",
    "idleStill": "images/classes/kingslayer-idle-still.webp",
    "sitting": "images/classes/kingslayer-sitting.webp",
    "sittingStill": "images/classes/kingslayer-sitting-still.webp",
    "strengths": "Highest HP, very defensive, great control with offensive skills.",
    "weaknesses": "Underwhelming DPS, very reaction-based, skill point starved.",
    "attacking": "images/classes/kingslayer-attacking.webp",
    "attackingStill": "images/classes/kingslayer-attacking-still.webp",
    "female": {
      "idle": "images/classes/kingslayer-female-idle.webp",
      "idleStill": "images/classes/kingslayer-female-idle-still.webp",
      "sitting": "images/classes/kingslayer-female-sitting.webp",
      "sittingStill": "images/classes/kingslayer-female-sitting-still.webp",
      "selected": "images/classes/kingslayer-female-attacking.webp",
      "selectedStill": "images/classes/kingslayer-female-attacking-still.webp"
    }
  },
  {
    "id": "blast-juggler",
    "name": "Blast Juggler",
    "parents": [
      "saboteur"
    ],
    "children": [],
    "roles": [
      "control"
    ],
    "difficulty": "hard",
    "weapons": "Swords, daggers and axes",
    "stage": "final",
    "sprite": "images/classes/blast-juggler-sprite.webp",
    "face": "images/classes/blast-juggler-face.webp",
    "idle": "images/classes/blast-juggler-idle.webp",
    "idleStill": "images/classes/blast-juggler-idle-still.webp",
    "sitting": "images/classes/blast-juggler-sitting.webp",
    "sittingStill": "images/classes/blast-juggler-sitting-still.webp",
    "strengths": "Great control, versatility, multiple special damage sources.",
    "weaknesses": "Resource intensive, large weight management, difficult stat spread.",
    "attacking": "images/classes/blast-juggler-attacking.webp",
    "attackingStill": "images/classes/blast-juggler-attacking-still.webp",
    "female": {
      "idle": "images/classes/blast-juggler-female-idle.webp",
      "idleStill": "images/classes/blast-juggler-female-idle-still.webp",
      "sitting": "images/classes/blast-juggler-female-sitting.webp",
      "sittingStill": "images/classes/blast-juggler-female-sitting-still.webp",
      "selected": "images/classes/blast-juggler-female-attacking.webp",
      "selectedStill": "images/classes/blast-juggler-female-attacking-still.webp"
    }
  },
  {
    "id": "sinner",
    "name": "Sinner",
    "parents": [
      "deadeye"
    ],
    "children": [],
    "roles": [
      "ranged"
    ],
    "difficulty": "hard",
    "weapons": "Bows, some swords and daggers",
    "stage": "final",
    "sprite": "images/classes/sinner-sprite.webp",
    "face": "images/classes/sinner-face.webp",
    "idle": "images/classes/sinner-idle.webp",
    "idleStill": "images/classes/sinner-idle-still.webp",
    "sitting": "images/classes/sinner-sitting.webp",
    "sittingStill": "images/classes/sinner-sitting-still.webp",
    "strengths": "Long Range, great DPS, can stack buffs for a massive burst.",
    "weaknesses": "Very SP intensive, no big party buffs, balancing multiple details and resources.",
    "attacking": "images/classes/sinner-attacking.webp",
    "attackingStill": "images/classes/sinner-attacking-still.webp",
    "female": {
      "idle": "images/classes/sinner-female-idle.webp",
      "idleStill": "images/classes/sinner-female-idle-still.webp",
      "sitting": "images/classes/sinner-female-sitting.webp",
      "sittingStill": "images/classes/sinner-female-sitting-still.webp",
      "selected": "images/classes/sinner-female-attacking.webp",
      "selectedStill": "images/classes/sinner-female-attacking-still.webp"
    }
  },
  {
    "id": "unchained-thief",
    "name": "Unchained Thief",
    "parents": [
      "thief"
    ],
    "children": [
      "phantom-thief"
    ],
    "roles": [
      "physical",
      "magic"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords and Bows",
    "stage": "alt",
    "sprite": "images/classes/unchained-thief-sprite.webp",
    "face": "images/classes/unchained-thief-face.webp",
    "idle": "images/classes/unchained-thief-idle.webp",
    "idleStill": "images/classes/unchained-thief-idle-still.webp",
    "sitting": "images/classes/unchained-thief-sitting.webp",
    "sittingStill": "images/classes/unchained-thief-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/unchained-thief-attacking.webp",
    "attackingStill": "images/classes/unchained-thief-attacking-still.webp",
    "female": {
      "idle": "images/classes/unchained-thief-female-idle.webp",
      "idleStill": "images/classes/unchained-thief-female-idle-still.webp",
      "sitting": "images/classes/unchained-thief-female-sitting.webp",
      "sittingStill": "images/classes/unchained-thief-female-sitting-still.webp",
      "selected": "images/classes/unchained-thief-female-attacking.webp",
      "selectedStill": "images/classes/unchained-thief-female-attacking-still.webp"
    }
  },
  {
    "id": "unchained-assassin",
    "name": "Unchained Assassin",
    "parents": [
      "assassin"
    ],
    "children": [],
    "roles": [
      "physical"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords, Axes and Katars",
    "stage": "alt",
    "sprite": "images/classes/unchained-assassin-sprite.webp",
    "face": "images/classes/unchained-assassin-face.webp",
    "idle": "images/classes/unchained-assassin-idle.webp",
    "idleStill": "images/classes/unchained-assassin-idle-still.webp",
    "sitting": "images/classes/unchained-assassin-sitting.webp",
    "sittingStill": "images/classes/unchained-assassin-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/unchained-assassin-attacking.webp",
    "attackingStill": "images/classes/unchained-assassin-attacking-still.webp",
    "female": {
      "idle": "images/classes/unchained-assassin-female-idle.webp",
      "idleStill": "images/classes/unchained-assassin-female-idle-still.webp",
      "sitting": "images/classes/unchained-assassin-female-sitting.webp",
      "sittingStill": "images/classes/unchained-assassin-female-sitting-still.webp",
      "selected": "images/classes/unchained-assassin-female-attacking.webp",
      "selectedStill": "images/classes/unchained-assassin-female-attacking-still.webp"
    }
  },
  {
    "id": "unchained-rogue",
    "name": "Unchained Rogue",
    "parents": [
      "rogue"
    ],
    "children": [],
    "roles": [
      "physical",
      "magic"
    ],
    "difficulty": "moderate",
    "weapons": "Daggers, Swords and Bows",
    "stage": "alt",
    "sprite": "images/classes/unchained-rogue-sprite.webp",
    "face": "images/classes/unchained-rogue-face.webp",
    "idle": "images/classes/unchained-rogue-idle.webp",
    "idleStill": "images/classes/unchained-rogue-idle-still.webp",
    "sitting": "images/classes/unchained-rogue-sitting.webp",
    "sittingStill": "images/classes/unchained-rogue-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/unchained-rogue-attacking.webp",
    "attackingStill": "images/classes/unchained-rogue-attacking-still.webp",
    "female": {
      "idle": "images/classes/unchained-rogue-female-idle.webp",
      "idleStill": "images/classes/unchained-rogue-female-idle-still.webp",
      "sitting": "images/classes/unchained-rogue-female-sitting.webp",
      "sittingStill": "images/classes/unchained-rogue-female-sitting-still.webp",
      "selected": "images/classes/unchained-rogue-female-attacking.webp",
      "selectedStill": "images/classes/unchained-rogue-female-attacking-still.webp"
    }
  },
  {
    "id": "phantom-thief",
    "name": "Phantom Thief",
    "parents": [
      "unchained-thief"
    ],
    "children": [],
    "roles": [
      "physical",
      "magic"
    ],
    "difficulty": "hard",
    "weapons": "Daggers, Swords and Bows",
    "stage": "final",
    "sprite": "images/classes/phantom-thief-sprite.webp",
    "face": "images/classes/phantom-thief-face.webp",
    "idle": "images/classes/phantom-thief-idle.webp",
    "idleStill": "images/classes/phantom-thief-idle-still.webp",
    "sitting": "images/classes/phantom-thief-sitting.webp",
    "sittingStill": "images/classes/phantom-thief-sitting-still.webp",
    "strengths": null,
    "weaknesses": null,
    "attacking": "images/classes/phantom-thief-attacking.webp",
    "attackingStill": "images/classes/phantom-thief-attacking-still.webp",
    "female": {
      "idle": "images/classes/phantom-thief-female-idle.webp",
      "idleStill": "images/classes/phantom-thief-female-idle-still.webp",
      "sitting": "images/classes/phantom-thief-female-sitting.webp",
      "sittingStill": "images/classes/phantom-thief-female-sitting-still.webp",
      "selected": "images/classes/phantom-thief-female-attacking.webp",
      "selectedStill": "images/classes/phantom-thief-female-attacking-still.webp"
    }
  }
];

export const roleLabels: Record<string, string> = { physical: "Physical damage", magic: "Magic damage", ranged: "Ranged", tank: "Durable", control: "Battlefield control", support: "Support", utility: "Utility" };
export const difficultyLabels: Record<string, string> = { easy: "Easy to pick up", moderate: "Moderate", hard: "Hard", expert: "Expert only" };
