const { Activity } = require('../db.js');

const getActivities = async () => {
    try {
        const allActivities = await Activity.findAll();
        return allActivities;
    } catch (error) {
        return {error: error.message};
    }

}

module.exports = {
    getActivities
}