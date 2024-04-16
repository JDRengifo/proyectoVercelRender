const { Country, Activity } = require('../db')

const getCountryById = async (id)=>{
    try {
        const country = await Country.findByPk(id.toUpperCase(), {
            include: {
                model: Activity, 
                attributes: ["nombre", "dificultad", "duracion", "temporada", "imagen"],
                through:{
                    attributes: [],
                },
            },
        });
        if(!country) throw Error("País no Registrado o no existe")
        return country;
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports ={
    getCountryById,
}