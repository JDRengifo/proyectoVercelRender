const { getCountryById } = require('../controllers/getCountryById');
const { getAllCountry } = require('../controllers/getAllCountry');
const { getCountryByName } = require('../controllers/getCountryByName');


const countriesHandler = async (req, res)=>{
    const { name } = req.query;
      
    try {
        if(!name) {
            const response = await getAllCountry()
            res.status(200).json(response)
        } else {
            const countyByName = await getCountryByName(name)
            res.status(200).json(countyByName);
        };
        } catch (error) {
            res.status(400).json({error: error.message})
    }
    
};

const countriesDetailHandler = async (req, res)=>{
    const {id} = req.params;
    // res.status(200).send(`Detalle del Usuario ${id}`); //? esto fue de solo prueba de inicio 42:57
    
try {
    const response = await getCountryById(id);
    res.status(200).json(response);
   
} catch (error) {
    res.status(400).json(error = error.message)
}



};

module.exports = {
    countriesHandler,
    countriesDetailHandler,
    
}