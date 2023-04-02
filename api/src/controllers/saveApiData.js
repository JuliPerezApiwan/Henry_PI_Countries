const axios = require('axios');
const { Country } = require('../db.js');

const getApidata = async () => {
  try {
    let countries = [];

    let apiData = await axios('https://restcountries.com/v3/all');
    countries.push(apiData);

    countries = (await Promise.all(countries)).map((c) =>
      c.data.map((res) => {
        return {
          id: res.cca3,
          name: res.name.common,
          image: res.flags[1],
          continent: res.continents[0],
          capital: res.capital ? res.capital[0] : null,
          subregion: res.subregion,
          area: res.area,
          population: res.population,
        };
      })
    );

    let allCountries = [];
    countries.map((c) => {
      allCountries = allCountries.concat(c);
    });

    //console.log(allCountries)
    return allCountries;
  } catch (error) {
    return { error: error.message };
  }
};

const saveApiData = async () => {
  try {
    const allCountries = await getApidata();
   

    await Country.bulkCreate(allCountries);
 //console.log(allCountries)
    return allCountries;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  getApidata,
  saveApiData,
};
