'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        "id": "1",
        "username": "User",
        "password": "$2a$09$5/Y3aj6dPBSUp8/fBO7qXuWeKw0E3RDB1PH.iBaUYq7gxv501WAw6",
        "email": "user@jotmail.com",
        "role": "user",
        "gender": "",
        "image": "https://i.pinimg.com/236x/4f/ce/1b/4fce1b0535f1b0c4d23580e7ca9bb159--flying-squirrel-character-ideas.jpg",
        "confirmed": "1",
        "createdAt": "2020-04-07 15:31:51",
        "updatedAt": "2020-04-24 10:37:13"
      },
      {
        "id": "3",
        "username": "Admin",
        "password": "$2a$09$I3wSnUS/2NbT2zU7rXXd1.beUtJtOKomXPYWiVfjmedYycGCExH5G",
        "email": "yo@mismo.com",
        "role": "admin",
        "gender": "",
        "image": "",
        "confirmed": "0",
        "createdAt": "2020-04-17 14:24:36",
        "updatedAt": "2020-04-17 14:24:36"
      },
      {
        "id": "4",
        "username": "Yo",
        "password": "$2a$09$KxFvXjf69g3AnNh2m5IG6uEgdem4ZtYs8ahlzYRH.gFzxJ9GLEzaG",
        "email": "el@mio.com",
        "role": "god",
        "gender": "",
        "image": "",
        "confirmed": "1",
        "createdAt": "2020-04-17 16:12:43",
        "updatedAt": "2020-04-25 20:06:40"
      },
      {
        "id": "5",
        "username": "Maricarmen",
        "password": "$2a$09$aQUxR2HcXY8SNKkHssLkBejm3El07C2sZj9QQ6d066Sg3rsatgT/O",
        "email": "el@mio.com",
        "role": "user",
        "gender": "female",
        "image": "https://www.quo.es/wp-content/uploads/2019/10/ver-videos-de-gatitos-aumenta-el-buen-rollo-989x640.jpg",
        "confirmed": "1",
        "createdAt": "2020-04-19 09:53:50",
        "updatedAt": "2020-04-19 09:58:35"
      },
      {
        "id": "6",
        "username": "Mi nombre",
        "password": "$2a$09$raOXUSfAAWIJH42AbHySW.F5ouxULqwBST5ihwy35qUB0KUPY14Sq",
        "email": "user@jotmail.com",
        "role": "user",
        "gender": "male",
        "image": "",
        "confirmed": "1",
        "createdAt": "2020-04-24 10:29:01",
        "updatedAt": "2020-04-24 10:37:13"
      }
    ], {});

  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
}