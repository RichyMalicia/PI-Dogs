const { DataTypes } = require ('sequelize');
module.exports = (sequelize) => {
    return sequelize.define('temper', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{timestamps: false});
}