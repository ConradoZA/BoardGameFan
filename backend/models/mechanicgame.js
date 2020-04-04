'use strict';
module.exports = (sequelize, DataTypes) => {
    const MechanicGame = sequelize.define('MechanicGame', {
        MechanicId: DataTypes.INTEGER,
        GameId: DataTypes.INTEGER
    }, {});
    MechanicGame.associate = function(models) {};
    return MechanicGame;
};