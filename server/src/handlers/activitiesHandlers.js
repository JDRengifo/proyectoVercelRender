const { getAllActivities } = require("../controllers/getAllActivities");
const { createActivityBd } = require("../controllers/postActivityController");

const getactivitiesHandler = async (req, res)=>{
    try {
        const response = await getAllActivities()
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

// Creando Actividades
const activitiesPostHandler = async (req, res)=>{
    const { nombre, duracion, dificultad, temporada, imagen, paises } = req.body;
console.log('Julian3', imagen)
    try {
        const response = await createActivityBd(nombre, duracion, dificultad, temporada, imagen, paises);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    // res.status(200).send(`creando actividades`);
};

module.exports = {
    getactivitiesHandler,
    activitiesPostHandler,
    
}