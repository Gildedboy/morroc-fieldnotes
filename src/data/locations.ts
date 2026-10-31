export interface LevelingLocationImage {
  src: string;
  alt: string;
  square?: boolean;
}

export interface LevelingLocation {
  id: string;
  name: string;
  monsterLevels: string;
  expStartBaseLevel?: number;
  monsters?: string[];
  databasePlaces?: { label: string; query: string }[];
  access: string;
  notes: string;
  noteLinks?: { label: string; href: string }[];
  screenshot?: number;
  image?: LevelingLocationImage;
  additionalImages?: LevelingLocationImage[];
  extraScreenshots?: number[];
}

// Routes and notes follow the original guide; monster ranges use current Refuge database records.
export const locations: LevelingLocation[] = [
  {
    id: 'pyramid-basement', name: 'Pyramid Basement',
    monsterLevels: '3–15', expStartBaseLevel: 1,
    monsters: ['Snake Lv. 3', 'Verit Lv. 5', 'Tomb Skeleton Lv. 7', 'Familiar Lv. 8', 'Tomb Skeleton Leader Lv. 10', 'Orphan Piamette Lv. 15 (MVP)'],
    access: 'From the Orphanage, walk down the hallway past the Caravan Leader and Thief Guild. At the junction, take the lower portal and descend the stairs.',
    notes: 'Familiars and Tomb Skeleton Leaders are aggressive.',
    databasePlaces: [{ label: 'Inside Pyramid', query: 'pyramid' }],
    screenshot: 10,
  },
  {
    id: 'payon-caves', name: 'Payon Caves', monsterLevels: '16–25', expStartBaseLevel: 1,
    monsters: ['Soldier Skeleton Lv. 16', 'Archer Skeleton Lv. 17', 'Skeleton General Lv. 18', 'Bongun Lv. 19', 'Munak Lv. 20', 'Sohee Lv. 21', 'Nine Tails Lv. 22', 'Fire Fox Lv. 23', "Cat o' Nine Tails Lv. 24", 'Moonlight Flower Lv. 25 (MVP)'],
    access: 'From the Orphanage, use Skia Nerius’s Dungeon Caravan to warp to Payon Cave.',
    notes: 'Bonguns and Munaks can inflict Curse and Stun.',
    databasePlaces: [{ label: 'Payon Cave', query: 'payon' }],
    screenshot: 11,
  },
  {
    id: 'upper-pyramid', name: 'Upper Pyramid', monsterLevels: '18–25', expStartBaseLevel: 3,
    monsters: ['Mummy Lv. 18', 'Minorous Lv. 20', 'Isis Lv. 22', 'Ancient Mummy Lv. 24', 'Osiris Lv. 25 (MVP)'],
    access: 'From the Orphanage, walk down the hallway past the Caravan Leader and Thief Guild. At the junction, take the upper portal and descend the stairs to Upper Pyramid.',
    notes: 'Osiris is the MVP on F4.',
    image: { src: 'images/locations/upper-pyramid.jpg', alt: 'Two Mummies and a Minorous in an Upper Pyramid corridor', square: true },
    databasePlaces: [{ label: 'Inside Pyramid', query: 'pyramid' }],
  },
  {
    id: 'prontera-culvert', name: 'Prontera Culvert', monsterLevels: '21–30', expStartBaseLevel: 6,
    monsters: ['Thief Bug Lv. 21', 'Tarou Lv. 23', 'Toxic Thief Bug Lv. 25', 'Mega Thief Bug Lv. 27', 'Fulbuk Lv. 29', 'Golden Thief Bug Lv. 30 (MVP)'],
    access: 'From the Orphanage, use Skia Nerius’s Dungeon Caravan to warp to Prontera Culvert.',
    notes: 'Watch for poison clouds and fire. The source notes that many monsters are aggressive.',
    databasePlaces: [{ label: 'Prontera Culvert', query: 'culvert' }],
    screenshot: 12,
  },
  {
    id: 'horn', name: 'Horn', monsterLevels: '26–30', expStartBaseLevel: 11,
    monsters: ['Coco Lv. 26', 'Horn Lv. 28', 'Goblin Archer Lv. 30'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Geffen, then go west once.',
    notes: 'The field has Coco and Goblin Archer alongside Horns.',
    databasePlaces: [{ label: 'Geffen Field', query: 'geffen' }],
    image: { src: 'images/locations/horn.jpg', alt: 'Three Horn monsters in a grassy area of Geffen Field', square: true },
  },
  {
    id: 'morroc-fields', name: 'Morroc Fields', monsterLevels: '30–35', expStartBaseLevel: 15,
    monsters: ['Golem Lv. 30', 'Granite Warrior Lv. 33', 'Strange Man Lv. 35'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Morroc. Leave through the east exit, then continue east once more.',
    notes: 'Granite Warriors are a target for characters without area attacks. Strange Men cast Death Cloud; Golems have plant defense.',
    databasePlaces: [{ label: 'Sograt Desert', query: 'morroc' }],
    screenshot: 13,
  },
  {
    id: 'geffen-fields', name: 'Geffen Fields', monsterLevels: '36–37', expStartBaseLevel: 21,
    monsters: ['Land Petite Lv. 36', 'Sky Petite Lv. 37'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Geffen, then travel west twice.',
    notes: 'Petites use area attacks; avoid them.',
    databasePlaces: [{ label: 'Geffen Field', query: 'geffen' }],
    screenshot: 14,
  },
  {
    id: 'sunken-ship', name: 'Sunken Ship', monsterLevels: '35–45', expStartBaseLevel: 20,
    monsters: ['Sweet Mermaid Lv. 35', 'Pirate Skeleton Lv. 38', 'Drowned Spirit Lv. 40', 'Mad Corsair Lv. 42', 'Drake Lv. 45 (MVP)'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Alberta. Speak with Fisk at 189, 151 to enter the Sunken Ship.',
    notes: 'Drake appears on B2.',
    image: { src: 'images/npcs/fisk-alberta.jpg', alt: 'Fisk at the Alberta harbor entrance to the Sunken Ship' },
    additionalImages: [{ src: 'images/locations/sunken-ship.jpg', alt: 'Two Pirate Skeletons inside the Sunken Ship', square: true }],
    databasePlaces: [{ label: 'Sunken Ship', query: 'sunken ship' }],
  },
  {
    id: 'comodo-swamp', name: 'Comodo Swamp (Zenhai Marsh)', monsterLevels: '46–50', expStartBaseLevel: 31,
    monsters: ['Alligator Lv. 46', 'Grove Lv. 47', 'Galapago Lv. 48', 'Mutant Dragonoid Lv. 50'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Comodo. Travel east through Papuchicha Forest (cmd_fild01) to reach Zenhai Marsh (cmd_fild03), where you can find Galapagos.',
    notes: 'The database lists this Comodo swamp map as Zenhai Marsh. Alligators are the most numerous monsters here.',
    image: { src: 'images/locations/comodo-swamp-monsters.svg', alt: 'Two Alligators and a Galapago among the grass and palms of Comodo Swamp', square: true },
    databasePlaces: [{ label: 'Zenhai Marsh', query: 'zenhai-marsh' }],
  },
  {
    id: 'orc-village', name: 'Orc Village and West Orc Village', monsterLevels: '47–55', expStartBaseLevel: 32,
    monsters: ['Orc Lady Lv. 47', 'Orc Warrior Lv. 48', 'Orc Baby Lv. 50', 'Orc Archer Lv. 52', 'High Orc Lv. 54', 'Fallen Orc Hero Lv. 55 (MVP)'],
    access: 'From the Orphanage, use Skia Nerius’s Dungeon Caravan to warp to Orc Village. West Orc Village is one map west.',
    notes: 'Orc Warrior uses Axe Tornado.',
    databasePlaces: [{ label: 'West Orc Village', query: 'orc village' }],
    screenshot: 15,
  },
  {
    id: 'frontier-fields', name: 'Frontier Fields', monsterLevels: '51–60', expStartBaseLevel: 36,
    monsters: ['Magetin Lv. 51', 'Baby Molinet Lv. 53', 'Adult Molinet Lv. 55', 'Rocky Boy Lv. 57', 'Bubble Girl Lv. 59', 'Rockullanux Lv. 60 (MVP)'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Nomad Village, then leave west for Abandoned Frontier Outpost. For the higher-level fields, warp to Frontier/Maroll and go east to East Frontier Fields and Frontier Rocky Road.',
    notes: 'The three Frontier field records cover levels 51–60.',
    databasePlaces: [
      { label: 'Abandoned Frontier Outpost', query: 'frontier outpost' },
      { label: 'East Frontier Fields', query: 'east frontier fields' },
      { label: 'Frontier Rocky Road', query: 'frontier rocky road' },
    ],
    screenshot: 16,
  },
  {
    id: 'faceworm', name: 'Faceworm Forests and Dark Nest', monsterLevels: '66–70', expStartBaseLevel: 51,
    monsters: ['Toxic Scorpion Lv. 66 (Inner and Den Forests)', 'Faceworm Lv. 68', 'Faceworm Dark Lv. 69', 'Faceworm Queen Lv. 70 (MVP)'],
    access: 'From the Orphanage, use Skia Nerius’s Dungeon Caravan to warp to Payon Archer Village. Go one map east, then one map north to Faceworm’s Dark Nest.',
    notes: 'Party play is strongly encouraged. Bring poison immunity, such as the Clean Shoes Shadow piece or a Gas Mask.',
    noteLinks: [{ label: 'HATred guide ↗', href: 'https://hatredguide.segasunset.workers.dev/' }],
    image: { src: 'images/locations/faceworm.png', alt: 'A Faceworm and a Toxic Scorpion in Faceworm Forest', square: true },
    databasePlaces: [
      { label: "Faceworm's Forest", query: 'faceworm forest' },
      { label: "Faceworm's Inner Forest", query: 'faceworm inner forest' },
      { label: "Faceworm's Den Forest", query: 'faceworm den forest' },
      { label: "Faceworm's Dark Nest", query: 'dark nest' },
    ],
  },
  {
    id: 'toy-factory', name: 'Toy Factory', monsterLevels: '70–75', expStartBaseLevel: 55,
    monsters: ['Christmas Cookie Lv. 70', 'Cruiser Lv. 71', 'Myst Case Lv. 72', 'Chocolate Bear Lv. 73', 'Antonio Lv. 74', 'Chepet Lv. 74', 'Stormy Knight Lv. 75 (MVP)'],
    access: 'From the Orphanage, use Kafra Allysia to warp directly to Lutie (requires Orphanage Level 50). Continue north through town to Toy Factory.',
    notes: 'Myst Case casts Mammonite. Stormy Knight (Lv. 75 MVP) appears in the Toy Monitoring Room.',
    databasePlaces: [
      { label: 'Toy Factory Warehouse', query: 'toy factory' },
      { label: 'Toy Monitoring Room', query: 'toy monitoring room' },
    ],
    screenshot: 17,
  },
  {
    id: 'leaf-cats', name: 'Leaf Cats', monsterLevels: '82–84', expStartBaseLevel: 67,
    monsters: ['Leaf Cat Lv. 82', 'Kraben Lv. 84'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Alberta. Take the Ayothaya Ferry, then walk east once to the fields.',
    notes: 'Both field maps list Leaf Cats and Kraben.',
    image: { src: 'images/locations/leaf-cats-field.jpg', alt: 'Leaf Cats and another field monster on Ayothaya Field', square: true },
    databasePlaces: [{ label: 'Ayothaya Field', query: 'ayothaya' }],
  },
  {
    id: 'amatsu-field', name: 'Amatsu Field', monsterLevels: '86–90', expStartBaseLevel: 71,
    monsters: ['Karakasa Lv. 86', 'Kapha Lv. 87', 'Verporte Lv. 90'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Alberta. Take the ferry to Amatsu, then head north.',
    notes: 'Karakasa can inflict Bleeding, which stops SP regeneration.',
    databasePlaces: [{ label: 'Amatsu Field', query: 'amatsu' }],
    screenshot: 18,
  },
  {
    id: 'amatsu-dungeon', name: 'Amatsu Dungeon', monsterLevels: '91–95', expStartBaseLevel: 76,
    monsters: ['Miyabi Doll Lv. 91', 'Antique Firelock Lv. 92', 'The Paper Lv. 93', 'Tengu Lv. 93', 'Corrupted Shinobi Lv. 94', 'Silent Ronin Lv. 95', 'Incantation Samurai Lv. 95 (MVP)'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Alberta, then take the ferry to Amatsu. Enter from Amatsu Field, where Kappa (Kapha), Karakasa, and Verporte are found.',
    notes: 'Corrupted Shinobi can threaten characters with low defenses.',
    databasePlaces: [{ label: 'Amatsu Underground Shrine', query: 'amatsu' }],
    screenshot: 19,
  },
  {
    id: 'kafra-warehouse', name: 'Kafra Abandoned Warehouse', monsterLevels: '100–105', expStartBaseLevel: 85,
    monsters: ['Ashring Lv. 100', 'Old Blue Bag Lv. 100', 'Save Assistant Lv. 101', 'Storage Assistant Lv. 102', 'Warp Assistant Lv. 103', 'Mutated Kafra Lv. 104', 'Consumed Kafra Lv. 104', 'Kafra Manager Jenni Lv. 105 (MVP)'],
    access: 'From the Orphanage, use Skia Nerius’s Dungeon Caravan to warp to the Abandoned Kafra Warehouse.',
    notes: 'Storage Assistants use Face-Off. Keep away from walls when they cast.',
    databasePlaces: [{ label: 'Abandoned Kafra Warehouse', query: 'abandoned kafra' }],
    screenshot: 20,
  },
  {
    id: 'rachel-sanctuary', name: 'Rachel Sanctuary', monsterLevels: '101–110', expStartBaseLevel: 86,
    monsters: ['Vanberk Lv. 101', 'Hodremlin Lv. 101', 'Isilla Lv. 102', 'Seeker Lv. 103', 'Echio Lv. 104', 'Agav Lv. 105', 'Tricked Follower Lv. 107', 'Gloom Under Night Lv. 110 (MVP)'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Prontera, then use Prontera’s Kafra to warp to Rachel. Go north to Freya’s Grand Temple and speak with the Rachel Guard at 166, 215 to enter Rachel Sanctuary.',
    notes: 'Most jobs transition to their endgame jobs in this location. Gloom Under Night is the MVP on F5.',
    image: { src: 'images/locations/rachel-sanctuary.jpg', alt: 'Vanberk and Isilla among the red stone platforms of Rachel Sanctuary', square: true },
    databasePlaces: [{ label: 'Freya’s Sacred Precinct', query: 'sacred precinct' }],
  },
  {
    id: 'sky-garden', name: 'Sky Garden', monsterLevels: '101–105', expStartBaseLevel: 86,
    monsters: ['Sif Avatar Lv. 101', 'Sleipnir Avatar Lv. 101', 'Idun Avatar Lv. 102', 'Siegfried Avatar Lv. 103', 'Thor Avatar Lv. 104', 'Sarah Irene Lv. 105 (MVP)'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Umbala. Go one map north to Yggdrasil Tree and enter Yggdrasil Dungeon. Continue through Yggdrasil Dungeon F1 and F2 to reach Yggdrasil Tree Trunk, then go one map north to Yggdrasil Tree Branches. Speak with the Sky Garden NPC in the middle section to enter.',
    notes: 'Trade Einherjar Soul for powerful equipment at the end of Sky Garden. Watch out for Sarah Irene on the last floor of Okolnir. If you open a Warp Portal for another player, be a good Orphan and let them travel for free.',
    image: { src: 'images/locations/sky-garden.jpg', alt: 'Several Sky Garden enemies on a stone path beside garden foliage', square: true },
    databasePlaces: [
      { label: 'Sky Garden Village', query: 'skydun1' },
      { label: 'Sky Garden Temple', query: 'skydun2' },
      { label: 'Sky Garden Okolnir', query: 'skydun3' },
    ],
  },
  {
    id: 'old-glast-heim', name: 'Old Glast Heim', monsterLevels: '111–120', expStartBaseLevel: 96,
    monsters: ['Spectre Raydric Archer Lv. 111', 'Spectre Raydric Lv. 112', 'Khalitzburg Knight Lv. 114', 'White Knight Lv. 117', 'Corruption Root Lv. 119 (MVP)', 'Amdarais Lv. 120 (MVP)'],
    access: 'From the Orphanage, use Skia Nerius’s Dungeon Caravan to warp to Old Glast Heim, then go to the distortion orb at the north end of the map.',
    notes: 'You need a Bifrost Mirror to enter.',
    databasePlaces: [{ label: 'Old Glast Heim', query: 'old glast heim' }],
    noteLinks: [{ label: 'Bifrost Mirror guide', href: '/guides/bifrost-mirror/' }],
    screenshot: 21,
  },
  {
    id: 'thor-volcano', name: 'Thor Volcano', monsterLevels: '120–125', expStartBaseLevel: 105,
    monsters: ['Bonfire Agni Lv. 120', 'Salamander Lv. 121', 'Kasa Lv. 122', 'Volcano Agni Lv. 123', 'Marilith Lv. 124', 'Hellfire Agni Lv. 124', 'Ifrit Lv. 125 (MVP)'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Prontera, then use Prontera’s Kafra to warp to Rachel. From Rachel, travel south, west, south, then west again.',
    notes: 'Prepare for fire damage and move away from Kasa’s Meteor Storm.',
    databasePlaces: [{ label: 'Thor Volcano Dungeon', query: 'thor volcano' }],
    screenshot: 22,
  },
  {
    id: 'opera-house', name: 'Opera House', monsterLevels: '115–120', expStartBaseLevel: 100,
    monsters: ['Scream Lv. 115', 'Night Ruri Lv. 116', 'Gan Ceann Lv. 117', 'Opera Jitterbug Lv. 119', 'Voice of Sorrow Lv. 120', 'Baroness of Sorrow Lv. 120 (MVP)'],
    access: 'From the Orphanage, use Kafra Allysia to warp to Umbala. Use the Kafra in Umbala to warp to Nifflheim, then enter the Opera House at the pictured entrance.',
    notes: 'Baroness of Sorrow appears in nif_dun02.',
    image: { src: 'images/locations/opera-house-entrance.jpg', alt: 'The Opera House entrance in Nifflheim', square: true },
    additionalImages: [{ src: 'images/locations/opera-house-monster.jpg', alt: 'A monster in one of the Opera House halls', square: true }],
    databasePlaces: [
      { label: 'nif_dun01', query: 'nif_dun01' },
      { label: 'nif_dun02', query: 'nif_dun02' },
    ],
  },
  {
    id: 'varmundt-mansion', name: 'Varmundt Library', monsterLevels: '131–134', expStartBaseLevel: 116,
    monsters: ['Gentleman Lv. 131', 'Maiden of Present Lv. 132', 'Cavalier Lv. 132', 'Maiden of Future Lv. 133', 'Lost Codex Lv. 134', 'Lost Traveler Lv. 134'],
    access: 'With the Bifrost Mirror unlocked, interact with the distortion orb in the Orphanage, then leave through the Pyramid-side passage. At the upper-right of the map, enter the building, follow its portals, and interact with the dresser to reach the library. You can also use Kafra Allysia to warp to Lighthalzen, take the airship, and enter the mansion building.',
    notes: 'The Orphanage is itself a distortion of Varmundt Mansion; this route leaves that distortion before reaching the library. The library is a strong option once you can earn EXP from Lost Codex. Before then, farm the Maidens, Gentleman, and Cavalier.',
    databasePlaces: [{ label: 'Mansion Library', query: 'mansion library' }],
    screenshot: 23,
    extraScreenshots: [24, 25, 26],
  },
  {
    id: "mad-drinker", name: "Mad Drinker", monsterLevels: "125–135", expStartBaseLevel: 110,
    monsters: ["Bartender Lv. 125", "Buckethead Lv. 127", "Bruised Drunkard Lv. 129", "Tired Maid Lv. 131", "Desperate Maid Lv. 133", "Moldy Man Lv. 134", "Strange Love Lv. 135 (MVP)"],
    access: "In the Orphanage kitchen, enter the Mad Drinker Distortion at va_orpha 389,180.",
    notes: "You need the Bifrost Mirror to enter. Strange Love is the MVP in this distortion.",
    image: { src: 'images/locations/mad-drinker-monsters.svg', alt: 'Three Mad Drinker mobs in a stone-floored room beside wooden shelves', square: true },
    databasePlaces: [{"label": "Mad Drinker", "query": "mad-drinker-distortion"}],
  },
  {
    id: "death-castle", name: "Death Castle", monsterLevels: "135–140", expStartBaseLevel: 120,
    monsters: ["Haunting Guise Lv. 135", "Guillotine Lv. 137", "Death Ruri Lv. 138", "Great Shadow Lv. 139", "Lord of Death Lv. 140 (MVP)"],
    access: "From the Orphanage, use Kafra Allysia to warp to Umbala, then use Umbala’s Kafra to warp to Nifflheim. Travel west through Valley of Niflheim and Skellington to reach Death Castle Entrance. Speak with Strange Soul at nif_cas01 30,125 to enter the Grandhall.",
    notes: "Lord of Death is the MVP in the Grandhall.",
    image: { src: 'images/locations/death-castle-monsters.svg', alt: 'Two Death Castle mobs on purple cobblestones', square: true },
    databasePlaces: [{"label": "Death Castle Entrance", "query": "death-castle-entrance"}, {"label": "Death Castle Grandhall", "query": "death-castle-grandhall"}],
  },
];

export interface EntranceScreenshot {
  caption?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface DungeonEntrance {
  id: string;
  name: string;
  kind: 'dungeons' | 'distortions';
  locationId?: string;
  directions?: string;
  route?: string[];
  alternativeRoute?: string;
  monsterLevels?: string;
  rank?: string;
  mirrorEye?: 'Vidar' | 'Vali' | 'Thor' | 'Balder';
  requirements?: string;
  extraRequirements?: string[];
  notes?: string;
  places: { label: string; key: string }[];
  screenshots: EntranceScreenshot[];
}

// Reviewed entrance facts: current Refuge place records and the owner's entrance sheet.
// Rank labels come from the original-server table preserved on Refuge's world page.
export const dungeonEntrances: DungeonEntrance[] = [
  {
    "id": "upper-pyramid",
    "name": "Upper Pyramid",
    "kind": "dungeons",
    "locationId": "upper-pyramid",
    "rank": "D",
    "places": [
      {
        "label": "Inside Pyramid",
        "key": "inside-pyramid"
      }
    ],
    "screenshots": []
  },
  {
    "id": "pyramid-basement",
    "name": "Pyramid Basement",
    "kind": "dungeons",
    "locationId": "pyramid-basement",
    "rank": "D",
    "places": [
      {
        "label": "Inside Pyramid",
        "key": "inside-pyramid"
      }
    ],
    "screenshots": []
  },
  {
    "id": "insect-society-nest",
    "name": "Insect Society Nest",
    "kind": "dungeons",
    "places": [
      {
        "label": "Ant Hell",
        "key": "ant-hell"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-001.webp",
        "width": 1024,
        "height": 768,
        "alt": "Insect Society Nest entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-002.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Insect Society Nest; the mouse pointer indicates the destination map",
        "caption": "Insect Society Nest · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Prontera, then go south three maps to reach the Insect Society entrance.",
    "rank": "A",
    "monsterLevels": "15–20",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Morroc's Guild.",
      "Sograt Desert F16.",
      "Sograt Desert F15.",
      "Ant Hell F2."
    ]
  },
  {
    "id": "payon-cave",
    "name": "Payon Cave",
    "kind": "dungeons",
    "places": [
      {
        "label": "Payon Cave",
        "key": "payon-cave"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-003.webp",
        "width": 1024,
        "height": 768,
        "alt": "Payon Cave entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-004.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Payon Cave; the mouse pointer indicates the destination map",
        "caption": "Payon Cave · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Payon and go north to Archer Village. Enter the cave in the northwest corner.",
    "locationId": "payon-caves",
    "rank": "D",
    "monsterLevels": "16–25",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Payon Archer Village.",
      "Enter Payon Cave F1 in the northwest corner of Archer Village."
    ]
  },
  {
    "id": "prontera-culvert",
    "name": "Prontera Culvert",
    "kind": "dungeons",
    "places": [
      {
        "label": "Prontera Culvert",
        "key": "prontera-culvert"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-005.webp",
        "width": 1024,
        "height": 768,
        "alt": "Prontera Culvert entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-006.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Prontera Culvert; the mouse pointer indicates the destination map",
        "caption": "Prontera Culvert · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Prontera and leave west. Look for the entrance near the middle of the field.",
    "locationId": "prontera-culvert",
    "rank": "E",
    "monsterLevels": "21–30",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Prontera Culvert.",
      "Prontera Field F5 — interact with Culvert Guardian (east) at 270, 212.",
      "Prontera Culvert F1."
    ]
  },
  {
    "id": "morroc-sphinx",
    "name": "Morroc Sphinx",
    "kind": "dungeons",
    "places": [
      {
        "label": "Morocc Sphinx",
        "key": "morocc-sphinx"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-007.webp",
        "width": 1024,
        "height": 768,
        "alt": "Morroc Sphinx entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-008.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Morroc Sphinx; the mouse pointer indicates the destination map",
        "caption": "Morroc Sphinx · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "B",
    "monsterLevels": "26–35",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Morroc Sphinx.",
      "Sograt Desert F19.",
      "Morocc Sphinx B1."
    ]
  },
  {
    "id": "geffen-cave",
    "name": "Geffen Cave",
    "kind": "dungeons",
    "places": [
      {
        "label": "Geffen Dungeon",
        "key": "geffen-dungeon"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-009.webp",
        "width": 1024,
        "height": 768,
        "alt": "Geffen Cave entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-010.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Geffen Cave; the mouse pointer indicates the destination map",
        "caption": "Geffen Cave · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "D",
    "monsterLevels": "35–40",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Geffen Cave.",
      "Geffen Field F9.",
      "Geffen Dungeon B3."
    ]
  },
  {
    "id": "beach-caves",
    "name": "Beach Caves",
    "kind": "dungeons",
    "places": [
      {
        "label": "Karu, the West Cave",
        "key": "karu-the-west-cave"
      },
      {
        "label": "Luanda, the North Cave",
        "key": "luanda-the-north-cave"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-011.webp",
        "width": 1024,
        "height": 768,
        "alt": "Beach Caves entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-012.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Beach Caves; the mouse pointer indicates the destination map",
        "caption": "Beach Caves · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Comodo. The western cave entrance is on the west side of town.",
    "rank": "D",
    "monsterLevels": "40–45",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Comodo.",
      "Enter Karu, the West Cave, on the west side of Comodo."
    ]
  },
  {
    "id": "sunken-ship",
    "name": "Sunken Ship",
    "kind": "dungeons",
    "places": [
      {
        "label": "Sunken Ship",
        "key": "sunken-ship"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-013.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sunken Ship entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-014.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sunken Ship entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-015.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Sunken Ship; the mouse pointer indicates the destination map",
        "caption": "Sunken Ship · Follow the mouse pointer to the destination map."
      }
    ],
    "locationId": "sunken-ship",
    "rank": "C",
    "monsterLevels": "35–45",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Alberta.",
      "Alberta — interact with Fisk (east) at 189, 151.",
      "Alberta Island.",
      "Sunken Ship B1."
    ]
  },
  {
    "id": "byalan-island",
    "name": "Byalan Island",
    "kind": "dungeons",
    "places": [
      {
        "label": "Byalan Island",
        "key": "byalan-island"
      },
      {
        "label": "Byalan Upper Cave",
        "key": "byalan-upper-cave"
      },
      {
        "label": "Byalan Lower Cave",
        "key": "byalan-lower-cave"
      },
      {
        "label": "Byalan Deep Cave",
        "key": "byalan-deep-cave"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-016.webp",
        "width": 1024,
        "height": 768,
        "alt": "Byalan Island entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-017.webp",
        "width": 1024,
        "height": 768,
        "alt": "Byalan Island entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-018.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Byalan Island; the mouse pointer indicates the destination map",
        "caption": "Byalan Island · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Izlude and speak with the Sailor at the northeastern ship. On Byalan Island, enter the cave in the middle of the island.",
    "rank": "D",
    "monsterLevels": "31–46",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Izlude.",
      "Izlude, the Satellite City — interact with Sailor (northeast) at 197, 205.",
      "On Byalan Island, enter the cave in the middle of the island."
    ]
  },
  {
    "id": "nobles-bathhouse",
    "name": "Noble’s Bathhouse",
    "kind": "dungeons",
    "places": [
      {
        "label": "Noble Bathhouse",
        "key": "noble-bathhouse"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-019.webp",
        "width": 1024,
        "height": 768,
        "alt": "Noble’s Bathhouse entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-020.webp",
        "width": 1024,
        "height": 768,
        "alt": "Noble’s Bathhouse entrance reference, screenshot 2; original gameplay frame and minimap"
      }
    ],
    "rank": "A",
    "monsterLevels": "42–50",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Comodo.",
      "Inside Comodo — interact with Bath Gatekeeper (northeast) at 183, 192.",
      "Noble Bathhouse."
    ]
  },
  {
    "id": "forest-maze",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Forest Maze.",
      "Prontera Field F1.",
      "Labyrinth Forest."
    ],
    "name": "Forest Maze",
    "kind": "dungeons",
    "places": [{ "label": "Labyrinth Forest", "key": "labyrinth-forest" }],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-021.webp",
        "width": 1024,
        "height": 768,
        "alt": "Forest Maze entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-022.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Forest Maze; the mouse pointer indicates the destination map",
        "caption": "Forest Maze · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "C",
    "monsterLevels": "1–50",
    "notes": "Baphomet Jr. (Level 45) and Baphomet’s Shadow (Level 48) are abundant; Baphomet (MVP) is Level 50. Dangerous for low-level players."
  },
  {
    "id": "orc-dungeon",
    "name": "Orc Dungeon",
    "kind": "dungeons",
    "places": [
      {
        "label": "Orc Dungeon",
        "key": "orc-dungeon"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-023.webp",
        "width": 1024,
        "height": 768,
        "alt": "Orc Dungeon entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-024.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Orc Dungeon; the mouse pointer indicates the destination map",
        "caption": "Orc Dungeon · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "C",
    "monsterLevels": "51–55",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Orc Village.",
      "Geffen Field F10.",
      "Inside Orc Village.",
      "Orc Dungeon F1."
    ]
  },
  {
    "id": "coal-mines",
    "name": "Coal Mines",
    "kind": "dungeons",
    "places": [
      {
        "label": "Mjolnir Dead Pit",
        "key": "mjolnir-dead-pit"
      },
      {
        "label": "Hidden Coal Mines",
        "key": "hidden-coal-mines"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-025.webp",
        "width": 1024,
        "height": 768,
        "alt": "Coal Mines entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-026.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Coal Mines; the mouse pointer indicates the destination map",
        "caption": "Coal Mines · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "E",
    "monsterLevels": "55–60",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Coal Mines.",
      "Mt.Mjolnir North Area.",
      "Mjolnir Dead Pit F1."
    ]
  },
  {
    "id": "turtle-dungeon",
    "name": "Turtle Dungeon",
    "kind": "dungeons",
    "places": [
      {
        "label": "Turtle Island Dungeon",
        "key": "turtle-island-dungeon"
      },
      {
        "label": "Turtle Village",
        "key": "turtle-village"
      },
      {
        "label": "Turtle Palace",
        "key": "turtle-palace"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-027.webp",
        "width": 1024,
        "height": 768,
        "alt": "Turtle Dungeon entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-028.webp",
        "width": 1024,
        "height": 768,
        "alt": "Turtle Dungeon entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-029.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Turtle Dungeon; the mouse pointer indicates the destination map",
        "caption": "Turtle Dungeon · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "A",
    "monsterLevels": "55–60",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Alberta.",
      "Alberta — interact with Captain Gotanblue (east) at 241, 117.",
      "Turtle Island.",
      "Turtle Island Dungeon."
    ]
  },
  {
    "id": "magma-dungeon",
    "name": "Magma Dungeon",
    "kind": "dungeons",
    "places": [
      {
        "label": "Nogg Road",
        "key": "nogg-road"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-030.webp",
        "width": 1024,
        "height": 768,
        "alt": "Magma Dungeon entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-031.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Magma Dungeon; the mouse pointer indicates the destination map",
        "caption": "Magma Dungeon · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Yuno, go south one map, then east. Look for the entrance on the west side, near the middle of the map.",
    "rank": "B",
    "monsterLevels": "55–65",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Juperos. This destination requires Orphanage investment level 60.",
      "El Mes Gorge (Valley of Abyss).",
      "El Mes Plateau.",
      "Enter Nogg Road F1 on the west side of El Mes Plateau, near the middle."
    ]
  },
  {
    "id": "faceworm-nest",
    "name": "Faceworm Nest",
    "kind": "dungeons",
    "places": [
      {
        "label": "Faceworm's Dark Nest",
        "key": "faceworms-dark-nest"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-032.webp",
        "width": 1024,
        "height": 768,
        "alt": "Faceworm Nest entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-033.webp",
        "width": 1024,
        "height": 768,
        "alt": "Faceworm Nest entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-034.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Faceworm Nest; the mouse pointer indicates the destination map",
        "caption": "Faceworm Nest · Follow the mouse pointer to the destination map."
      }
    ],
    "locationId": "faceworm",
    "rank": "A",
    "monsterLevels": "68–70",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Payon Archer Village.",
      "Faceworm's Forest.",
      "Faceworm's Inner Forest.",
      "Faceworm's Den Forest.",
      "Faceworm's Dark Nest."
    ]
  },
  {
    "id": "sunken-temple",
    "name": "Sunken Temple",
    "kind": "dungeons",
    "places": [
      {
        "label": "Payon Sunken Temple",
        "key": "payon-sunken-temple"
      },
      {
        "label": "Payon Hidden Temple",
        "key": "payon-hidden-temple"
      },
      {
        "label": "Payon Hall of Memories",
        "key": "payon-hall-of-memories"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-035.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sunken Temple entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-036.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sunken Temple entrance reference, screenshot 2; original gameplay frame and minimap"
      }
    ],
    "directions": "Travel to Payon. Enter the building on the north side of town.",
    "rank": "B",
    "monsterLevels": "62–70",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Payon.",
      "Enter the building on the north side of Payon.",
      "Payon Sunken Temple."
    ]
  },
  {
    "id": "airship-crash-site",
    "name": "Airship Crash Site",
    "kind": "dungeons",
    "places": [
      {
        "label": "Airship Crash Site",
        "key": "airship-crash-site"
      },
      {
        "label": "Crash Site Cave",
        "key": "crash-site-cave"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-037.webp",
        "width": 1024,
        "height": 768,
        "alt": "Airship Crash Site entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-038.webp",
        "width": 1024,
        "height": 768,
        "alt": "Airship Crash Site entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-039.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Airship Crash Site; the mouse pointer indicates the destination map",
        "caption": "Airship Crash Site · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "S",
    "monsterLevels": "63–70",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Airship Crash Site.",
      "Einbroch Field F10.",
      "Airship Crash Site."
    ]
  },
  {
    "id": "clock-tower",
    "name": "Clock Tower",
    "kind": "dungeons",
    "places": [
      {
        "label": "Clock Tower",
        "key": "clock-tower"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-040.webp",
        "width": 1024,
        "height": 768,
        "alt": "Clock Tower entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-041.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Clock Tower; the mouse pointer indicates the destination map",
        "caption": "Clock Tower · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Aldebaran and enter the Clock Tower in town.",
    "rank": "D",
    "monsterLevels": "65–70",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Aldebaran.",
      "Enter Clock Tower F1 in Aldebaran."
    ]
  },
  {
    "id": "einbroch-mines-einbech",
    "name": "Einbroch Mines (Einbech)",
    "kind": "dungeons",
    "places": [
      {
        "label": "Einbech Mine",
        "key": "einbech-mine"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-042.webp",
        "width": 1024,
        "height": 768,
        "alt": "Einbroch Mines (Einbech) entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-043.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Einbroch Mines (Einbech); the mouse pointer indicates the destination map",
        "caption": "Einbroch Mines (Einbech) · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Einbech, not Einbroch. The mine entrance is on the north side of town.",
    "rank": "D",
    "monsterLevels": "70–75",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Einbech. This destination requires Orphanage Level 50.",
      "Enter Einbech Mine F1 on the north side of Einbech."
    ]
  },
  {
    "id": "toy-factory",
    "name": "Toy Factory",
    "kind": "dungeons",
    "places": [
      {
        "label": "Toy Factory Warehouse",
        "key": "toy-factory-warehouse"
      },
      {
        "label": "Toy Monitoring Room",
        "key": "toy-monitoring-room"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-044.webp",
        "width": 1024,
        "height": 768,
        "alt": "Toy Factory entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-045.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Toy Factory; the mouse pointer indicates the destination map",
        "caption": "Toy Factory · Follow the mouse pointer to the destination map."
      }
    ],
    "locationId": "toy-factory",
    "rank": "E",
    "monsterLevels": "70–75",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Lutie. This destination requires Orphanage Level 50.",
      "Toy Factory Warehouse."
    ]
  },
  {
    "id": "dragon-nest",
    "name": "Dragon Nest",
    "kind": "dungeons",
    "places": [
      {
        "label": "Dragon Nest",
        "key": "dragon-nest"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-046.webp",
        "width": 1024,
        "height": 768,
        "alt": "Dragon Nest entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-047.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Dragon Nest; the mouse pointer indicates the destination map",
        "caption": "Dragon Nest · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Umbala, go south, then east. Look for the entrance in the northeast corner.",
    "rank": "C",
    "monsterLevels": "76–80",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Dragon Nest.",
      "Kalala Swamp.",
      "Enter Dragon Nest F1 in the northeast corner of Kalala Swamp."
    ]
  },
  {
    "id": "regenschirm-lab",
    "name": "Regenschirm Lab",
    "kind": "dungeons",
    "places": [
      {
        "label": "Somatology Laboratory",
        "key": "somatology-laboratory"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-048.webp",
        "width": 1024,
        "height": 768,
        "alt": "Regenschirm Lab entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-049.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Regenschirm Lab; the mouse pointer indicates the destination map",
        "caption": "Regenschirm Lab · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "A",
    "monsterLevels": "50–80",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Lighthalzen.",
      "Lighthalzen, the City-State of Prosperity — interact with Cleaning Captain (north) at 148, 300.",
      "Somatology Laboratory F1."
    ]
  },
  {
    "id": "ayothaya-temple",
    "name": "Ayothaya Temple",
    "kind": "dungeons",
    "places": [
      {
        "label": "Ancient Shrine Maze",
        "key": "ancient-shrine-maze"
      },
      {
        "label": "Inside Ancient Shrine",
        "key": "inside-ancient-shrine"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-050.webp",
        "width": 1024,
        "height": 768,
        "alt": "Ayothaya Temple entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-051.webp",
        "width": 1024,
        "height": 768,
        "alt": "Ayothaya Temple entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-052.webp",
        "width": 1024,
        "height": 768,
        "alt": "Ayothaya Temple entrance reference, screenshot 3; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-053.webp",
        "width": 1024,
        "height": 768,
        "alt": "Ayothaya Temple entrance reference, screenshot 4; original gameplay frame and minimap"
      }
    ],
    "rank": "D",
    "monsterLevels": "87–90",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Alberta.",
      "Alberta — interact with Ayothaya Ferry (east) at 242, 95.",
      "Ayothaya.",
      "Ayothaya Field F1 — interact with Puraim (middle) at 129, 197.",
      "Ayothaya Field F2.",
      "Ancient Shrine Maze."
    ]
  },
  {
    "id": "dewata-volcano",
    "name": "Dewata Volcano",
    "kind": "dungeons",
    "places": [
      {
        "label": "Volcanic Island of Krakatoa",
        "key": "volcanic-island-of-krakatoa"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-054.webp",
        "width": 1024,
        "height": 768,
        "alt": "Dewata Volcano entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-055.webp",
        "width": 1024,
        "height": 768,
        "alt": "Dewata Volcano entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-056.webp",
        "width": 1024,
        "height": 768,
        "alt": "Dewata Volcano entrance reference, screenshot 3; original gameplay frame and minimap"
      }
    ],
    "rank": "D",
    "monsterLevels": "86–90",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Alberta.",
      "Alberta — interact with Dewata Ferry (southeast) at 244, 30.",
      "Beacon Island, Pharos — interact with Zain (southeast) at 299, 83.",
      "Dewata — interact with Gatekeeper of Krakatau (southeast) at 235, 56.",
      "Volcanic Island of Krakatoa."
    ]
  },
  {
    "id": "crystal-caves",
    "name": "Crystal Caves",
    "kind": "dungeons",
    "places": [
      {
        "label": "Crystal Caves",
        "key": "crystal-caves"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-057.webp",
        "width": 1024,
        "height": 768,
        "alt": "Crystal Caves entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-058.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Crystal Caves; the mouse pointer indicates the destination map",
        "caption": "Crystal Caves · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "From Lutie, go south, west, then north to the map before Dicastes Diel. The Crystal Caves entrance is in the southeast corner.",
    "rank": "C",
    "monsterLevels": "90–95",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Lutie. This destination requires Orphanage Level 50.",
      "Go south, west, then north to the map before Dicastes Diel.",
      "Frozen Fields, Southeast — interact with Crystal Cave Sage (southeast) at 241, 79.",
      "Crystal Caves F1."
    ]
  },
  {
    "id": "waterfall-caves",
    "name": "Waterfall Caves",
    "kind": "dungeons",
    "places": [
      {
        "label": "Dark Caves",
        "key": "dark-caves"
      },
      {
        "label": "Dark Caves Waterfall",
        "key": "dark-caves-waterfall"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-059.webp",
        "width": 1024,
        "height": 768,
        "alt": "Waterfall Caves entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-062.webp",
        "width": 1024,
        "height": 768,
        "alt": "Waterfall Caves entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-063.webp",
        "width": 1024,
        "height": 768,
        "alt": "Waterfall Caves entrance reference, screenshot 3; original gameplay frame and minimap"
      }
    ],
    "monsterLevels": "91–95",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Alberta.",
      "Alberta — interact with Optamara Crew (northeast) at 196, 202.",
      "Port Malaya.",
      "Forest.",
      "Dark Caves."
    ]
  },
  {
    "id": "amatsu-dungeon",
    "name": "Amatsu Dungeon",
    "kind": "dungeons",
    "places": [
      {
        "label": "Amatsu Underground Shrine",
        "key": "amatsu-underground-shrine"
      },
      {
        "label": "Tatami Maze",
        "key": "tatami-maze"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-064.webp",
        "width": 1024,
        "height": 768,
        "alt": "Amatsu Dungeon entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-065.webp",
        "width": 1024,
        "height": 768,
        "alt": "Amatsu Dungeon entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-066.webp",
        "width": 1024,
        "height": 768,
        "alt": "Amatsu Dungeon entrance reference, screenshot 3; original gameplay frame and minimap"
      }
    ],
    "locationId": "amatsu-dungeon",
    "rank": "B",
    "monsterLevels": "91–95",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Alberta.",
      "Alberta — interact with Amatsu Ferry (southeast) at 244, 76.",
      "Amatsu, the Land of Destiny.",
      "Amatsu Field.",
      "Tatami Maze.",
      "Battle Field in the Underground Forest.",
      "Amatsu Underground Shrine."
    ]
  },
  {
    "id": "juperos-ruins",
    "name": "Juperos Ruins",
    "kind": "dungeons",
    "places": [
      {
        "label": "The Ruins of Juperos",
        "key": "the-ruins-of-juperos"
      },
      {
        "label": "Center of Juperos",
        "key": "center-of-juperos"
      },
      {
        "label": "Eastern Ruins of Juperos",
        "key": "eastern-ruins-of-juperos"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-067.webp",
        "width": 1024,
        "height": 768,
        "alt": "Juperos Ruins entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-068.webp",
        "width": 1024,
        "height": 768,
        "alt": "Juperos Ruins entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-069.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Juperos Ruins; the mouse pointer indicates the destination map",
        "caption": "Juperos Ruins · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "E",
    "monsterLevels": "91–95",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Juperos. This destination requires Orphanage investment level 60.",
      "El Mes Gorge (Valley of Abyss).",
      "Juperos Dungeon Entrance.",
      "The Ruins of Juperos F1."
    ]
  },
  {
    "id": "abandoned-hospital",
    "name": "Abandoned Hospital",
    "kind": "dungeons",
    "places": [
      {
        "label": "Malaya Hospital",
        "key": "malaya-hospital"
      },
      {
        "label": "Bangungot Hospital",
        "key": "bangungot-hospital"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-060.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abandoned Hospital entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-061.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abandoned Hospital entrance reference, screenshot 2; original gameplay frame and minimap"
      }
    ],
    "rank": "S",
    "monsterLevels": "95–100",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Alberta.",
      "Alberta — interact with Optamara Crew (northeast) at 196, 202.",
      "Port Malaya.",
      "Bangungot Hospital F1.",
      "Malaya Hospital 2F."
    ]
  },
  {
    "id": "yggdrasil-tree",
    "name": "Yggdrasil Tree",
    "kind": "dungeons",
    "places": [
      {
        "label": "Yggdrasil Dungeon",
        "key": "yggdrasil-dungeon"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-070.webp",
        "width": 1024,
        "height": 768,
        "alt": "Yggdrasil Tree entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-071.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Yggdrasil Tree; the mouse pointer indicates the destination map",
        "caption": "Yggdrasil Tree · Follow the mouse pointer to the destination map."
      }
    ],
    "rank": "E",
    "monsterLevels": "1–1",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Umbala.",
      "Yggdrasil Dungeon 1F."
    ]
  },
  {
    "id": "alchemist-fortress",
    "name": "Alchemist Fortress",
    "kind": "dungeons",
    "places": [
      {
        "label": "Alchemist Fortress",
        "key": "alchemist-fortress"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-072.webp",
        "width": 1024,
        "height": 768,
        "alt": "Alchemist Fortress entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-073.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Alchemist Fortress; the mouse pointer indicates the destination map",
        "caption": "Alchemist Fortress · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Prontera, leave west, then go north. The fortress entrance is on the north side of the map.",
    "rank": "D",
    "monsterLevels": "90–100",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Prontera Culvert.",
      "Prontera Field F5.",
      "Mt.Mjolnir South Foothills — interact with Regretful Alchemist (northeast) at 277, 350.",
      "Alchemist Fortress F1."
    ]
  },
  {
    "id": "abyss-lake",
    "name": "Abyss Lake",
    "kind": "dungeons",
    "places": [
      {
        "label": "Abyss Lakes Underground Cave",
        "key": "abyss-lakes-underground-cave"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-074.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abyss Lake entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-075.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abyss Lake entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-076.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Abyss Lake; the mouse pointer indicates the destination map",
        "caption": "Abyss Lake · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Hugel, go south, then west. Interact with the pillar just north of the middle of the map to reach the dungeon entrance.",
    "rank": "B",
    "monsterLevels": "92–100",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Abyss Lake. This destination requires Orphanage investment level 105.",
      "At Hugel Abyss Lake, interact with the pillar just north of the middle to reach the dungeon entrance.",
      "Abyss Lakes Underground Cave F1."
    ]
  },
  {
    "id": "geffenia",
    "name": "Geffenia",
    "kind": "dungeons",
    "places": [
      {
        "label": "Geffenia",
        "key": "geffenia"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-077.webp",
        "width": 1024,
        "height": 768,
        "alt": "Geffenia entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-078.webp",
        "width": 1024,
        "height": 768,
        "alt": "Geffenia entrance reference, screenshot 2; original gameplay frame and minimap"
      }
    ],
    "rank": "C",
    "monsterLevels": "95–100",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Geffen.",
      "Geffen Tower.",
      "Geffenia F2."
    ]
  },
  {
    "id": "thanatos-tower",
    "name": "Thanatos Tower",
    "kind": "dungeons",
    "places": [
      {
        "label": "Thanatos Tower Lower Level",
        "key": "thanatos-tower-lower-level"
      },
      {
        "label": "Thanatos Tower Upper Level",
        "key": "thanatos-tower-upper-level"
      },
      {
        "label": "Thanatos Tower - Unknown Place",
        "key": "thanatos-tower-unknown-place"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-079.webp",
        "width": 1024,
        "height": 768,
        "alt": "Thanatos Tower entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-080.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Thanatos Tower; the mouse pointer indicates the destination map",
        "caption": "Thanatos Tower · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Yuno, go south, east, then north twice. Look for the bonfire and the tower entrance.",
    "rank": "B",
    "monsterLevels": "50–100",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Thanatos Tower. This destination requires Orphanage investment level 60.",
      "Hugel Field F1 — interact with Tower Keeper (middle) at 140, 163.",
      "Thanatos Tower Entrance.",
      "Thanatos Tower Lower Level - F1."
    ]
  },
  {
    "id": "abandoned-kafra-warehouse",
    "name": "Abandoned Kafra Warehouse",
    "kind": "dungeons",
    "places": [
      {
        "label": "Abandoned Kafra Warehouse",
        "key": "abandoned-kafra-warehouse"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-081.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abandoned Kafra Warehouse entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-082.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Abandoned Kafra Warehouse; the mouse pointer indicates the destination map",
        "caption": "Abandoned Kafra Warehouse · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "For the walking route, travel to Aldebaran and go north. Near the middle of the map, speak with the NPC to the left of the bonfire first, then the NPC beside the warehouse door.",
    "rank": "B",
    "monsterLevels": "100–105",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Abandoned Kafra Warehouse.",
      "Border Posts — interact with Kafra Gatekeeper (middle) at 200, 160; first speak with Manager Rina at Border Posts.",
      "Abandoned Kafra Warehouse F1."
    ],
    "requirements": "Speak with Manager Rina in Dicastes Diel before using the corresponding distortion."
  },
  {
    "id": "grey-forest",
    "name": "Grey Forest",
    "kind": "dungeons",
    "places": [
      {
        "label": "Grey Forest",
        "key": "grey-forest"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-083.webp",
        "width": 1024,
        "height": 768,
        "alt": "Grey Forest entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-084.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Grey Forest; the mouse pointer indicates the destination map",
        "caption": "Grey Forest · Follow the mouse pointer to the destination map."
      },
      {
        "src": "images/entrances/dungeons-094.webp",
        "width": 1024,
        "height": 768,
        "alt": "Grey Forest entrance reference, screenshot 3; original gameplay frame and minimap"
      }
    ],
    "directions": "Travel to Nomad Village and go to the southeast side of the map.",
    "monsterLevels": "100–105",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Nomad Village.",
      "From the southeast side of Nomad Village, enter Grey Forest."
    ]
  },
  {
    "id": "sky-garden",
    "alternativeRoute": "From the Orphanage, use Kafra Allysia to warp to Umbala. Go north to Yggdrasil Tree and pass through Yggdrasil Dungeon F1 and F2 to the Trunk. Go north to the Branches and speak with the Sky Garden NPC in the middle section.",
    "name": "Sky Garden",
    "kind": "dungeons",
    "places": [
      {
        "label": "Sky Garden Village",
        "key": "sky-garden-village"
      },
      {
        "label": "Sky Garden Temple",
        "key": "sky-garden-temple"
      },
      {
        "label": "Sky Garden Okolnir",
        "key": "sky-garden-okolnir"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-085.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sky Garden entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-086.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sky Garden entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-087.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sky Garden entrance reference, screenshot 3; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-088.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sky Garden entrance reference, screenshot 4; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-089.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sky Garden entrance reference, screenshot 5; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-090.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sky Garden entrance reference, screenshot 6; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-093.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sky Garden entrance reference, screenshot 7; original gameplay frame and minimap"
      }
    ],
    "locationId": "sky-garden",
    "rank": "A",
    "monsterLevels": "101–105",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Sky Garden. This destination requires Orphanage investment level 105.",
      "Sky Garden Entrance.",
      "Sky Garden Village."
    ]
  },
  {
    "id": "nameless-island-and-cursed-monastery",
    "name": "Nameless Island and Cursed Monastery",
    "kind": "dungeons",
    "places": [
      {
        "label": "Nameless Island Entrance",
        "key": "nameless-island-entrance"
      },
      {
        "label": "Cursed Abbey Dungeon",
        "key": "cursed-abbey-dungeon"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-091.webp",
        "width": 1024,
        "height": 768,
        "alt": "Nameless Island and Cursed Monastery entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-092.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Nameless Island and Cursed Monastery; the mouse pointer indicates the destination map",
        "caption": "Nameless Island and Cursed Monastery · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Veins and go south. Follow the southwest side of the field toward the small island near the middle, then speak with the NPC to travel to the monastery.",
    "rank": "A",
    "monsterLevels": "101–105",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Veins.",
      "Veins Field F7 — interact with Island Ferryman (southwest) at 130, 131.",
      "Nameless Island Entrance."
    ]
  },
  {
    "id": "ice-dungeon",
    "name": "Ice Dungeon",
    "kind": "dungeons",
    "places": [
      {
        "label": "Rachel Ice Cave",
        "key": "rachel-ice-cave"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-095.webp",
        "width": 1024,
        "height": 768,
        "alt": "Ice Dungeon entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-096.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Ice Dungeon; the mouse pointer indicates the destination map",
        "caption": "Ice Dungeon · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Rachel, go east, then north three maps. Look for the entrance on the north side of the map.",
    "rank": "B",
    "monsterLevels": "96–105",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Rachel.",
      "Ida Plane.",
      "Audumra Grass Land.",
      "Rachel Ice Cave F1."
    ]
  },
  {
    "id": "kiel-hyre-factory",
    "name": "Kiel Hyre Factory",
    "kind": "dungeons",
    "places": [
      {
        "label": "Robot Factory",
        "key": "robot-factory"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-097.webp",
        "width": 1024,
        "height": 768,
        "alt": "Kiel Hyre Factory entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-098.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Kiel Hyre Factory; the mouse pointer indicates the destination map",
        "caption": "Kiel Hyre Factory · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Aldebaran, go north twice, then west. The factory entrance is on the west side, near the middle of the map.",
    "rank": "C",
    "monsterLevels": "100–105",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Kiel Hyre Factory. This destination requires Orphanage investment level 60.",
      "Kiel Hyre's Academy.",
      "Enter Robot Factory F1 on the west side of the map, near the middle."
    ]
  },
  {
    "id": "glast-heim",
    "name": "Glast Heim",
    "kind": "dungeons",
    "places": [
      {
        "label": "Glastheim",
        "key": "glastheim"
      },
      {
        "label": "Glastheim Monastery",
        "key": "glastheim-monastery"
      },
      {
        "label": "Glastheim Underground Churchyard",
        "key": "glastheim-underground-churchyard"
      },
      {
        "label": "Glastheim Underground Prison",
        "key": "glastheim-underground-prison"
      },
      {
        "label": "Inside Glastheim Chivalry",
        "key": "inside-glastheim-chivalry"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-099.webp",
        "width": 1024,
        "height": 768,
        "alt": "Glast Heim entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-100.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Glast Heim; the mouse pointer indicates the destination map",
        "caption": "Glast Heim · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Geffen, go west twice, north, then west again. The bonfire is at the monastery entrance.",
    "rank": "C",
    "monsterLevels": "81–110",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Glast Heim.",
      "Glastheim.",
      "Enter Glastheim F1 at the monastery bonfire."
    ]
  },
  {
    "id": "rachel-sanctuary",
    "name": "Rachel Sanctuary",
    "kind": "dungeons",
    "places": [
      {
        "label": "Freya's Sacred Precinct",
        "key": "freyas-sacred-precinct"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-101.webp",
        "width": 1024,
        "height": 768,
        "alt": "Rachel Sanctuary entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-102.webp",
        "width": 1024,
        "height": 768,
        "alt": "Rachel Sanctuary entrance reference, screenshot 2; original gameplay frame and minimap"
      }
    ],
    "locationId": "rachel-sanctuary",
    "rank": "C",
    "monsterLevels": "101–110",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Rachel.",
      "Freya's Grand Temple (Sesilmir) — interact with Rachel Guard (northeast) at 166, 215.",
      "Freya's Sacred Precinct F1."
    ]
  },
  {
    "id": "observatorium-astrologika",
    "name": "Observatorium Astrologika",
    "kind": "dungeons",
    "places": [
      {
        "label": "Observatorium Study",
        "key": "observatorium-study"
      },
      {
        "label": "Observatorium Window",
        "key": "observatorium-window"
      },
      {
        "label": "Observatorium Frozen Tide",
        "key": "observatorium-frozen-tide"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-103.webp",
        "width": 1024,
        "height": 768,
        "alt": "Observatorium Astrologika entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-104.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Observatorium Astrologika; the mouse pointer indicates the destination map",
        "caption": "Observatorium Astrologika · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Geffen, go north, then west. Look for the entrance on the southeast side of the map.",
    "monsterLevels": "116–120",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Geffen.",
      "Geffen Field F4.",
      "Geffen Field F5.",
      "Observatorium Study."
    ]
  },
  {
    "id": "odin-shrine",
    "name": "Odin Shrine",
    "kind": "dungeons",
    "places": [
      {
        "label": "Odin Shrine",
        "key": "odin-shrine"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-105.webp",
        "width": 1024,
        "height": 768,
        "alt": "Odin Shrine entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "monsterLevels": "106–115",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Hugel.",
      "Hugel, the Quaint Garden Village — interact with Hugel Ferry (east) at 209, 109.",
      "Odin Shrine F1."
    ]
  },
  {
    "id": "verus-lost-sectors",
    "name": "Verus Lost Sectors",
    "kind": "dungeons",
    "places": [
      {
        "label": "Verus - Central Plaza",
        "key": "verus-central-plaza"
      },
      {
        "label": "Laboratory-OPTATIO",
        "key": "laboratory-optatio"
      },
      {
        "label": "Research Building-WISH",
        "key": "research-building-wish"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-106.webp",
        "width": 1024,
        "height": 768,
        "alt": "Verus Lost Sectors entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-107.webp",
        "width": 1024,
        "height": 768,
        "alt": "Verus Lost Sectors entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-108.webp",
        "width": 1024,
        "height": 768,
        "alt": "Verus Lost Sectors entrance reference, screenshot 3; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-109.webp",
        "width": 1024,
        "height": 768,
        "alt": "Verus Lost Sectors entrance reference, screenshot 4; original gameplay frame and minimap"
      }
    ],
    "monsterLevels": "106–115",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Abandoned Kafra Warehouse.",
      "Border Posts.",
      "Schwartzvald Guards Camp.",
      "Yuno Field — interact with Operator (southwest) at 98, 121.",
      "Verus - Excavation Site.",
      "Verus - Central Plaza."
    ]
  },
  {
    "id": "opera-house",
    "name": "Opera House",
    "kind": "dungeons",
    "places": [
      {
        "label": "nif_dun01",
        "key": "nif-dun01"
      },
      {
        "label": "nif_dun02",
        "key": "nif-dun02"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-110.webp",
        "width": 1024,
        "height": 768,
        "alt": "Opera House entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "In Nifflheim, look a little southwest of the arrival point for the Opera House entrance.",
    "rank": "A",
    "monsterLevels": "115–120",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Niflheim.",
      "Enter the Opera House (nif_dun01) a little southwest of the Niflheim arrival point."
    ]
  },
  {
    "id": "thor-volcano",
    "name": "Thor Volcano",
    "kind": "dungeons",
    "places": [
      {
        "label": "Thor Volcano Dungeon",
        "key": "thor-volcano-dungeon"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-111.webp",
        "width": 1024,
        "height": 768,
        "alt": "Thor Volcano entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-112.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Thor Volcano; the mouse pointer indicates the destination map",
        "caption": "Thor Volcano · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "An alternative route starts in Veins: go north, west, then north. The entrance is on the north side of the map.",
    "rank": "A",
    "monsterLevels": "120–125",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Veins.",
      "From Veins, go north to Veins Field F5.",
      "Go west, then north to Veins Field F3.",
      "Enter Thor Volcano Dungeon on the north side of the map."
    ]
  },
  {
    "id": "varmundt-mansion-and-library",
    "alternativeRoute": "With the Bifrost Mirror unlocked, use the Orphanage distortion orb and leave through the Pyramid-side passage. Enter the building in the upper-right, follow its portals, and interact with the dresser to reach the library.",
    "name": "Varmundt Mansion and Library",
    "kind": "dungeons",
    "places": [
      {
        "label": "Mansion Garden",
        "key": "mansion-garden"
      },
      {
        "label": "Mansion Hidden Garden",
        "key": "mansion-hidden-garden"
      },
      {
        "label": "Mansion Library",
        "key": "mansion-library"
      },
      {
        "label": "Mansion Lost Area",
        "key": "mansion-lost-area"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-113.webp",
        "width": 1024,
        "height": 768,
        "alt": "Varmundt Mansion and Library entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-114.webp",
        "width": 1024,
        "height": 768,
        "alt": "Varmundt Mansion and Library entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-115.webp",
        "width": 1024,
        "height": 768,
        "alt": "Varmundt Mansion and Library entrance reference, screenshot 3; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-116.webp",
        "width": 1024,
        "height": 768,
        "alt": "Varmundt Mansion and Library entrance reference, screenshot 4; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-117.webp",
        "width": 1024,
        "height": 768,
        "alt": "Varmundt Mansion and Library entrance reference, screenshot 5; original gameplay frame and minimap"
      }
    ],
    "locationId": "varmundt-mansion",
    "rank": "B",
    "monsterLevels": "131–135",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Lighthalzen.",
      "Lighthalzen, the City-State of Prosperity — interact with Airport Staff (southeast) at 305, 76; pay 5000 Zeny.",
      "Varmundt's Mansion.",
      "Mansion Garden: enter the mansion building, follow its portals, and interact with the dresser to reach the library."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion."
  },
  {
    "id": "death-castle",
    "name": "Death Castle",
    "kind": "dungeons",
    "places": [
      {
        "label": "Death Castle Entrance",
        "key": "death-castle-entrance"
      },
      {
        "label": "Death Castle Grandhall",
        "key": "death-castle-grandhall"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-118.webp",
        "width": 1024,
        "height": 768,
        "alt": "Death Castle entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-119.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Death Castle; the mouse pointer indicates the destination map",
        "caption": "Death Castle · Follow the mouse pointer to the destination map."
      }
    ],
    "locationId": "death-castle",
    "rank": "B",
    "monsterLevels": "135–140",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Niflheim.",
      "Valley of Niflheim.",
      "Skellington, a Solitary Village in Niflheim.",
      "At Death Castle Entrance, speak with Strange Soul at nif_cas01 30, 125 to enter the Grandhall."
    ]
  },
  {
    "id": "regenschutz-secret-laboratory",
    "name": "Regenschutz Secret Laboratory",
    "kind": "dungeons",
    "places": [
      {
        "label": "Regenschutz Secret Laboratory",
        "key": "regenschutz-secret-laboratory"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-120.webp",
        "width": 1024,
        "height": 768,
        "alt": "Regenschutz Secret Laboratory entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/dungeons-121.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Regenschutz Secret Laboratory; the mouse pointer indicates the destination map",
        "caption": "Regenschutz Secret Laboratory · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Lighthalzen and go north twice. Interact with the object beside the bonfire on the south side of the map.",
    "rank": "S",
    "monsterLevels": "140–142",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Lighthalzen.",
      "Lighthalzen Field F1.",
      "Fortu Luna — interact with Strange Switch (southeast) at 270, 74.",
      "Regenschutz Secret Laboratory F1."
    ]
  },
  {
    "id": "lost-tomb-of-the-king",
    "name": "Lost Tomb of the King",
    "kind": "dungeons",
    "places": [
      {
        "label": "Lost Island Cave",
        "key": "lost-island-cave"
      },
      {
        "label": "Lost island Tomb",
        "key": "lost-island-tomb"
      },
      {
        "label": "Lost Island Colosseum",
        "key": "lost-island-colosseum"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/dungeons-122.webp",
        "width": 1024,
        "height": 768,
        "alt": "Lost Tomb of the King entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "rank": "S",
    "monsterLevels": "140–145",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Alberta.",
      "Alberta — interact with Brave Sailor (southeast) at 205, 74.",
      "Sinking Endless Tower.",
      "Lost Island Cave."
    ]
  },
  {
    "id": "old-payon",
    "name": "Old Payon",
    "kind": "distortions",
    "places": [],
    "screenshots": [
      {
        "src": "images/entrances/distortions-001.webp",
        "width": 1024,
        "height": 768,
        "alt": "Old Payon entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Enter Sunken Temple and continue to its last floor to find the Old Payon distortion."
  },
  {
    "id": "old-monastery",
    "name": "Old Monastery",
    "kind": "distortions",
    "places": [],
    "screenshots": [
      {
        "src": "images/entrances/distortions-002.webp",
        "width": 1024,
        "height": 768,
        "alt": "Old Monastery entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Look for the Old Monastery distortion inside Nameless Island."
  },
  {
    "id": "nightmare-clock-tower",
    "name": "Nightmare Clock Tower",
    "kind": "distortions",
    "places": [
      {
        "label": "Clock Tower",
        "key": "clock-tower-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-003.webp",
        "width": 1024,
        "height": 768,
        "alt": "Nightmare Clock Tower entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Enter Clock Tower F1 in Aldebaran. Look for the Clock Distortion in the southwest corner.",
    "rank": "B",
    "monsterLevels": "85–90",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Aldebaran.",
      "Border City Aldebaran.",
      "Clock Tower F1 — interact with Clock Distortion (southwest) at 53, 51; first speak with Master of Vali at Inside Dicastes Diel.",
      "Clock Tower B3."
    ],
    "requirements": "Speak with Master of Vali in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vali"
  },
  {
    "id": "lokis-tomb",
    "name": "Loki’s Tomb",
    "kind": "distortions",
    "places": [
      {
        "label": "Loki's Maze",
        "key": "lokis-maze-distortion"
      },
      {
        "label": "Loki's Tomb",
        "key": "lokis-tomb-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-004.webp",
        "width": 1024,
        "height": 768,
        "alt": "Loki’s Tomb entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-005.webp",
        "width": 1024,
        "height": 768,
        "alt": "Loki’s Tomb entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-006.webp",
        "width": 1024,
        "height": 768,
        "alt": "Loki’s Tomb entrance reference, screenshot 3; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-007.webp",
        "width": 1024,
        "height": 768,
        "alt": "Loki’s Tomb entrance reference, screenshot 4; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-008.webp",
        "width": 1024,
        "height": 768,
        "alt": "Loki’s Tomb entrance reference, screenshot 5; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-009.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Loki’s Tomb; the mouse pointer indicates the destination map",
        "caption": "Loki’s Tomb · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "From Morroc, go south twice and east twice to the Assassin’s Guild near the middle of the map. Speak with the Assassin Guardian. Inside the guild, take the first portal on the right, climb the stairs, take the left corridor, then go south and east to find the Assassin. After paying the entrance requirement, you arrive beside the Desert Distortion.",
    "rank": "S",
    "monsterLevels": "50–100",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Morroc's Guild.",
      "Sograt Desert F16 — interact with Assassin Guardian (west) at 127, 183.",
      "Assassin's Guild Tomb of Loki — interact with Desert Distortion (east) at 186, 72; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Loki's Maze."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion.",
    "extraRequirements": [
      "Give 1 Enriched Oridecon to the Assassin to permanently unlock the entrance to Loki’s Maze. You only pay once."
    ],
    "mirrorEye": "Vidar"
  },
  {
    "id": "einbroch-deadlands",
    "name": "Einbroch Deadlands",
    "kind": "distortions",
    "places": [
      {
        "label": "Einbroch Deadlands",
        "key": "einbroch-deadlands-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-010.webp",
        "width": 1024,
        "height": 768,
        "alt": "Einbroch Deadlands entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-011.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Einbroch Deadlands; the mouse pointer indicates the destination map",
        "caption": "Einbroch Deadlands · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Einbroch and go north. Look for the distortion orb on the east side of the field.",
    "rank": "B",
    "monsterLevels": "85–100",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Einbroch.",
      "Einbroch, the City of Steel.",
      "Einbroch Field F4 — interact with Deadlands Distortion (southeast) at 362, 111; first speak with Master of Vali at Inside Dicastes Diel.",
      "Einbroch Deadlands F1."
    ],
    "requirements": "Speak with Master of Vali in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vali"
  },
  {
    "id": "geffenia-antitower",
    "name": "Geffenia Antitower",
    "kind": "distortions",
    "places": [
      {
        "label": "Geffenia Antitower",
        "key": "geffenia-antitower"
      },
      {
        "label": "Geffenia, City of the Mystic",
        "key": "geffenia-city-of-the-mystic"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-012.webp",
        "width": 1024,
        "height": 768,
        "alt": "Geffenia Antitower entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Inside Geffenia, take the bottom warp from the arrival floor (F2) to reach F1. Look for the distortion orb on the small bridge west of the middle of the map.",
    "rank": "B",
    "monsterLevels": "101–105",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Geffen.",
      "Geffen, the Magic City.",
      "Geffen Tower.",
      "Geffenia F2.",
      "Geffenia F1 — interact with Geffen Distortion (west) at 59, 169; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Geffenia Antitower F4.",
      "Geffenia Antitower F3."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion.",
    "notes": "The world guide classifies this as a distortion, although the database labels its place records as dungeons.",
    "mirrorEye": "Vidar"
  },
  {
    "id": "morroc-town",
    "name": "Morroc Town",
    "kind": "distortions",
    "places": [
      {
        "label": "Morroc Town",
        "key": "morroc-town-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-013.webp",
        "width": 1024,
        "height": 768,
        "alt": "Morroc Town entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Travel to Morroc. The Morroc Distortion is in the northwest corner.",
    "rank": "B",
    "monsterLevels": "93–100",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Morroc.",
      "Morocc Town — interact with Morroc Distortion (northwest) at 24, 283; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Morroc Town."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vidar"
  },
  {
    "id": "morroc-castle-and-ritual-basement",
    "name": "Morroc Castle and Ritual Basement",
    "kind": "distortions",
    "places": [
      {
        "label": "Morroc Castle",
        "key": "morroc-castle-distortion"
      },
      {
        "label": "Morroc Ritual Basement",
        "key": "morroc-ritual-basement-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-014.webp",
        "width": 1024,
        "height": 768,
        "alt": "Morroc Castle and Ritual Basement entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Enter the Morroc Town distortion and head to the middle of the map for the Castle Distortion.",
    "rank": "A",
    "monsterLevels": "101–105",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Morroc.",
      "Morocc Town — interact with Morroc Distortion (northwest) at 24, 283; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Morroc Town — interact with Castle Distortion (middle) at 159, 180; first speak with Master of Thor at Inside Dicastes Diel.",
      "Morroc Castle."
    ],
    "requirements": "Speak with Master of Vidar, then Master of Thor in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Thor"
  },
  {
    "id": "kiel-hyre-university",
    "name": "Kiel Hyre University",
    "kind": "distortions",
    "places": [
      {
        "label": "Kiel Hyre University",
        "key": "kiel-hyre-university-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-015.webp",
        "width": 1024,
        "height": 768,
        "alt": "Kiel Hyre University entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-016.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Kiel Hyre University; the mouse pointer indicates the destination map",
        "caption": "Kiel Hyre University · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Travel to Aldebaran, go north twice, then west. The university distortion entrance is near the middle of the map.",
    "rank": "B",
    "monsterLevels": "106–110",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Kiel Hyre Factory. This destination requires Orphanage investment level 60.",
      "Kiel Hyre's Academy — interact with University Distortion (middle) at 152, 190; first speak with Master of Thor at Inside Dicastes Diel.",
      "Kiel Hyre University F1."
    ],
    "requirements": "Speak with Master of Thor in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Thor"
  },
  {
    "id": "abyss-lakes-underground-hideout",
    "name": "Abyss Lakes Underground Hideout",
    "kind": "distortions",
    "places": [
      {
        "label": "Abyss Lakes Underground Cave",
        "key": "abyss-lakes-underground-cave-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-017.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abyss Lakes Underground Hideout entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Continue to the last floor of Abyss Lake and look for the Decay Distortion.",
    "rank": "A",
    "monsterLevels": "107–115",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Abyss Lake. This destination requires Orphanage investment level 105.",
      "Hugel Abyss Lake.",
      "Abyss Lakes Underground Cave F1.",
      "Abyss Lakes Underground Cave F2.",
      "Abyss Lakes Underground Cave F3 — interact with Decay Distortion (middle) at 98, 103; first speak with Master of Balder at Inside Dicastes Diel.",
      "Abyss Lakes Underground Cave F4."
    ],
    "requirements": "Speak with Master of Balder in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Balder"
  },
  {
    "id": "ancient-shrine-of-byalan",
    "name": "Ancient Shrine of Byalan",
    "kind": "distortions",
    "places": [
      {
        "label": "Ancient Shrine of Byalan",
        "key": "ancient-shrine-of-byalan-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-018.webp",
        "width": 1024,
        "height": 768,
        "alt": "Ancient Shrine of Byalan entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Continue to the last floor of Byalan Dungeon and look for the Sea Distortion.",
    "rank": "A",
    "monsterLevels": "106–115",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Izlude.",
      "Izlude, the Satellite City — interact with Sailor (northeast) at 197, 205.",
      "Byalan Island.",
      "Byalan Upper Cave.",
      "Byalan Lower Cave.",
      "Byalan Deep Cave — interact with Sea Distortion (northeast) at 245, 269; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Ancient Shrine of Byalan."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vidar"
  },
  {
    "id": "old-glast-heim",
    "name": "Old Glast Heim",
    "kind": "distortions",
    "places": [
      {
        "label": "Old Glast Heim",
        "key": "old-glast-heim-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-019.webp",
        "width": 1024,
        "height": 768,
        "alt": "Old Glast Heim entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-020.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Old Glast Heim; the mouse pointer indicates the destination map",
        "caption": "Old Glast Heim · Follow the mouse pointer to the destination map."
      }
    ],
    "locationId": "old-glast-heim",
    "rank": "A",
    "monsterLevels": "111–120",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Glast Heim.",
      "Glastheim — interact with Glast Heim Distortion (north) at 200, 349; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Old Glast Heim F1."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vidar"
  },
  {
    "id": "invaded-prontera",
    "name": "Invaded Prontera",
    "kind": "distortions",
    "places": [
      {
        "label": "Invaded Prontera",
        "key": "invaded-prontera-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-021.webp",
        "width": 1024,
        "height": 768,
        "alt": "Invaded Prontera entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Look for the City Distortion inside Prontera.",
    "rank": "B",
    "monsterLevels": "111–120",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Prontera.",
      "Prontera, Capital of Rune Midgarts — interact with City Distortion (southwest) at 53, 118; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Invaded Prontera."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vidar"
  },
  {
    "id": "horror-toy-factory",
    "name": "Horror Toy Factory",
    "kind": "distortions",
    "places": [
      {
        "label": "Nightmare Toy Factory",
        "key": "nightmare-toy-factory-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-022.webp",
        "width": 1024,
        "height": 768,
        "alt": "Horror Toy Factory entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Enter Toy Factory and continue to the second floor. Look for the Factory Distortion near the middle of the map.",
    "rank": "B",
    "monsterLevels": "121–125",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Lutie. This destination requires Orphanage Level 50.",
      "Lutie, the Snow Village.",
      "Toy Factory Warehouse.",
      "Toy Monitoring Room — interact with Factory Distortion (middle) at 134, 134; first speak with Master of Vali at Inside Dicastes Diel.",
      "Nightmare Toy Factory F1."
    ],
    "requirements": "Speak with Master of Vali in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vali"
  },
  {
    "id": "odin-temple",
    "name": "Odin Temple",
    "kind": "distortions",
    "places": [
      {
        "label": "Odin Shrine Past",
        "key": "odin-shrine-past-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-023.webp",
        "width": 1024,
        "height": 768,
        "alt": "Odin Temple entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Continue to Odin Shrine F3. Interact with the distortion sphere on the island near the middle of the map.",
    "rank": "A",
    "monsterLevels": "121–125",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Hugel.",
      "Hugel, the Quaint Garden Village — interact with Hugel Ferry (east) at 209, 109.",
      "Odin Shrine F1.",
      "Odin Shrine F2.",
      "Odin Shrine F3 — interact with Temple Distortion (middle) at 189, 143; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Odin Shrine Past."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vidar"
  },
  {
    "id": "abyss-glast-heim",
    "name": "Abyss Glast Heim",
    "kind": "distortions",
    "places": [
      {
        "label": "Abyss Glastheim Castle",
        "key": "abyss-glastheim-castle-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-024.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abyss Glast Heim entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-041.webp",
        "width": 1920,
        "height": 1080,
        "alt": "Abyss Glast Heim entrance reference, screenshot 2; original gameplay frame and minimap"
      }
    ],
    "directions": "Inside Old Glast Heim F1, enter the warp in front of the fountain in the northeast part of the map. Go left and interact with the Abyssal Distortion.",
    "rank": "A",
    "monsterLevels": "117–130",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Glast Heim.",
      "Glastheim — interact with Glast Heim Distortion (north) at 200, 349; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Old Glast Heim F1 — interact with Abyssal Distortion (west) at 76, 169; first speak with Master of Thor at Inside Dicastes Diel.",
      "Abyss Glastheim Castle F1."
    ],
    "requirements": "Speak with Master of Vidar, then Master of Thor in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Thor"
  },
  {
    "id": "ancient-verus-laboratory",
    "name": "Ancient Verus Laboratory",
    "kind": "distortions",
    "places": [
      {
        "label": "Charleston Factory",
        "key": "charleston-factory-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-025.webp",
        "width": 1024,
        "height": 768,
        "alt": "Ancient Verus Laboratory entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-026.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Ancient Verus Laboratory; the mouse pointer indicates the destination map",
        "caption": "Ancient Verus Laboratory · Follow the mouse pointer to the destination map."
      },
      {
        "src": "images/entrances/distortions-027.webp",
        "width": 1024,
        "height": 768,
        "alt": "Ancient Verus Laboratory entrance reference, screenshot 3; original gameplay frame and minimap"
      }
    ],
    "directions": "Look for the Laboratory Distortion inside the Verus fields. The current database destination is Charleston Factory.",
    "rank": "B",
    "monsterLevels": "126–130",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Abandoned Kafra Warehouse.",
      "Border Posts.",
      "Schwartzvald Guards Camp.",
      "Yuno Field — interact with Operator (southwest) at 98, 121.",
      "Verus - Excavation Site.",
      "Verus - Central Plaza.",
      "Laboratory-OPTATIO — interact with Laboratory Distortion (middle) at 149, 154; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Charleston Factory."
    ],
    "requirements": "Speak with Master of Vidar in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Vidar"
  },
  {
    "id": "field-of-fire",
    "name": "Field of Fire",
    "kind": "distortions",
    "places": [],
    "screenshots": [
      {
        "src": "images/entrances/distortions-028.webp",
        "width": 1024,
        "height": 768,
        "alt": "Field of Fire entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-029.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Field of Fire; the mouse pointer indicates the destination map",
        "caption": "Field of Fire · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "Look for the Field of Fire distortion outside Orc Dungeon."
  },
  {
    "id": "divine-temple-of-freya",
    "name": "Divine Temple of Freya",
    "kind": "distortions",
    "places": [
      {
        "label": "Rachel Hidden Temple",
        "key": "rachel-hidden-temple-distortion"
      },
      {
        "label": "Rachel Freya Chambers",
        "key": "rachel-freya-chambers-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-030.webp",
        "width": 1024,
        "height": 768,
        "alt": "Divine Temple of Freya entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Enter Rachel Sanctuary and look for the Rachel Distortion on the first floor.",
    "rank": "S",
    "monsterLevels": "140–144",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Rachel.",
      "Rachel, Capital of Arunafeltz.",
      "Freya's Grand Temple (Sesilmir) — interact with Rachel Guard (northeast) at 166, 215.",
      "Freya's Sacred Precinct F1 — interact with Rachel Distortion (middle) at 139, 145; first speak with Master of Balder at Inside Dicastes Diel.",
      "Rachel Hidden Temple F1."
    ],
    "requirements": "Speak with Master of Balder in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Balder"
  },
  {
    "id": "rachel-nightmare",
    "name": "Rachel Nightmare",
    "kind": "distortions",
    "places": [
      {
        "label": "Rachel SS",
        "key": "rachel-ss-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-031.webp",
        "width": 1024,
        "height": 768,
        "alt": "Rachel Nightmare entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Look for the Nightmare Distortion in southwest Rachel.",
    "rank": "SS",
    "monsterLevels": "131–140",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Rachel.",
      "Rachel, Capital of Arunafeltz — interact with Nightmare Distortion (southwest) at 37, 79; first speak with Master of Balder at Inside Dicastes Diel.",
      "Rachel SS."
    ],
    "requirements": "Speak with Master of Balder in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Balder"
  },
  {
    "id": "sograt-desert-and-dimensional-rift",
    "name": "Sograt Desert and Dimensional Rift",
    "kind": "distortions",
    "places": [
      {
        "label": "Sograt Desert - Dimensional Rift",
        "key": "sograt-desert-dimensional-rift-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-032.webp",
        "width": 1024,
        "height": 768,
        "alt": "Sograt Desert and Dimensional Rift entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Enter the Morroc Town distortion and go to the south side of the map. Interact with the Gorge Distortion.",
    "rank": "S",
    "monsterLevels": "146–150",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Morroc.",
      "Morocc Town — interact with Morroc Distortion (northwest) at 24, 283; first speak with Master of Vidar at Inside Dicastes Diel.",
      "Morroc Town — interact with Gorge Distortion (south) at 159, 17; first speak with Master of Balder at Inside Dicastes Diel.",
      "Sograt Desert - Dimensional Rift."
    ],
    "requirements": "Speak with Master of Vidar, then Master of Balder in Dicastes Diel before using the corresponding distortion.",
    "mirrorEye": "Balder"
  },
  {
    "id": "thanatos-paradise",
    "name": "Thanatos Paradise",
    "kind": "distortions",
    "places": [
      {
        "label": "Thanatos Paradise",
        "key": "thanatos-paradise-distortion"
      },
      {
        "label": "Thanatos Paradise Summit",
        "key": "thanatos-paradise-summit-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-033.webp",
        "width": 1024,
        "height": 768,
        "alt": "Thanatos Paradise entrance reference, screenshot 1; original gameplay frame and minimap"
      }
    ],
    "directions": "Enter Thanatos Tower and look for the Paradise Distortion on the first floor.",
    "rank": "S",
    "monsterLevels": "146–150",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Thanatos Tower. This destination requires Orphanage investment level 60.",
      "Hugel Field F1 — interact with Tower Keeper (middle) at 140, 163.",
      "Thanatos Tower Entrance.",
      "Thanatos Tower Lower Level - F1 — interact with Paradise Distortion (middle) at 149, 105; first speak with Master of Balder at Inside Dicastes Diel.",
      "Thanatos Paradise F1."
    ],
    "requirements": "Speak with Master of Balder in Dicastes Diel before using the corresponding distortion.",
    "notes": "The current route passes through Thanatos Tower Lower Level and Upper Level before the Paradise Distortion. The entrance spreadsheet labels this as the first floor; follow the current route below.",
    "mirrorEye": "Balder"
  },
  {
    "id": "jormungands-lair",
    "name": "Jormungand’s Lair",
    "kind": "distortions",
    "places": [
      {
        "label": "Jormungand's Lair",
        "key": "jormungands-lair-distortion"
      },
      {
        "label": "Hall of the Last God",
        "key": "hall-of-the-last-god-distortion"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-034.webp",
        "width": 1024,
        "height": 768,
        "alt": "Jormungand’s Lair entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-035.webp",
        "width": 1024,
        "height": 768,
        "alt": "World map reference for Jormungand’s Lair; the mouse pointer indicates the destination map",
        "caption": "Jormungand’s Lair · Follow the mouse pointer to the destination map."
      }
    ],
    "directions": "From Nomad Village, go east, then south. Look for the Lost Distortion in the northeast corner of Grey Forest.",
    "rank": "S",
    "monsterLevels": "150–160",
    "route": [
      "From the Orphanage, speak with Kafra Allysia and choose Nomad Village.",
      "Nomad Village.",
      "Grey Forest — interact with Lost Distortion (northeast) at 353, 298; first speak with Master of Balder at Inside Dicastes Diel.",
      "Jormungand's Lair F1."
    ],
    "requirements": "Speak with Master of Balder in Dicastes Diel before using the corresponding distortion.",
    "notes": "The entrance spreadsheet lists a Base Level 130 requirement. Current monsters in the lair are Lv. 150; Hall of the Last God is Lv. 155–160.",
    "extraRequirements": [
      "Base Level 130 is listed as an entrance requirement in the original entrance sheet."
    ],
    "mirrorEye": "Balder"
  },
  {
    "id": "abandoned-castle",
    "name": "Abandoned Castle",
    "kind": "distortions",
    "places": [
      {
        "label": "Ymir's War Castle",
        "key": "ymirs-war-castle"
      }
    ],
    "screenshots": [
      {
        "src": "images/entrances/distortions-036.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abandoned Castle entrance reference, screenshot 1; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-037.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abandoned Castle entrance reference, screenshot 2; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-038.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abandoned Castle entrance reference, screenshot 3; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-039.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abandoned Castle entrance reference, screenshot 4; original gameplay frame and minimap"
      },
      {
        "src": "images/entrances/distortions-040.webp",
        "width": 1024,
        "height": 768,
        "alt": "Abandoned Castle entrance reference, screenshot 5; original gameplay frame and minimap"
      }
    ],
    "directions": "Travel north from Prontera into its castle. At the first junction, go right, then north twice. Look for the distortion orb near the middle of the map.",
    "rank": "A / S",
    "monsterLevels": "145–149",
    "route": [
      "From the Orphanage, speak with Skia Nerius and choose Judge Headquarters.",
      "Prontera Central Palace.",
      "Valkyrie Realm — interact with War Distortion (south) at 160, 97; first speak with Master of Balder at Inside Dicastes Diel.",
      "Ymir's War Castle."
    ],
    "requirements": "Speak with Master of Balder in Dicastes Diel before using the corresponding distortion.",
    "notes": "The current database calls this area Ymir’s War Castle. The entrance screenshot shows Rank A, while the preserved world table lists Rank S.",
    "mirrorEye": "Balder"
  },
  {
    "id": "mad-drinker",
    "name": "Mad Drinker",
    "kind": "distortions",
    "locationId": "mad-drinker",
    "monsterLevels": "125–135",
    "places": [
      {
        "label": "Mad Drinker",
        "key": "mad-drinker-distortion"
      }
    ],
    "screenshots": [],
    "requirements": "Speak with Master of Balder in Dicastes Diel before entering the distortion.",
    "mirrorEye": "Balder"
  }
];

export const dicastesDielAccess = 'From the Orphanage, use Kafra Allysia to travel to Hugel. Speak with the Hugel Ferry on the east side of town and choose Snow Fields. From the arrival map, take the east portal, then head north twice to reach Dicastes Diel.';

// Bifrost quest routes reviewed against Refuge Guides and Bahadur's illustrated walkthrough.
export const bifrostQuestLocations = {
  shard: {
    map: 'moc_fild14',
    access: 'From the Orphanage, use Kafra Allysia to travel to Morroc. Leave south, then follow the eastward route through moc_fild12, moc_fild11, and moc_fild15 to reach moc_fild14. Look for the tomb on the east side of the map.',
  },
  vidar: {
    map: 'pay_fild06',
    access: 'From the Orphanage, use Kafra Allysia to travel to Alberta. Leave through the northwest portal into pay_fild03, then take the south portal to pay_fild06. Find the tomb on the west side of the field.',
  },
  vali: {
    map: 'hu_fild06',
    access: 'From the Orphanage, use Kafra Allysia to travel to Hugel. Leave through the south portal to hu_fild06. The tomb is behind a house near the middle of the map.',
  },
  thor: {
    map: 'ra_fild03',
    access: 'From the Orphanage, use Kafra Allysia to travel to Prontera, then use Prontera’s Kafra to reach Rachel. Leave Rachel east into ra_fild12, go north to ra_fild08, north again to ra_fild04, then west to ra_fild03. Find the tomb near the middle of the map.',
  },
  balder: {
    map: 'niflheim',
    access: 'From the Orphanage, use Kafra Allysia to travel to Umbala. Use Umbala’s Kafra to reach Nifflheim. Find the tomb in the northeast part of town.',
  },
  study: {
    access: `${dicastesDielAccess} Cross the bridge and enter the large palace building.`,
  },
};

export const bloomingRoseSandalsLocation = {
  npc: 'Rose Sage',
  area: 'Varmundt’s Mansion — Interior',
  access: 'From the Orphanage, use Kafra Allysia to travel to Lighthalzen, then take the airship to Varmundt’s Mansion. Enter the mansion and look for Rose Sage in the northeast part of the interior.',
  mirrorAccess: 'With the Bifrost Mirror unlocked, use the Orphanage Distortion orb in the hallway near Merchant Guild to reach Varmundt’s Mansion.',
};

// Pitaya’s Tome walkthrough and Refuge’s Varmundt crafting reference.
export const celestialTomeLocations = {
  crafting: 'Enter the cottage on the south side of Varmundt’s Mansion. The sages inside craft Inferno Tome, Purgatorio Tome, and Paradiso Tome.',
  payon: 'In Old Payon (Payon Distortion), speak with Chaos and Iris.',
  coffin: 'At Death’s Castle, interact with the Coffin to enter a small room.',
  iris: 'Return to the Orphanage and speak with Iris in the Blacksmith Room.',
};

// Observer coordinates: Pitaya’s Sun Headgear Guide; recipes checked against Refuge item records.
export const sunHeadgearObservers = [
  {
    "name": "Apus",
    "map": "cmd_fild07",
    "coordinates": "55,268",
    "area": "Beacon Island Pharos",
    "moonId": 31214,
    "sunId": 31215,
    "imageKey": "apus"
  },
  {
    "name": "Auriga",
    "map": "odin_tem02",
    "coordinates": "307,74",
    "area": "Odin Shrine F2",
    "moonId": 31218,
    "sunId": 31219,
    "imageKey": "auriga"
  },
  {
    "name": "Caelum",
    "map": "moscovia",
    "coordinates": "113,119",
    "area": "Moscovia",
    "moonId": 31212,
    "sunId": 31213,
    "imageKey": "caelum"
  },
  {
    "name": "Cygnus",
    "map": "lhz_fild01",
    "coordinates": "256,243",
    "area": "Lighthalzen Field F1",
    "moonId": 31216,
    "sunId": 31217,
    "imageKey": "cygnus"
  },
  {
    "name": "Fornax",
    "map": "ma_fild02",
    "coordinates": "247,318",
    "area": "Forest",
    "moonId": 31226,
    "sunId": 31227,
    "imageKey": "fornax"
  },
  {
    "name": "Lacerta",
    "map": "ra_fild12",
    "coordinates": "363,123",
    "area": "Ida Plane",
    "moonId": 31222,
    "sunId": 31223,
    "imageKey": "lacerta"
  },
  {
    "name": "Orion",
    "map": "ayothaya",
    "coordinates": "112,253",
    "area": "Ayothaya",
    "moonId": 31210,
    "sunId": 31211,
    "imageKey": "orion"
  },
  {
    "name": "Scutum",
    "map": "gef_fild06",
    "coordinates": "64,159",
    "area": "Geffen Field F6",
    "moonId": 31224,
    "sunId": 31225,
    "imageKey": "scutum"
  },
  {
    "name": "Volan",
    "map": "pay_fild11",
    "coordinates": "100,154",
    "area": "Payon Forest F11",
    "moonId": 31220,
    "sunId": 31221,
    "imageKey": "volan"
  }
] as const;

export const legendJobChangeLocations = {
  mysteriousMan: {
    map: 'snow_fild05',
    coordinates: '239, 55',
    access: 'From Dicastes Diel, walk three maps south to Snow Fields 05. Find the Strange Man in the southeast corner.',
    warning: 'Watch for Hatii on Snow Fields 05.',
  },
};

// Thief section of Balziere's build guide, editorial review October 24, 2026.
// These are character Base Level recommendations, not monster level ranges.
export const thiefRollingCutterRoute = [
  { baseLevels: '10–19', monster: 'Stone Warrior', location: 'Sograt Desert F2; alternatives F13 and F18.' },
  { baseLevels: '20–32', monster: 'Horn', location: 'Geffen Field F7; alternatives F4 and F0.' },
  { baseLevels: '33–37', monster: 'Living Storm', location: 'Sograt Desert F14; alternatives F17 and F15.' },
  { baseLevels: '38–39', monster: 'Alligator', location: 'Zenhai Marsh; alternatives Border of Papuchicha Forest and Papuchicha Forest.' },
  { baseLevels: '40', monster: 'Galapago', location: 'Papuchicha Forest; alternatives Zenhai Marsh and Border of Papuchicha Forest.' },
] as const;
