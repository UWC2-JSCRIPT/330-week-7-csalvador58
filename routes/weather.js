const { Router } = require('express');
const router = Router();

const weatherDAO = require('../daos/weather');
const weather = require('../models/weather');

router.get('/', async (req, res, next) => {
  // console.log('Test - get /')
  res.render('weather');
});

router.get('/location', async (req, res, next) => {
  // console.log('Test - get /location')
  const locationName = req.query.name;
  //   console.log('req.query.name');
  //   console.log(req.query.name);

  if (locationName) {
    try {
      const { name, temperature } = await weatherDAO.searchWeather(
        locationName
      );
      res.status(name === 'Other' ? 404 : 200).render('weatherLocation', {
        location: name,
        temperature: temperature,
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.redirect('/weather');
  }
});

module.exports = router;
