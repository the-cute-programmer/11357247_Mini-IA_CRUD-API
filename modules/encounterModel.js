const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patientID: String,
  dateAndTime: Date,
  encounterType: String,
});

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;