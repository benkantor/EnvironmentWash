'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
  title: String,
  date: Date,
  location: String,
  createdBy: String,
  volunteers: [String],
  comments: [{created:date, comment:String, createdBy:String}]
});

mongoose.model("Project", projectSchema);