module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.STRING,
        gender: DataTypes.STRING,
        image: DataTypes.STRING,
        confirmed: DataTypes.BOOLEAN,
    }, {});
    User.associate = function(models) {
        User.hasMany(models.Token);
        User.belongsToMany(models.Game, {
            through: models.UserGame
        })
    };
    return User;
};