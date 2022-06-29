const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   /*  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    }, */
    height: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    weight: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING
    },
    temperament: {
      type: DataTypes.TEXT
    },
    /* image: {
      type: DataTypes.JSON,
      allowNull: true
    }, */
    mine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },{timestamps: false});
};
