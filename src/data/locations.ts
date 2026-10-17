export interface LevelingLocation {
  id: string;
  name: string;
  description: string;
  source: string;
  verification: 'legacy-reference' | 'source-reviewed';
  monsterLevels?: string;
  access?: string;
  notes?: string;
  screenshot?: number;
}

// Locations are shared references. Build-specific advice belongs to an authored route.
export const locations: LevelingLocation[] = [
  {
    id: 'pyramid-basement', name: 'Pyramid Basement',
    description: 'The source route begins here after the tutorial.',
    monsterLevels: 'Not specified; source starts at Base 6 / Job 3.',
    access: 'Leave the Orphanage hallway past the Caravan Leader and Thief Guild. At the junction, use the lower portal and descend the stairs.',
    notes: 'Familiars and Tomb Skeleton Leaders are aggressive. The source also describes using Heal against undead; check Refuge skill behavior first.',
    screenshot: 10, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'payon-caves', name: 'Payon Caves',
    description: 'The next dungeon described in the source route.', monsterLevels: '16–22',
    access: 'Travel to Payon using the Orphanage Kafra. Go north to Archer Village, then follow the left edge to the dungeon entrance.',
    notes: 'Bonguns and Munaks can inflict Curse and Stun. Avoid their attacks and take smaller pulls while learning.',
    screenshot: 11, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'prontera-culvert', name: 'Prontera Culvert',
    description: 'An early option for fighting groups.', monsterLevels: '21–27',
    access: 'Exit Prontera to the west. Find the Culvert Guardian and speak to him to enter; the source lists no access quest.',
    notes: 'Watch for poison clouds and fire. The original route mentions Rolling Cutter for groups here.',
    screenshot: 12, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'morroc-fields', name: 'Morroc Fields',
    description: 'An alternative with more separated enemies.', monsterLevels: '30–35',
    access: 'Take the east exit from Morroc, then head east again.',
    notes: 'The source targets Granite Warriors for characters without area damage. Avoid Strange Men casting Death Cloud; Golems need an answer to plant defense.',
    screenshot: 13, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'geffen-fields', name: 'Geffen Fields',
    description: 'An alternative before the Orc Village area.', monsterLevels: '36–37',
    access: 'From Geffen, travel west twice.',
    notes: 'Move away from the baby dragons’ area attacks.',
    screenshot: 14, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'orc-village', name: 'Orc Village and West Orc Village',
    description: 'Two neighboring areas in the original progression.', monsterLevels: '47–48; West Orc Village 52–54',
    access: 'Go west from Geffen and find the ferry at the small dock to the south. After the crossing, head south to Orc Village. West Orc Village is one map west.',
    notes: 'Watch Orc Warrior’s Axe Tornado. Flat HP equipment can help fragile characters. The source starts this area at player level 33.',
    screenshot: 15, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'frontier-fields', name: 'Frontier Fields',
    description: 'An area with a dangerous high-experience enemy in the source.', monsterLevels: '51–59',
    access: 'Warp to Nomad Village and leave west. Alternatively, travel east from Frontier/Maroll.',
    notes: 'Adult Molinet uses Mass Grave. Fight other field enemies if you cannot defeat it safely.',
    screenshot: 16, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'toy-factory', name: 'Toy Factory',
    description: 'A later stop reached through the Snow Fields.', monsterLevels: '70–73',
    access: 'From Hugel, go east and use the ferry to Snow Fields. Head north to Lutie, then north through town to Toy Factory.',
    notes: 'Myst Case has a long Mammonite cast. The source recommends Hiding to avoid it and notes Gift Boxes as a possible drop.',
    screenshot: 17, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'amatsu-field', name: 'Amatsu Field',
    description: 'The field before Amatsu Dungeon.', monsterLevels: '86–87',
    access: 'Find the ferry on Alberta’s east side, travel to Amatsu, then head north.',
    notes: 'Avoid Karakasa area attacks: their bleeding stops SP regeneration. The source mentions Orc Set bleed immunity.',
    screenshot: 18, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'amatsu-dungeon', name: 'Amatsu Dungeon',
    description: 'The dungeon beyond Amatsu Field.', monsterLevels: '91–94',
    access: 'Travel north from Amatsu Field.',
    notes: 'Corrupted Shinobi are a particular threat to fragile characters.',
    screenshot: 19, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'kafra-warehouse', name: 'Kafra Abandoned Warehouse',
    description: 'An alternative to Rachel Sanctuary in the original guide.', monsterLevels: '100–104',
    access: 'Head north from Aldebaran until you reach the Kafras. Speak to the NPCs to obtain entry.',
    notes: 'Storage Assistants use Face-Off. Give yourself room away from walls and react to their casts.',
    screenshot: 20, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'old-glast-heim', name: 'Old Glast Heim',
    description: 'The original route’s first Distortion Dungeon.', monsterLevels: '111–117',
    access: 'From Geffen: west, west, north, west. Interact with the orb on the north side of the outdoor map. The source requires the Bifrost Mirror and its first jewel; verify those prerequisites for Refuge.',
    notes: 'Check Distortion access before making the trip.',
    screenshot: 21, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'thor-volcano', name: 'Thor Volcano',
    description: 'A fire-heavy area later in the original route.', monsterLevels: '120–122',
    access: 'From Rachel: south, west, south, west.',
    notes: 'Prepare for fire damage and avoid Kasa’s Meteor Storm.',
    screenshot: 22, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
  {
    id: 'varmundt-mansion', name: 'Varmundt Mansion',
    description: 'The mansion and library are the final area covered by the source route.', monsterLevels: '131–134',
    access: 'Take the airship from Lighthalzen. Enter the building in the mansion’s upper-right area, follow the portals, and interact with the dresser to reach the library.',
    notes: 'The source mentions entering the mansion from player level 117 and leveling toward the original soft cap of 130.',
    screenshot: 23, source: 'new-orphan-guide', verification: 'legacy-reference',
  },
];
