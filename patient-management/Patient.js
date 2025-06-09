const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  contact: String,
  allergies: [String],
  medicalHistory: [String],
  prescriptions: [String],
  doctorNotes: [String],
  visitDates: [Date],
});

module.exports = mongoose.model('Patient', patientSchema);