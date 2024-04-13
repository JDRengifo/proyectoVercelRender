const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

sequelize.define("Activity",{
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, 
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  
    dificultad:{
      type: DataTypes.INTEGER, // Puedes usar INTEGER para el número aleatorio
      validate: {
          min: 1,
          max: 6,
        },
      allowNull: true,
    },

    imagen:{
      type: DataTypes.STRING
    },
  
    duracion:{
      type: DataTypes.INTEGER
    }, 
  
    temporada:{
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera")
    }
  })
}