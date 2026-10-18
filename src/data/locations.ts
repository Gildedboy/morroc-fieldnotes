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
    access: 'From the Orphanage, use Kafra Allysia to warp to Hugel. Go east and take the ferry to Snow Fields. Travel north to Lutie, then continue north through town to Toy Factory.',
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
    notes: 'Trade Einherjar Soul for powerful equipment at the end of Sky Garden. Watch out for Sarah Irene on the last floor of Okolnir. If you use the Sky Garden NPC to warp someone, be a good Orphan and do it for free.',
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
    notes: "The entry record requires Master of Balder. Strange Love is the MVP in this distortion.",
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
