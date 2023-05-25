const mongoose = require('mongoose');
const Weather = require('../models/weather');

module.exports = {};

module.exports.searchWeather = async (location) => {
  try {
    const weather = await Weather.find(
      { $text: { $search: location } },
      { score: { $meta: 'textScore' } }
    ).sort({ score: { $meta: 'textScore' } });

    return weather.length
      ? weather[0]
      : { name: 'Other', temperature: 'not available' };
  } catch (error) {
    throw new Error(error);
  }
};

class BadDataError extends Error {}
module.exports.BadDataError = BadDataError;
