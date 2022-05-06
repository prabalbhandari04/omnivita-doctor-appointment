const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;
// new UserSchema object for login purposes
const UsersSchema = new Schema({
  firstname: {
    type: String,
    trim: true,
    // required: 'First name is required',
  },
  lastname: {
    type: String,
    trim: true,
    // required: 'Last name is required',
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    required: 'Password is Required',
    validate: [
      function (input) {
        return input.length >= 6;
      },
      'Password should be longer.',
    ],
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now,
  },
  doctors: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Doctor',
    },
  ],
  clinics: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Clinic',
    },
  ],
  healthLogs: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'HealthLog',
    },
  ],
  prescriptions: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Prescription',
    },
  ],
  attachments: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Attachement',
    },
  ],
  symptoms: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: 'Symptoms',
    },
  ],
});

// This creates our model from the above schema, using mongoose's model method
const Users = mongoose.model('Users', UsersSchema);

// Export the User model
module.exports = Users;
