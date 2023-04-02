const { Router } = require('express');
const { getAllCountries } = require('../controllers/getAllCountries');
const { getIdCountry } = require('../controllers/GetIdCountry');
const { getName } = require('../controllers/getName');
const { postActivities } = require('../controllers/postActivities');
const { getActivities } = require('../controllers/getActivities');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/countries', async (req, res) => {
  try {
    const allCountries = await getAllCountries();
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get('/countries/name', async (req, res) => {
  // para buscar name?name=Albania

  const { name } = req.query;

  try {
    const response = await getName(name);
    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
router.get('/countries/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getIdCountry(id);
    // console.log(result)
    if (!result) throw new Error('No existe el ID');

    const findId = {
      id: result.id,
      name: result.name,
      image: result.image,
      continent: result.continent,
      capital: result.capital,
      subregion: result.subregion,
      area: result.area,
      population: result.population,
      activity: result.activity,
    };
    return res.status(200).json(findId);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.post('/activities', async (req, res) => {
  const { name, difficult, duration, season, countryName } = req.body;
  try {
    const result = await postActivities(name, difficult, duration, season, countryName);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

router.get('/activities', async (req, res) => {
  try {
    const allActivities = await getActivities();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
