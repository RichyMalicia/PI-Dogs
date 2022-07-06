const { DataTypes } = require ('sequelize');
module.exports = (sequelize) => {
    return sequelize.define('temper', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        id: {
            type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4       
     }
    },{timestamps: false});
}