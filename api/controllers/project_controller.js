'use strict';
var mongoose = require('mongoose');
var ProjectModel = mongoose.model("Project");


module.exports = {

  getProjects: function(req,res,next) {
    ProjectModel.find(function(err,projects){
      if (!err) {
        return res.send(projects);
      } else {
        return handleError(err);
      }
    })
  },

  createProject: function(req,res,next) {
    var newUser = new ProjectModel(req.body);
    newUser.save( function (err,project,numAffected){
      if (!err) {
        return res.send("Success");
      } else {
        return handleError(err);
      }
    })
  },

  addComment: function(req,res,next) {
    // ProjectModel.update({title: req.body.title}, req.body, function (err,numAffected,response){
    //   if (! err) {
    //     return res.send(response);
    //   } else {
    //     return handleError(err);
    //   }
    // }); Shit if I know what I'm doing...
  },

  addVolunteer: function(req,res,next) {
    // ProjectModel.update({title: req.body.title, function (err){
    //   if (!err) {
    //     return res.send("Success");
    //   } else {
    //     return handleError(err);
    //   }
    // }) Shit if I know what I'm doing...
  }

};