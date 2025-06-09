const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');
console.log(typeof Patient);
console.log(Patient.find);
// Add new patient
router.post('/', async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const saved = await newPatient.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all patients
router.get('/', async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

// Get single patient by ID
router.get('/:id', async (req, res) => {
  const patient = await Patient.findById(req.params.id);
  res.json(patient);
});

// Update patient
router.put('/:id', async (req, res) => {
  const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete patient
router.delete('/:id', async (req, res) => {
  await Patient.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});


module.exports = router;