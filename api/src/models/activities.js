const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dificult: {
        type: DataTypes.STRING,
        allowNull:false,
    },

    duration: {
        type: DataTypes.INTEGER,
    },
    
    station: {
        type: DataTypes.STRING,
    },
    ubication: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};

/* -  ID. \*
-  Nombre. \*
-  Dificultad (número del 1 al 5). \*
-  Duración (en horas).
-  Temporada (Verano, Otoño, Invierno o Primavera). \* 
*/