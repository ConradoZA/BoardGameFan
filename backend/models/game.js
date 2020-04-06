'use strict';
module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define('Game', {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        year: DataTypes.STRING,
        image: DataTypes.STRING,
        minPlayer: DataTypes.STRING,
        maxPlayer: DataTypes.STRING,
        minTime: DataTypes.STRING,
        maxTime: DataTypes.STRING,
        age: DataTypes.STRING,
        description: DataTypes.TEXT,
    }, {});
    Game.associate = function(models) {
        Game.belongsToMany(models.Mechanic, {
            through: models.MechanicGame
        });
        Game.belongsToMany(models.Category, {
            through: models.CategoryGame
        });
        Game.belongsToMany(models.Author, {
            through: models.AuthorGame
        });
        Game.belongsToMany(models.Artist, {
            through: models.ArtistGame
        });
        Game.belongsToMany(models.User, {
            through: models.UserGame
        });
    }
    return Game;
};