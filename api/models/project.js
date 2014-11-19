'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  name: String,
  date: Date,
  startTime: String,
  endTime: String,
  location: String,
  description: String,
  createdBy: String,
  volunteers: [{name: String}],
  comments: [{created: Date, comment: String, createdBy: String}]
});

mongoose.model("Project", projectSchema);