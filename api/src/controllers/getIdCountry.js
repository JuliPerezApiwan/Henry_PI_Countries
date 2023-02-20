const { country } = require('../db.js')

const getIdCountry =  async (id) => {
    try {
        
        const result =  await country.findByPk(id.toUpperCase());
        // console.log(result)
        return result;
        } catch (error) {
        return {error: error.message};
        }
   };



module.exports = { getIdCountry }


