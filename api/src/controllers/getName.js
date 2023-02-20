const { country } = require('../db.js')

const getName = async (name) => {
    
        if(!name) throw new Error('no tengo name para buscar');

        const result = await country.findOne({
        where : {
            name : name
        }
        })
        if(!result) throw new Error('no tengo el name que me pasaste')
        else return result; 
       
    
    
}


module.exports = {
    getName,
}