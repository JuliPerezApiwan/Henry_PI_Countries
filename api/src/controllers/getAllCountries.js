const { Country } = require('../db.js')


const getAllCountries = async () => {
    try {
        const allCountries = await Country.findAll();
        //console.log(allCountries)
    
        return allCountries ;
    } catch (error) {
        return {error: error.message};
    }
}


module.exports = {
    getAllCountries
}