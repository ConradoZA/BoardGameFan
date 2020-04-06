'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryGame = sequelize.define('CategoryGame', {
    GameId: DataTypes.STRING,
    CategoryId: DataTypes.STRING
  }, {});
  CategoryGame.associate = function(models) {
    // associations can be defined here
  };
  return CategoryGame;
};