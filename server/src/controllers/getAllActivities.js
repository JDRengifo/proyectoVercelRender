const { Activity } = require('../db')
   try {
       const getAllActivities = async ()=>{
           const getAllActivitiesBd = await Activity.findAll();
   
           return getAllActivitiesBd;
       };
    
   } catch (error) {
       res.status(400).json({error: error.message})
   } 


module.exports = {
    getAllActivities,
}