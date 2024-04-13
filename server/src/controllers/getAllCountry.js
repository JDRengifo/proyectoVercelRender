const {Country, Activity } = require('../db');

const getAllCountry = async ()=>{
    const allCountryBDD = await Country.findAll({
       // -1 include: Activity,
        //? -2 include: {
        //?     model: Activity, attributes: ["nombre", "dificultad", "duracion", "temporada"],
        //? },
        include: {
            model: Activity, 
            attributes: ["nombre", "dificultad", "duracion", "temporada"],
            through:{
                attributes: [],
            },
        },
});

    return allCountryBDD;
}

module.exports = {
    getAllCountry,
}