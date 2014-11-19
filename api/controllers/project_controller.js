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

  getProjectById: function (req,res,next){
    ProjectModel.find(
      {_id: req.params.id},
      function(err,projects) {
        if (!err){
          return res.send(projects[0]);
        } else {
          return handlerError(err);
        }
      }
    );
  },

  createProject: function(req,res,next) {
    var newProject = new ProjectModel(req.body);
    newProject.save( function (err,project,numAffected){
      if (!err) {
        return res.send("Success");
      } else {
        return handleError(err);
      }
    })
  },

  addComment: function(req,res,next) {
    ProjectModel.findByIdAndUpdate(
      req.params.id,
      {$push: {"comments": req.body}},
      {safe: true, upsert: true},
      function (err,model){
        if (!err){
          return res.send("Success");
        } else {
          return handleError(err);
        }
      }
    );
  },

  addVolunteer: function(req,res,next) {
    ProjectModel.findByIdAndUpdate(
      req.params.id,
      {$push: {"volunteers": req.body}},
      {safe: true, upsert: true},
      function (err,model){
        if (!err){
          return res.send("Success");
        } else {
          return handleError(err);
        }
      }
    );
  }

};