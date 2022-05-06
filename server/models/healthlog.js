const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// new DoctorSchema object for login purposes
const HealthLogSchema = new Schema({
  date: {
    type: String,
    trim: true,
    required: 'First name is required',
  },
  doctor: {
    type: String,
    trim: true,
  },
  visitPurpose: {
    type: String,
    trim: true,
    required: 'Specialty is Required',
  },
  notes: {
    type: String,
    trim: true,
    required: 'Specialty is Required',
  }, 
  height: {
    type: Number,
    trim: true,
  },
  weight: {
    type: Number,
    trim: true,
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method
const HealthLog = mongoose.model('HealthLog', HealthLogSchema);

// Export the HealthLog model
module.exports = HealthLog;
