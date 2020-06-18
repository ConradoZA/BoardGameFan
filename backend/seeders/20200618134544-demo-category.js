'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        "id": "1",
        "name": "Economic",
        "createdAt": "2020-04-06 17:52:08",
        "updatedAt": "2020-04-06 17:52:08"
      },
      {
        "id": "2",
        "name": "Negotiation",
        "createdAt": "2020-04-06 17:52:08",
        "updatedAt": "2020-04-06 17:52:08"
      },
      {
        "id": "3",
        "name": "Political",
        "createdAt": "2020-04-06 17:52:08",
        "updatedAt": "2020-04-06 17:52:08"
      },
      {
        "id": "4",
        "name": "Strategy Games",
        "createdAt": "2020-04-06 17:52:08",
        "updatedAt": "2020-04-06 17:52:08"
      },
      {
        "id": "5",
        "name": "Adventure",
        "createdAt": "2020-04-06 17:52:29",
        "updatedAt": "2020-04-06 17:52:29"
      },
      {
        "id": "6",
        "name": "Exploration",
        "createdAt": "2020-04-06 17:52:29",
        "updatedAt": "2020-04-06 17:52:29"
      },
      {
        "id": "7",
        "name": "Fantasy",
        "createdAt": "2020-04-06 17:52:29",
        "updatedAt": "2020-04-06 17:52:29"
      },
      {
        "id": "8",
        "name": "Fighting",
        "createdAt": "2020-04-06 17:52:29",
        "updatedAt": "2020-04-06 17:52:29"
      },
      {
        "id": "9",
        "name": "Miniatures",
        "createdAt": "2020-04-06 17:52:29",
        "updatedAt": "2020-04-06 17:52:29"
      },
      {
        "id": "10",
        "name": "Thematic Games",
        "createdAt": "2020-04-06 17:52:29",
        "updatedAt": "2020-04-06 17:52:29"
      },
      {
        "id": "11",
        "name": "Environmental",
        "createdAt": "2020-04-06 17:52:51",
        "updatedAt": "2020-04-06 17:52:51"
      },
      {
        "id": "12",
        "name": "Industry / Manufacturing",
        "createdAt": "2020-04-06 17:52:51",
        "updatedAt": "2020-04-06 17:52:51"
      },
      {
        "id": "13",
        "name": "Science Fiction",
        "createdAt": "2020-04-06 17:52:51",
        "updatedAt": "2020-04-06 17:52:51"
      },
      {
        "id": "14",
        "name": "Space Exploration",
        "createdAt": "2020-04-06 17:52:51",
        "updatedAt": "2020-04-06 17:52:51"
      },
      {
        "id": "15",
        "name": "Territory Building",
        "createdAt": "2020-04-06 17:52:51",
        "updatedAt": "2020-04-06 17:52:51"
      },
      {
        "id": "16",
        "name": "Card Game",
        "createdAt": "2020-04-06 17:53:48",
        "updatedAt": "2020-04-06 17:53:48"
      },
      {
        "id": "17",
        "name": "Civilization",
        "createdAt": "2020-04-06 17:53:48",
        "updatedAt": "2020-04-06 17:53:48"
      },
      {
        "id": "18",
        "name": "Wargame",
        "createdAt": "2020-04-06 17:54:06",
        "updatedAt": "2020-04-06 17:54:06"
      },
      {
        "id": "19",
        "name": "Movies / TV / Radio theme",
        "createdAt": "2020-04-06 17:54:21",
        "updatedAt": "2020-04-06 17:54:21"
      },
      {
        "id": "20",
        "name": "Modern Warfare",
        "createdAt": "2020-04-06 17:54:36",
        "updatedAt": "2020-04-06 17:54:36"
      },
      {
        "id": "21",
        "name": "Wargames",
        "createdAt": "2020-04-06 17:54:37",
        "updatedAt": "2020-04-06 17:54:37"
      },
      {
        "id": "22",
        "name": "Novel-based",
        "createdAt": "2020-04-06 17:55:15",
        "updatedAt": "2020-04-06 17:55:15"
      },
      {
        "id": "23",
        "name": "Dice",
        "createdAt": "2020-04-06 17:55:26",
        "updatedAt": "2020-04-06 17:55:26"
      },
      {
        "id": "24",
        "name": "Medieval",
        "createdAt": "2020-04-06 17:55:26",
        "updatedAt": "2020-04-06 17:55:26"
      },
      {
        "id": "25",
        "name": "Ancient",
        "createdAt": "2020-04-06 17:55:42",
        "updatedAt": "2020-04-06 17:55:42"
      },
      {
        "id": "26",
        "name": "City Building",
        "createdAt": "2020-04-06 17:55:42",
        "updatedAt": "2020-04-06 17:55:42"
      },
      {
        "id": "27",
        "name": "Nautical",
        "createdAt": "2020-04-06 17:56:16",
        "updatedAt": "2020-04-06 17:56:16"
      },
      {
        "id": "28",
        "name": "Transportation",
        "createdAt": "2020-04-06 17:56:31",
        "updatedAt": "2020-04-06 17:56:31"
      },
      {
        "id": "29",
        "name": "Animals",
        "createdAt": "2020-04-06 17:56:54",
        "updatedAt": "2020-04-06 17:56:54"
      },
      {
        "id": "30",
        "name": "Educational",
        "createdAt": "2020-04-06 17:56:54",
        "updatedAt": "2020-04-06 17:56:54"
      },
      {
        "id": "31",
        "name": "Family Games",
        "createdAt": "2020-04-06 17:56:54",
        "updatedAt": "2020-04-06 17:56:54"
      },
      {
        "id": "32",
        "name": "Farming",
        "createdAt": "2020-04-06 17:57:06",
        "updatedAt": "2020-04-06 17:57:06"
      },
      {
        "id": "33",
        "name": "Puzzle",
        "createdAt": "2020-04-06 17:57:18",
        "updatedAt": "2020-04-06 17:57:18"
      },
      {
        "id": "34",
        "name": "Horror",
        "createdAt": "2020-04-06 17:58:28",
        "updatedAt": "2020-04-06 17:58:28"
      },
      {
        "id": "35",
        "name": "Murder/Mystery",
        "createdAt": "2020-04-06 17:58:28",
        "updatedAt": "2020-04-06 17:58:28"
      },
      {
        "id": "36",
        "name": "Mythology",
        "createdAt": "2020-04-06 17:58:42",
        "updatedAt": "2020-04-06 17:58:42"
      },
      {
        "id": "37",
        "name": "Mature / Adult",
        "createdAt": "2020-04-06 17:58:55",
        "updatedAt": "2020-04-06 17:58:55"
      },
      {
        "id": "38",
        "name": "Abstract Strategy",
        "createdAt": "2020-04-06 18:00:55",
        "updatedAt": "2020-04-06 18:00:55"
      },
      {
        "id": "39",
        "name": "Renaissance",
        "createdAt": "2020-04-06 18:00:55",
        "updatedAt": "2020-04-06 18:00:55"
      },
      {
        "id": "40",
        "name": "Abstract Games",
        "createdAt": "2020-04-06 18:00:55",
        "updatedAt": "2020-04-06 18:00:55"
      },
      {
        "id": "41",
        "name": "Religious",
        "createdAt": "2020-04-06 18:02:54",
        "updatedAt": "2020-04-06 18:02:54"
      },
      {
        "id": "42",
        "name": "Travel",
        "createdAt": "2020-04-06 18:02:54",
        "updatedAt": "2020-04-06 18:02:54"
      },
      {
        "id": "43",
        "name": "Bluffing",
        "createdAt": "2020-04-06 18:03:18",
        "updatedAt": "2020-04-06 18:03:18"
      },
      {
        "id": "44",
        "name": "Collectible Components",
        "createdAt": "2020-04-06 18:03:18",
        "updatedAt": "2020-04-06 18:03:18"
      },
      {
        "id": "45",
        "name": "Customizable Games",
        "createdAt": "2020-04-06 18:03:18",
        "updatedAt": "2020-04-06 18:03:18"
      },
      {
        "id": "46",
        "name": "Prehistoric",
        "createdAt": "2020-04-06 18:04:00",
        "updatedAt": "2020-04-06 18:04:00"
      },
      {
        "id": "47",
        "name": "Arabian",
        "createdAt": "2020-04-06 18:04:55",
        "updatedAt": "2020-04-06 18:04:55"
      },
      {
        "id": "48",
        "name": "Action / Dexterity",
        "createdAt": "2020-04-06 18:07:31",
        "updatedAt": "2020-04-06 18:07:31"
      },
      {
        "id": "49",
        "name": "Deduction",
        "createdAt": "2020-04-06 18:07:42",
        "updatedAt": "2020-04-06 18:07:42"
      },
      {
        "id": "50",
        "name": "Spies/Secret Agents",
        "createdAt": "2020-04-06 18:07:42",
        "updatedAt": "2020-04-06 18:07:42"
      },
      {
        "id": "51",
        "name": "Party Game",
        "createdAt": "2020-04-06 18:08:04",
        "updatedAt": "2020-04-06 18:08:04"
      },
      {
        "id": "52",
        "name": "Word Game",
        "createdAt": "2020-04-06 18:08:04",
        "updatedAt": "2020-04-06 18:08:04"
      },
      {
        "id": "53",
        "name": "Party Games",
        "createdAt": "2020-04-06 18:08:04",
        "updatedAt": "2020-04-06 18:08:04"
      },
      {
        "id": "54",
        "name": "Post-Napoleonic",
        "createdAt": "2020-04-06 18:08:55",
        "updatedAt": "2020-04-06 18:08:55"
      },
      {
        "id": "55",
        "name": "Medical",
        "createdAt": "2020-04-06 18:09:18",
        "updatedAt": "2020-04-06 18:09:18"
      },
      {
        "id": "56",
        "name": "Comic Book / Strip",
        "createdAt": "2020-04-06 18:09:32",
        "updatedAt": "2020-04-06 18:09:32"
      },
      {
        "id": "57",
        "name": "Zombies",
        "createdAt": "2020-04-06 18:13:55",
        "updatedAt": "2020-04-06 18:13:55"
      },
      {
        "id": "58",
        "name": "Racing",
        "createdAt": "2020-04-07 10:13:44",
        "updatedAt": "2020-04-07 10:13:44"
      },
      {
        "id": "59",
        "name": "Video Game Theme",
        "createdAt": "2020-04-07 10:54:05",
        "updatedAt": "2020-04-07 10:54:05"
      },
      {
        "id": "60",
        "name": "Humor",
        "createdAt": "2020-04-07 10:56:27",
        "updatedAt": "2020-04-07 10:56:27"
      },
      {
        "id": "61",
        "name": "Real-time",
        "createdAt": "2020-04-07 11:00:38",
        "updatedAt": "2020-04-07 11:00:38"
      },
      {
        "id": "62",
        "name": "Game System",
        "createdAt": "2020-04-07 11:05:47",
        "updatedAt": "2020-04-07 11:05:47"
      },
      {
        "id": "63",
        "name": "Children's Game",
        "createdAt": "2020-04-07 11:06:12",
        "updatedAt": "2020-04-07 11:06:12"
      },
      {
        "id": "64",
        "name": "Children's Games",
        "createdAt": "2020-04-07 11:06:12",
        "updatedAt": "2020-04-07 11:06:12"
      },
      {
        "id": "65",
        "name": "Electronic",
        "createdAt": "2020-04-07 11:11:00",
        "updatedAt": "2020-04-07 11:11:00"
      },
      {
        "id": "66",
        "name": "World War I",
        "createdAt": "2020-04-07 11:19:11",
        "updatedAt": "2020-04-07 11:19:11"
      },
      {
        "id": "67",
        "name": "Pike and Shot",
        "createdAt": "2020-04-07 11:19:20",
        "updatedAt": "2020-04-07 11:19:20"
      },
      {
        "id": "68",
        "name": "Age of Reason",
        "createdAt": "2020-04-07 11:19:40",
        "updatedAt": "2020-04-07 11:19:40"
      },
      {
        "id": "69",
        "name": "Pirates",
        "createdAt": "2020-04-07 11:23:50",
        "updatedAt": "2020-04-07 11:23:50"
      },
      {
        "id": "70",
        "name": "Sports",
        "createdAt": "2020-04-07 11:24:25",
        "updatedAt": "2020-04-07 11:24:25"
      },
      {
        "id": "71",
        "name": "Trivia",
        "createdAt": "2020-04-07 11:28:02",
        "updatedAt": "2020-04-07 11:28:02"
      },
      {
        "id": "72",
        "name": "Memory",
        "createdAt": "2020-04-07 11:35:30",
        "updatedAt": "2020-04-07 11:35:30"
      },
      {
        "id": "73",
        "name": "Number",
        "createdAt": "2020-04-07 11:35:30",
        "updatedAt": "2020-04-07 11:35:30"
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
}
