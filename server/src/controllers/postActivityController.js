const {Activity, } = require("../db");

const createActivityBd = async (nombre, duracion, dificultad, temporada, imagen, paises) => {
    console.log('imagen',imagen)
//nombre, duracion, dificultad, temporada, imagen, paises
    const newActivity = await Activity.create({nombre, duracion, dificultad, temporada, imagen})
   
     newActivity.addCountry(paises);
   
    return newActivity
    
    // return await Activity.create({nombre, duracion,dificultad, temporada}); //?ASI También puede ser
     
};


module.exports = {createActivityBd};