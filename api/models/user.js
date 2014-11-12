'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  email: String,
  phone_number: Number,
  password: String
});

mongoose.model("User", userSchema);