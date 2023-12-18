const mongoose = require('mongoose');

const vitalSchema = new mongoose.Schema({
  patientID: String,
  bloodPressure: String,
  temperature: String,
  pulse: String,
  spO2: String,
});

const Vital = mongoose.model('Vital', vitalSchema);

module.exports = Vital;
