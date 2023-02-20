const { country } = require('../db.js')


const getAllCountries = async () => {
    try {
        const allCountries = await country.findAll();
        return allCountries;
    } catch (error) {
        return {error: error.message};
    }
}


module.exports = {
    getAllCountries
}