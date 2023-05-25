const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  temperature: { type: Number, required: true },
});

// create text index
weatherSchema.index({ name: 'text' });

module.exports = mongoose.model('weather', weatherSchema);
