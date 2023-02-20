const { activities } = require('../db.js');

const getActivities = async () => {
    try {
        const allActivities = await activities.findAll();
        return allActivities;
    } catch (error) {
        return {error: error.message};
    }

}

module.exports = {
    getActivities
}