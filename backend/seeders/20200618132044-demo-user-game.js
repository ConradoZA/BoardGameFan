'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserGames', [
      {
        "id": "2",
        "UserId": "1",
        "GameId": "2",
        "comment": "esto es una prueba.",
        "rating": "9",
        "createdAt": "2020-04-14 08:25:42",
        "updatedAt": "2020-04-15 14:51:59"
      },
      {
        "id": "3",
        "UserId": "1",
        "GameId": "141",
        "comment": "",
        "rating": "",
        "createdAt": "2020-04-14 08:30:30",
        "updatedAt": "2020-04-14 08:30:30"
      },
      {
        "id": "4",
        "UserId": "1",
        "GameId": "144",
        "comment": "",
        "rating": "",
        "createdAt": "2020-04-14 11:11:06",
        "updatedAt": "2020-04-14 11:11:06"
      },
      {
        "id": "5",
        "UserId": "1",
        "GameId": "142",
        "comment": "",
        "rating": "",
        "createdAt": "2020-04-14 11:13:05",
        "updatedAt": "2020-04-14 11:13:05"
      },
      {
        "id": "7",
        "UserId": "1",
        "GameId": "143",
        "comment": "",
        "rating": "",
        "createdAt": "2020-04-15 13:33:03",
        "updatedAt": "2020-04-15 13:33:03"
      },
      {
        "id": "8",
        "UserId": "1",
        "GameId": "42",
        "comment": "Mismamente",
        "rating": "7",
        "createdAt": "2020-04-16 15:54:12",
        "updatedAt": "2020-04-16 15:54:38"
      },
      {
        "id": "9",
        "UserId": "1",
        "GameId": "88",
        "comment": "",
        "rating": "",
        "createdAt": "2020-04-16 17:02:23",
        "updatedAt": "2020-04-16 17:02:23"
      },
      {
        "id": "11",
        "UserId": "4",
        "GameId": "151",
        "comment": "antiguo",
        "rating": "6",
        "createdAt": "2020-04-20 13:52:44",
        "updatedAt": "2020-04-25 19:14:38"
      }
    ], {});
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('UserGames', null, {});
  }
}
