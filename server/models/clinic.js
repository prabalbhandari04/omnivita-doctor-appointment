const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;


// new ClinicSchema object for login purposes
const ClinicSchema = new Schema({
  clinicname: {
    type: String,
    trim: true,
    required: 'Clinic name is required',
  },
  address: {
    type: String,
    trim: true,
  },
  // `city` must be of type String
  city: {
    type: String,
    trim: true,
  },
  // `state` must be of type String
  state: {
    type: String,
    trim: true,
    // required: 'State is Required',
  },
  // `phone` must be of type String
  phone: {
    type: Number,
    trim: true,
    match: /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/,
    // required: 'Phone is Required',
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

// This creates our model from the above schema, using mongoose's model method

const Clinic = mongoose.model('Clinic', ClinicSchema);

// Export the Clinic model
module.exports = Clinic;
