'use strict';
module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('Author', {
        name: DataTypes.STRING
    }, {});
    Author.associate = function(models) {
        Author.belongsToMany(models.Game, {
            through: models.AuthorGame
        });
    };
    return Author;
};