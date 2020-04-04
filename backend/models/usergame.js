'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGame = sequelize.define('UserGame', {
    UserId: DataTypes.INTEGER,
    GameId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    rating: DataTypes.STRING
  }, {});
  UserGame.associate = function(models) {
    // associations can be defined here
  };
  return UserGame;
};