const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const User = require('./models/User')
const LocalStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

const PORT = process.env.PORT || 5003;
const app = express();

// Configure body parser for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Require all models
  const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


// Route for retrieving all Users from the db
app.get('/user', function (req, res) {
  // Find all Users
  db.User.find({})
    .then(function (dbUser) {
      // If all Users are successfully found, send them back to the client
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});


var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://viron:GqZkjxd283@cluster0.intj4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://viron:GqZkjxd283@cluster0.intj4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// configurePassport
const configurePassport = require('./controllers/passport')

const passport = configurePassport(app, mongoose, User)

// Add routes, both API and view
app.use(routes(passport, User));
app.use(require("express-session")({
  secret: "Rusty is a dog",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});