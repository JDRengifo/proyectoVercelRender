const {Country, Activity } = require('../db');

    const getAllCountry = async ()=>{
        try {
            const allCountryBDD = await Country.findAll({
                include: {
                    model: Activity, 
                    attributes: ["nombre", "dificultad", "duracion", "temporada"],
                    through:{
                        attributes: [],
                    },
                },
                });
    
            return allCountryBDD;
            
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }

module.exports = {
    getAllCountry,
}