const { Country, Activity } = require('../db.js');

const getActivities = async () => {
    try {
        
        const allActivities = await Activity.findAll({
            include: {
                model: Country,
                attributes: ['name'], 
            }
        });
        //console.log(allActivities)
        return allActivities;
    } catch (error) {
        return {error: error.message};
    }

}

module.exports = {
    getActivities
}