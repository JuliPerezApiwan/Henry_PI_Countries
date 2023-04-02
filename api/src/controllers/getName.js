const { getApidata } = require('./saveApiData')

const getName = async (name) => {
  const allCountries = await getApidata()
  if (!name) throw new Error('No tengo raza para buscar');


  if(name.charAt(0) === name.charAt(0).toUpperCase()){ // si el primer caracter es mayus
   if(name.charAt(1) === name.charAt(1).toUpperCase()){ // si el segundo tambien es mayus
       name = name.toLowerCase() // lo paso todo a minus
        name = (name.charAt(0)).toUpperCase() + name.slice(1) // y paso a mayus la primera letra que es como aparecen
    }
  }   

  if(name.charAt(0) === name.charAt(0).toLowerCase()){ // si la primera es minuscula (gralmente lo que sigue es minus)
   name = (name.charAt(0)).toUpperCase() + name.slice(1) // paso a mayus la primera letra
  }
  const result = allCountries.filter((e) =>
  e.name.toLowerCase().includes(name.toLowerCase())
);
  
   
  
  if (!result) throw new Error('no tengo el name que me pasaste');
  else return result;
};

module.exports = {
  getName,
};