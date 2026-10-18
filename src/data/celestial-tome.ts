// Recipes: Pitaya’s Tome tab and HATred; item IDs checked against Refuge, October 18, 2026.
export const prerequisiteTomes = [
  {
    "name": "Inferno Tome",
    "sage": "Vali Sage",
    "imageKey": "vali",
    "id": 24225,
    "manuals": [
      {
        "name": "Vanish Manual X",
        "id": 24042
      },
      {
        "name": "Pickpocket Manual X",
        "id": 24050
      },
      {
        "name": "Agility Manual X",
        "id": 24021
      },
      {
        "name": "Hammer Manual X",
        "id": 24168
      }
    ],
    "jewel": "Jewel Bradium",
    "jewelId": 6226,
    "jewelQuantity": 5
  },
  {
    "name": "Purgatorio Tome",
    "sage": "Thor Sage",
    "imageKey": "thor",
    "id": 24148,
    "manuals": [
      {
        "name": "Blink Manual X",
        "id": 24118
      },
      {
        "name": "Portal Manual Z",
        "id": 24136
      },
      {
        "name": "Union Manual",
        "id": 24142
      }
    ],
    "jewel": "Jewel Elunium",
    "jewelId": 6290,
    "jewelQuantity": 10
  },
  {
    "name": "Paradiso Tome",
    "sage": "Vidar Sage",
    "imageKey": "vidar",
    "id": 24107,
    "manuals": [
      {
        "name": "Medic Manual X",
        "id": 24088
      },
      {
        "name": "Medic Manual Z",
        "id": 24100
      },
      {
        "name": "Life Manual X",
        "id": 24105
      }
    ],
    "jewel": "Jewel Oridecon",
    "jewelId": 6906,
    "jewelQuantity": 10
  }
] as const;
