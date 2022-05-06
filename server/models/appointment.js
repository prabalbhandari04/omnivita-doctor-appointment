const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// new AppointmentSchema object for login purposes
const AppointmentSchema = new Schema({
  date: {
    type: String,
    trim: true,
  },
  time: {
    type: String,
    trim: true,
  },
  // this is populated by dropdown
  doctor: {
    type: String,
    trim: true,
  },
  //this is reason for visit
  appointmentName: {
    type: String,
    trim: true,
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// Export the Appointment model
module.exports = Appointment;
