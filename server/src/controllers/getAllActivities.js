const { Activity } = require('../db')

const getAllActivities = async ()=>{
    const getAllActivitiesBd = await Activity.findAll();

    return getAllActivitiesBd;
};


module.exports = {
    getAllActivities,
}