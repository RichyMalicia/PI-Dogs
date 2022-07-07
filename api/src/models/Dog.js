const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('dog', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
               
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightMin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heightMax: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weightMin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weightMax: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life_spanMin: {
      type: DataTypes.STRING
    },
    life_spanMax: {
      type: DataTypes.STRING
    },
     image: {
      type: DataTypes.JSON,
      allowNull: true
    }, 
    mine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    } 
  },{timestamps: false});
};
