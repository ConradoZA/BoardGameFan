'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserGame = sequelize.define('UserGame', {
        UserId: DataTypes.INTEGER,
        GameId: DataTypes.INTEGER,
        comment: DataTypes.TEXT,
        rating: DataTypes.INTEGER
    }, {});
    UserGame.associate = function(models) {
        // associations can be defined here
    };
    return UserGame;
};