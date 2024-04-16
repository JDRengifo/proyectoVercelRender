const {Activity, } = require("../db");

const createActivityBd = async (nombre, duracion, dificultad, temporada, imagen, paises) => {
   try {
       const newActivity = await Activity.create({nombre, duracion, dificultad, temporada, imagen})
      
        newActivity.addCountry(paises);
      
       return newActivity
       
       // return await Activity.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
    
   } catch (error) {
    res.status(400).json({error: error.message})
   }
     
};


module.exports = {createActivityBd};