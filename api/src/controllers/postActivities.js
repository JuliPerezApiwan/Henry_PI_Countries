const { activities } = require('../db.js');
const { country } = require('../db.js');

let id = 1
const postActivities = async (name, dificult, duration, station, ubication) => {
    if(!name || !dificult || !duration || !station) throw new Error ('me falta info');

    const newActivity = {
        id : id++,
        name,
        dificult,
        duration,
        station,
        ubication,
        
    }
    
   await activities.create(newActivity);
    
    const result = await country.findOne({
        where: {
            id: newActivity.ubication // ingresa el codigo de 3 letras
        }
    })
    result.activity = newActivity;
    
    await country.update({ "activity" : result.activity},{
        where: {
            id: result.id  
    }
    }) 

    // result.activity = newActivity;
    return result;
}

module.exports = {
    postActivities
}
/* -  ID. \*
-  Nombre. \*
-  Dificultad (número del 1 al 5). \*
-  Duración (en horas).
-  Temporada (Verano, Otoño, Invierno o Primavera). \* 
*/