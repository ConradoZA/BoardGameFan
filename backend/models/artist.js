'use strict';
module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
        name: DataTypes.STRING
    }, {});
    Artist.associate = function(models) {
        Artist.belongsToMany(models.Game, {
            through: models.ArtistGame
        });
    };
    return Artist;
};