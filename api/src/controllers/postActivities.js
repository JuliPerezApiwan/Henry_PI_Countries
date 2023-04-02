const { Activity } = require('../db.js');
const { Country } = require('../db.js');

let id = 1;
const postActivities = async (name, difficult, duration, season, countryName = []) => {

  if (!name || !difficult || !duration || !season || !countryName) throw new Error('Me falta informacion');

  const validate = await Activity.findOne({
    where: {
      name : name
    }
  })

  if (validate) throw new Error ('La actividad turistica ya existe');
  
 

  if(!validate) {
    const newActivity = await Activity.create ({
    name: (name.charAt(0)).toUpperCase() + name.slice(1),
    difficult,
    duration,
    season,
    countryName,
    
  });
  

for (let i = 0; i < countryName.length; i++) {
  const element = countryName[i];
  //console.log(element)
  const country = await Country.findOne({
    where: {
      name: element
    }
  })
const res = await newActivity.addCountries(country)

}
    
return ("Actividad creada correctamente");
}
};

module.exports = {
  postActivities,
};
         