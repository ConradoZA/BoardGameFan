'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors', [
      {
        "id": "1",
        "name": "Karl-Heinz Schmiel",
        "createdAt": "2020-04-06 17:52:08",
        "updatedAt": "2020-04-06 17:52:08"
      },
      {
        "id": "2",
        "name": "Isaac Childres",
        "createdAt": "2020-04-06 17:52:29",
        "updatedAt": "2020-04-06 17:52:29"
      },
      {
        "id": "3",
        "name": "Jacob Fryxelius",
        "createdAt": "2020-04-06 17:52:51",
        "updatedAt": "2020-04-06 17:52:51"
      },
      {
        "id": "4",
        "name": "Vlaada Chvátil",
        "createdAt": "2020-04-06 17:53:48",
        "updatedAt": "2020-04-06 17:53:48"
      },
      {
        "id": "5",
        "name": "Dane Beltrami",
        "createdAt": "2020-04-06 17:54:06",
        "updatedAt": "2020-04-06 17:54:06"
      },
      {
        "id": "6",
        "name": "Corey Konieczka",
        "createdAt": "2020-04-06 17:54:06",
        "updatedAt": "2020-04-06 17:54:06"
      },
      {
        "id": "7",
        "name": "Christian T. Petersen",
        "createdAt": "2020-04-06 17:54:06",
        "updatedAt": "2020-04-06 17:54:06"
      },
      {
        "id": "8",
        "name": "Ananda Gupta",
        "createdAt": "2020-04-06 17:54:37",
        "updatedAt": "2020-04-06 17:54:37"
      },
      {
        "id": "9",
        "name": "Jason Matthews",
        "createdAt": "2020-04-06 17:54:37",
        "updatedAt": "2020-04-06 17:54:37"
      },
      {
        "id": "10",
        "name": "Jens Drögemüller",
        "createdAt": "2020-04-06 17:54:50",
        "updatedAt": "2020-04-06 17:54:50"
      },
      {
        "id": "11",
        "name": "Helge Ostertag",
        "createdAt": "2020-04-06 17:54:50",
        "updatedAt": "2020-04-06 17:54:50"
      },
      {
        "id": "12",
        "name": "Jamey Stegmaier",
        "createdAt": "2020-04-06 17:55:03",
        "updatedAt": "2020-04-06 17:55:03"
      },
      {
        "id": "13",
        "name": "Roberto Di Meglio",
        "createdAt": "2020-04-06 17:55:15",
        "updatedAt": "2020-04-06 17:55:15"
      },
      {
        "id": "14",
        "name": "Marco Maggi",
        "createdAt": "2020-04-06 17:55:15",
        "updatedAt": "2020-04-06 17:55:15"
      },
      {
        "id": "15",
        "name": "Francesco Nepitello",
        "createdAt": "2020-04-06 17:55:15",
        "updatedAt": "2020-04-06 17:55:15"
      },
      {
        "id": "16",
        "name": "Stefan Feld",
        "createdAt": "2020-04-06 17:55:26",
        "updatedAt": "2020-04-06 17:55:26"
      },
      {
        "id": "17",
        "name": "Antoine Bauza",
        "createdAt": "2020-04-06 17:55:42",
        "updatedAt": "2020-04-06 17:55:42"
      },
      {
        "id": "18",
        "name": "Bruno Cathala",
        "createdAt": "2020-04-06 17:55:42",
        "updatedAt": "2020-04-06 17:55:42"
      },
      {
        "id": "19",
        "name": "Mac Gerdts",
        "createdAt": "2020-04-06 17:56:16",
        "updatedAt": "2020-04-06 17:56:16"
      },
      {
        "id": "20",
        "name": "Martin Wallace",
        "createdAt": "2020-04-06 17:56:31",
        "updatedAt": "2020-04-06 17:56:31"
      },
      {
        "id": "21",
        "name": "Ludovic Roudy",
        "createdAt": "2020-04-06 17:56:43",
        "updatedAt": "2020-04-06 17:56:43"
      },
      {
        "id": "22",
        "name": "Bruno Sautter",
        "createdAt": "2020-04-06 17:56:43",
        "updatedAt": "2020-04-06 17:56:43"
      },
      {
        "id": "23",
        "name": "Elizabeth Hargrave",
        "createdAt": "2020-04-06 17:56:54",
        "updatedAt": "2020-04-06 17:56:54"
      },
      {
        "id": "24",
        "name": "Morten Monrad Pedersen",
        "createdAt": "2020-04-06 17:57:06",
        "updatedAt": "2020-04-06 17:57:06"
      },
      {
        "id": "25",
        "name": "Alan Stone",
        "createdAt": "2020-04-06 17:57:06",
        "updatedAt": "2020-04-06 17:57:06"
      },
      {
        "id": "26",
        "name": "Uwe Rosenberg",
        "createdAt": "2020-04-06 17:57:18",
        "updatedAt": "2020-04-06 17:57:18"
      },
      {
        "id": "27",
        "name": "Andreas Seyfarth",
        "createdAt": "2020-04-06 17:57:32",
        "updatedAt": "2020-04-06 17:57:32"
      },
      {
        "id": "28",
        "name": "Nikki Valens",
        "createdAt": "2020-04-06 17:58:28",
        "updatedAt": "2020-04-06 17:58:28"
      },
      {
        "id": "29",
        "name": "Eric M. Lang",
        "createdAt": "2020-04-06 17:58:42",
        "updatedAt": "2020-04-06 17:58:42"
      },
      {
        "id": "30",
        "name": "Adam Poots",
        "createdAt": "2020-04-06 17:58:55",
        "updatedAt": "2020-04-06 17:58:55"
      },
      {
        "id": "31",
        "name": "Cole Wehrle",
        "createdAt": "2020-04-06 17:59:10",
        "updatedAt": "2020-04-06 17:59:10"
      },
      {
        "id": "32",
        "name": "Adam Kwapiński",
        "createdAt": "2020-04-06 17:59:24",
        "updatedAt": "2020-04-06 17:59:24"
      },
      {
        "id": "33",
        "name": "Friedemann Friese",
        "createdAt": "2020-04-06 17:59:37",
        "updatedAt": "2020-04-06 17:59:37"
      },
      {
        "id": "34",
        "name": "Justin Kemppainen",
        "createdAt": "2020-04-06 17:59:48",
        "updatedAt": "2020-04-06 17:59:48"
      },
      {
        "id": "35",
        "name": "Jonathan Ying",
        "createdAt": "2020-04-06 17:59:48",
        "updatedAt": "2020-04-06 17:59:48"
      },
      {
        "id": "36",
        "name": "Simone Luciani",
        "createdAt": "2020-04-06 18:00:00",
        "updatedAt": "2020-04-06 18:00:00"
      },
      {
        "id": "37",
        "name": "Daniele Tascini",
        "createdAt": "2020-04-06 18:00:00",
        "updatedAt": "2020-04-06 18:00:00"
      },
      {
        "id": "38",
        "name": "Touko Tahkokallio",
        "createdAt": "2020-04-06 18:00:46",
        "updatedAt": "2020-04-06 18:00:46"
      },
      {
        "id": "39",
        "name": "Michael Kiesling",
        "createdAt": "2020-04-06 18:00:55",
        "updatedAt": "2020-04-06 18:00:55"
      },
      {
        "id": "40",
        "name": "Ignacy Trzewiczek",
        "createdAt": "2020-04-06 18:01:05",
        "updatedAt": "2020-04-06 18:01:05"
      },
      {
        "id": "41",
        "name": "Reiner Stockhausen",
        "createdAt": "2020-04-06 18:02:54",
        "updatedAt": "2020-04-06 18:02:54"
      },
      {
        "id": "42",
        "name": "Richard Garfield",
        "createdAt": "2020-04-06 18:03:18",
        "updatedAt": "2020-04-06 18:03:18"
      },
      {
        "id": "43",
        "name": "Lukas Litzsinger",
        "createdAt": "2020-04-06 18:03:18",
        "updatedAt": "2020-04-06 18:03:18"
      },
      {
        "id": "44",
        "name": "Thomas Lehmann",
        "createdAt": "2020-04-06 18:03:39",
        "updatedAt": "2020-04-06 18:03:39"
      },
      {
        "id": "45",
        "name": "Sebastian Bleasdale",
        "createdAt": "2020-04-06 18:03:50",
        "updatedAt": "2020-04-06 18:03:50"
      },
      {
        "id": "46",
        "name": "Richard Breese",
        "createdAt": "2020-04-06 18:03:50",
        "updatedAt": "2020-04-06 18:03:50"
      },
      {
        "id": "47",
        "name": "Chad Jensen",
        "createdAt": "2020-04-06 18:04:00",
        "updatedAt": "2020-04-06 18:04:00"
      },
      {
        "id": "48",
        "name": "William Attia",
        "createdAt": "2020-04-06 18:04:21",
        "updatedAt": "2020-04-06 18:04:21"
      },
      {
        "id": "49",
        "name": "Vital Lacerda",
        "createdAt": "2020-04-06 18:04:32",
        "updatedAt": "2020-04-06 18:04:32"
      },
      {
        "id": "50",
        "name": "Peter Lee",
        "createdAt": "2020-04-06 18:04:42",
        "updatedAt": "2020-04-06 18:04:42"
      },
      {
        "id": "51",
        "name": "Rodney Thompson",
        "createdAt": "2020-04-06 18:04:42",
        "updatedAt": "2020-04-06 18:04:42"
      },
      {
        "id": "52",
        "name": "Wolfgang Kramer",
        "createdAt": "2020-04-06 18:05:07",
        "updatedAt": "2020-04-06 18:05:07"
      },
      {
        "id": "53",
        "name": "Richard Ulrich",
        "createdAt": "2020-04-06 18:05:07",
        "updatedAt": "2020-04-06 18:05:07"
      },
      {
        "id": "54",
        "name": "Alexander Pfister",
        "createdAt": "2020-04-06 18:07:09",
        "updatedAt": "2020-04-06 18:07:09"
      },
      {
        "id": "55",
        "name": "Donald X. Vaccarino",
        "createdAt": "2020-04-06 18:07:20",
        "updatedAt": "2020-04-06 18:07:20"
      },
      {
        "id": "56",
        "name": "(Uncredited)",
        "createdAt": "2020-04-06 18:07:31",
        "updatedAt": "2020-04-06 18:07:31"
      },
      {
        "id": "57",
        "name": "Kevin Riley",
        "createdAt": "2020-04-06 18:08:18",
        "updatedAt": "2020-04-06 18:08:18"
      },
      {
        "id": "58",
        "name": "Wei-Hwa Huang",
        "createdAt": "2020-04-06 18:08:34",
        "updatedAt": "2020-04-06 18:08:34"
      },
      {
        "id": "59",
        "name": "Reiner Knizia",
        "createdAt": "2020-04-06 18:08:44",
        "updatedAt": "2020-04-06 18:08:44"
      },
      {
        "id": "60",
        "name": "Raymond Edwards",
        "createdAt": "2020-04-06 18:08:55",
        "updatedAt": "2020-04-06 18:08:55"
      },
      {
        "id": "61",
        "name": "Suzanne Goldberg",
        "createdAt": "2020-04-06 18:08:55",
        "updatedAt": "2020-04-06 18:08:55"
      },
      {
        "id": "62",
        "name": "Gary Grady",
        "createdAt": "2020-04-06 18:08:55",
        "updatedAt": "2020-04-06 18:08:55"
      },
      {
        "id": "63",
        "name": "Matt Leacock",
        "createdAt": "2020-04-06 18:09:18",
        "updatedAt": "2020-04-06 18:09:18"
      },
      {
        "id": "64",
        "name": "Michael Boggs",
        "createdAt": "2020-04-06 18:09:32",
        "updatedAt": "2020-04-06 18:09:32"
      },
      {
        "id": "65",
        "name": "Nate French",
        "createdAt": "2020-04-06 18:09:32",
        "updatedAt": "2020-04-06 18:09:32"
      },
      {
        "id": "66",
        "name": "Caleb Grace",
        "createdAt": "2020-04-06 18:09:32",
        "updatedAt": "2020-04-06 18:09:32"
      },
      {
        "id": "67",
        "name": "Jacques Bariot",
        "createdAt": "2020-04-06 18:13:07",
        "updatedAt": "2020-04-06 18:13:07"
      },
      {
        "id": "68",
        "name": "Guillaume Montiage",
        "createdAt": "2020-04-06 18:13:07",
        "updatedAt": "2020-04-06 18:13:07"
      },
      {
        "id": "69",
        "name": "Ole Steiness",
        "createdAt": "2020-04-06 18:13:19",
        "updatedAt": "2020-04-06 18:13:19"
      },
      {
        "id": "70",
        "name": "Hisashi Hayashi",
        "createdAt": "2020-04-06 18:13:32",
        "updatedAt": "2020-04-06 18:13:32"
      },
      {
        "id": "71",
        "name": "Bernd Brunnhofer",
        "createdAt": "2020-04-06 18:13:44",
        "updatedAt": "2020-04-06 18:13:44"
      },
      {
        "id": "72",
        "name": "Jonathan Gilmour",
        "createdAt": "2020-04-06 18:13:55",
        "updatedAt": "2020-04-06 18:13:55"
      },
      {
        "id": "73",
        "name": "Isaac Vega",
        "createdAt": "2020-04-06 18:13:55",
        "updatedAt": "2020-04-06 18:13:55"
      },
      {
        "id": "74",
        "name": "Daniel Clark (I)",
        "createdAt": "2020-04-06 18:14:09",
        "updatedAt": "2020-04-06 18:14:09"
      },
      {
        "id": "75",
        "name": "Adam Sadler",
        "createdAt": "2020-04-06 18:14:09",
        "updatedAt": "2020-04-06 18:14:09"
      },
      {
        "id": "76",
        "name": "Kevin Wilson",
        "createdAt": "2020-04-06 18:14:09",
        "updatedAt": "2020-04-06 18:14:09"
      },
      {
        "id": "77",
        "name": "Robert Dougherty",
        "createdAt": "2020-04-06 18:14:20",
        "updatedAt": "2020-04-06 18:14:20"
      },
      {
        "id": "78",
        "name": "Darwin Kastle",
        "createdAt": "2020-04-06 18:14:21",
        "updatedAt": "2020-04-06 18:14:21"
      },
      {
        "id": "79",
        "name": "Philippe Keyaerts",
        "createdAt": "2020-04-06 18:17:07",
        "updatedAt": "2020-04-06 18:17:07"
      },
      {
        "id": "80",
        "name": "Jean-Christophe Bouvier",
        "createdAt": "2020-04-07 10:13:44",
        "updatedAt": "2020-04-07 10:13:44"
      },
      {
        "id": "81",
        "name": "Phil Walker-Harding",
        "createdAt": "2020-04-07 10:15:45",
        "updatedAt": "2020-04-07 10:15:45"
      },
      {
        "id": "82",
        "name": "Roberto Fraga",
        "createdAt": "2020-04-07 10:16:08",
        "updatedAt": "2020-04-07 10:16:08"
      },
      {
        "id": "83",
        "name": "Marek Loskot",
        "createdAt": "2020-04-07 10:53:22",
        "updatedAt": "2020-04-07 10:53:22"
      },
      {
        "id": "84",
        "name": "Jan Soukal",
        "createdAt": "2020-04-07 10:53:22",
        "updatedAt": "2020-04-07 10:53:22"
      },
      {
        "id": "85",
        "name": "D. Brad Talton, Jr.",
        "createdAt": "2020-04-07 10:54:05",
        "updatedAt": "2020-04-07 10:54:05"
      },
      {
        "id": "86",
        "name": "Keith Matejka",
        "createdAt": "2020-04-07 10:54:31",
        "updatedAt": "2020-04-07 10:54:31"
      },
      {
        "id": "87",
        "name": "Klaus-Jürgen Wrede",
        "createdAt": "2020-04-07 10:55:20",
        "updatedAt": "2020-04-07 10:55:20"
      },
      {
        "id": "88",
        "name": "Klaus Teuber",
        "createdAt": "2020-04-07 10:55:57",
        "updatedAt": "2020-04-07 10:55:57"
      },
      {
        "id": "89",
        "name": "James Ernest",
        "createdAt": "2020-04-07 10:56:27",
        "updatedAt": "2020-04-07 10:56:27"
      },
      {
        "id": "90",
        "name": "Dirk Henn",
        "createdAt": "2020-04-07 10:56:58",
        "updatedAt": "2020-04-07 10:56:58"
      },
      {
        "id": "91",
        "name": "Adrian Adamescu",
        "createdAt": "2020-04-07 11:00:21",
        "updatedAt": "2020-04-07 11:00:21"
      },
      {
        "id": "92",
        "name": "Daryl Andrews",
        "createdAt": "2020-04-07 11:00:21",
        "updatedAt": "2020-04-07 11:00:21"
      },
      {
        "id": "93",
        "name": "Grzegorz Rejchtman",
        "createdAt": "2020-04-07 11:00:38",
        "updatedAt": "2020-04-07 11:00:38"
      },
      {
        "id": "94",
        "name": "William Julius Champion Jr.",
        "createdAt": "2020-04-07 11:10:38",
        "updatedAt": "2020-04-07 11:10:38"
      },
      {
        "id": "95",
        "name": "Luke Hooper",
        "createdAt": "2020-04-07 11:11:00",
        "updatedAt": "2020-04-07 11:11:00"
      },
      {
        "id": "96",
        "name": "Michael Larson",
        "createdAt": "2020-04-07 11:11:00",
        "updatedAt": "2020-04-07 11:11:00"
      },
      {
        "id": "97",
        "name": "Del Segura",
        "createdAt": "2020-04-07 11:11:00",
        "updatedAt": "2020-04-07 11:11:00"
      },
      {
        "id": "98",
        "name": "Régis Bonnessée",
        "createdAt": "2020-04-07 11:15:15",
        "updatedAt": "2020-04-07 11:15:15"
      },
      {
        "id": "99",
        "name": "Bruno Faidutti",
        "createdAt": "2020-04-07 11:15:38",
        "updatedAt": "2020-04-07 11:15:38"
      },
      {
        "id": "100",
        "name": "Serge Laget",
        "createdAt": "2020-04-07 11:15:38",
        "updatedAt": "2020-04-07 11:15:38"
      },
      {
        "id": "101",
        "name": "Steve Jackson (I)",
        "createdAt": "2020-04-07 11:16:00",
        "updatedAt": "2020-04-07 11:16:00"
      },
      {
        "id": "102",
        "name": "Ron Gonzalo García",
        "createdAt": "2020-04-07 11:16:31",
        "updatedAt": "2020-04-07 11:16:31"
      },
      {
        "id": "103",
        "name": "Oleksandr Nevskiy",
        "createdAt": "2020-04-07 11:16:48",
        "updatedAt": "2020-04-07 11:16:48"
      },
      {
        "id": "104",
        "name": "Oleg Sidorenko",
        "createdAt": "2020-04-07 11:16:48",
        "updatedAt": "2020-04-07 11:16:48"
      },
      {
        "id": "105",
        "name": "Jean-Louis Roubira",
        "createdAt": "2020-04-07 11:17:04",
        "updatedAt": "2020-04-07 11:17:04"
      },
      {
        "id": "106",
        "name": "Philippe des Pallières",
        "createdAt": "2020-04-07 11:17:52",
        "updatedAt": "2020-04-07 11:17:52"
      },
      {
        "id": "107",
        "name": "Hervé Marly",
        "createdAt": "2020-04-07 11:17:52",
        "updatedAt": "2020-04-07 11:17:52"
      },
      {
        "id": "108",
        "name": "Bill Eberle",
        "createdAt": "2020-04-07 11:18:14",
        "updatedAt": "2020-04-07 11:18:14"
      },
      {
        "id": "109",
        "name": "Jack Kittredge",
        "createdAt": "2020-04-07 11:18:14",
        "updatedAt": "2020-04-07 11:18:14"
      },
      {
        "id": "110",
        "name": "Peter Olotka",
        "createdAt": "2020-04-07 11:18:14",
        "updatedAt": "2020-04-07 11:18:14"
      },
      {
        "id": "111",
        "name": "Ed Beach",
        "createdAt": "2020-04-07 11:18:37",
        "updatedAt": "2020-04-07 11:18:37"
      },
      {
        "id": "112",
        "name": "Ted Raicer",
        "createdAt": "2020-04-07 11:19:11",
        "updatedAt": "2020-04-07 11:19:11"
      },
      {
        "id": "113",
        "name": "Wray Ferrell",
        "createdAt": "2020-04-07 11:19:29",
        "updatedAt": "2020-04-07 11:19:29"
      },
      {
        "id": "114",
        "name": "Richard Sivél",
        "createdAt": "2020-04-07 11:19:40",
        "updatedAt": "2020-04-07 11:19:40"
      },
      {
        "id": "115",
        "name": "Marco Teubner",
        "createdAt": "2020-04-07 11:20:22",
        "updatedAt": "2020-04-07 11:20:22"
      },
      {
        "id": "116",
        "name": "Doris Matthäus",
        "createdAt": "2020-04-07 11:23:17",
        "updatedAt": "2020-04-07 11:23:17"
      },
      {
        "id": "117",
        "name": "Frank Nestel",
        "createdAt": "2020-04-07 11:23:17",
        "updatedAt": "2020-04-07 11:23:17"
      },
      {
        "id": "118",
        "name": "Stefan Dorra",
        "createdAt": "2020-04-07 11:23:50",
        "updatedAt": "2020-04-07 11:23:50"
      },
      {
        "id": "119",
        "name": "Rüdiger Dorn",
        "createdAt": "2020-04-07 11:25:03",
        "updatedAt": "2020-04-07 11:25:03"
      },
      {
        "id": "120",
        "name": "Gaëtan Beaujannot",
        "createdAt": "2020-04-07 11:25:46",
        "updatedAt": "2020-04-07 11:25:46"
      },
      {
        "id": "121",
        "name": "Alain Rivollet",
        "createdAt": "2020-04-07 11:25:46",
        "updatedAt": "2020-04-07 11:25:46"
      },
      {
        "id": "122",
        "name": "Sébastien Pauchon",
        "createdAt": "2020-04-07 11:26:04",
        "updatedAt": "2020-04-07 11:26:04"
      },
      {
        "id": "123",
        "name": "Andrea Chiarvesio",
        "createdAt": "2020-04-07 11:27:01",
        "updatedAt": "2020-04-07 11:27:01"
      },
      {
        "id": "124",
        "name": "Luca Iennaco",
        "createdAt": "2020-04-07 11:27:01",
        "updatedAt": "2020-04-07 11:27:01"
      },
      {
        "id": "125",
        "name": "Steffen Bogen",
        "createdAt": "2020-04-07 11:27:48",
        "updatedAt": "2020-04-07 11:27:48"
      },
      {
        "id": "126",
        "name": "John Yianni",
        "createdAt": "2020-04-07 11:29:34",
        "updatedAt": "2020-04-07 11:29:34"
      },
      {
        "id": "127",
        "name": "藤田 真吾 (Shingo Fujita)",
        "createdAt": "2020-04-07 11:31:13",
        "updatedAt": "2020-04-07 11:31:13"
      },
      {
        "id": "128",
        "name": "Shotaro Nakashima",
        "createdAt": "2020-04-07 11:31:13",
        "updatedAt": "2020-04-07 11:31:13"
      },
      {
        "id": "129",
        "name": "大木基至 (Motoyuki Ohki)",
        "createdAt": "2020-04-07 11:31:13",
        "updatedAt": "2020-04-07 11:31:13"
      },
      {
        "id": "130",
        "name": "Hiromi Oikawa",
        "createdAt": "2020-04-07 11:31:13",
        "updatedAt": "2020-04-07 11:31:13"
      },
      {
        "id": "131",
        "name": "Rory O'Connor",
        "createdAt": "2020-04-07 11:31:27",
        "updatedAt": "2020-04-07 11:31:27"
      },
      {
        "id": "132",
        "name": "Michał Oracz",
        "createdAt": "2020-04-07 11:31:50",
        "updatedAt": "2020-04-07 11:31:50"
      },
      {
        "id": "133",
        "name": "Jakub Wiśniewski",
        "createdAt": "2020-04-07 11:31:50",
        "updatedAt": "2020-04-07 11:31:50"
      },
      {
        "id": "134",
        "name": "Andreas Steding",
        "createdAt": "2020-04-07 11:32:07",
        "updatedAt": "2020-04-07 11:32:07"
      },
      {
        "id": "135",
        "name": "Rex A. Martin",
        "createdAt": "2020-04-07 11:32:30",
        "updatedAt": "2020-04-07 11:32:30"
      },
      {
        "id": "136",
        "name": "Craig Sandercock",
        "createdAt": "2020-04-07 11:32:30",
        "updatedAt": "2020-04-07 11:32:30"
      },
      {
        "id": "137",
        "name": "Karen Seyfarth",
        "createdAt": "2020-04-07 11:33:07",
        "updatedAt": "2020-04-07 11:33:07"
      },
      {
        "id": "138",
        "name": "Nathan I. Hajek",
        "createdAt": "2020-04-07 11:34:03",
        "updatedAt": "2020-04-07 11:34:03"
      },
      {
        "id": "139",
        "name": "Grace Holdinghaus",
        "createdAt": "2020-04-07 11:34:03",
        "updatedAt": "2020-04-07 11:34:03"
      },
      {
        "id": "140",
        "name": "Stefan Alexander",
        "createdAt": "2020-04-07 11:34:55",
        "updatedAt": "2020-04-07 11:34:55"
      },
      {
        "id": "141",
        "name": "Cody Miller",
        "createdAt": "2020-04-07 11:35:10",
        "updatedAt": "2020-04-07 11:35:10"
      },
      {
        "id": "142",
        "name": "Reinhard Staupe",
        "createdAt": "2020-04-07 11:35:30",
        "updatedAt": "2020-04-07 11:35:30"
      },
      {
        "id": "143",
        "name": "Tim Eisner",
        "createdAt": "2020-04-07 11:35:50",
        "updatedAt": "2020-04-07 11:35:50"
      },
      {
        "id": "144",
        "name": "Ryan Swisher",
        "createdAt": "2020-04-07 11:35:50",
        "updatedAt": "2020-04-07 11:35:50"
      },
      {
        "id": "145",
        "name": "Phil Eklund",
        "createdAt": "2020-04-07 11:39:24",
        "updatedAt": "2020-04-07 11:39:24"
      },
      {
        "id": "146",
        "name": "Matt Eklund",
        "createdAt": "2020-04-07 11:41:53",
        "updatedAt": "2020-04-07 11:41:53"
      },
      {
        "id": "147",
        "name": "David Jiterman",
        "createdAt": "2020-04-24 10:43:30",
        "updatedAt": "2020-04-24 10:43:30"
      },
      {
        "id": "148",
        "name": "Albert Lamorisse",
        "createdAt": "2020-04-25 19:16:39",
        "updatedAt": "2020-04-25 19:16:39"
      },
      {
        "id": "149",
        "name": "Michael I. Levin",
        "createdAt": "2020-04-25 19:16:39",
        "updatedAt": "2020-04-25 19:16:39"
      },
      {
        "id": "150",
        "name": "Rob Daviau",
        "createdAt": "2020-04-26 09:47:50",
        "updatedAt": "2020-04-26 09:47:50"
      },
      {
        "id": "151",
        "name": "Chris Dupuis",
        "createdAt": "2020-04-26 09:47:50",
        "updatedAt": "2020-04-26 09:47:50"
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
}
