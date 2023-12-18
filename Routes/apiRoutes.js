const express = require('express');
const bodyParser = require('body-parser');
const Patient = require('../models/patientModel');
const Encounter = require('../models/encounterModel');
const Vital = require('../models/vitalModel');

const router = express.Router();
router.use(bodyParser.json());


// Create a new patient
router.post('/patients', async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).json(patient);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

// Create a new encounter
router.post('/encounters', async (req, res) => {
    try {
        const encounter = new Encounter(req.body);
        await encounter.save();
        res.status(201).json(encounter);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

// Create new vital information
router.post('/vitals', async (req, res) => {
    try {
        const vital = new Vital(req.body);
        await vital.save();
        res.status(201).json(vital);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

// Read all patients
router.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

// Read details of a specific patient
router.get('/patients/:patientID', async (req, res) => {
    try {
        const patient = await Patient.findOne({ patientID: req.params.patientID });
        res.status(200).json(patient);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
});

module.exports = router;
