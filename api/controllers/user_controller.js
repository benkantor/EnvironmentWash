'use strict';
var mongoose = require('mongoose');
var UserModel = mongoose.model("User");


module.exports = {

  getUsers: function(req,res,next) {
    UserModel.find(function(err,users){
      if (!err) {
        return res.send(users);
      } else {
        return handleError(err);
      }
    })
  },

  getUserByUsername: function(req,res,next) {
    var uname = req.params.username;
    UserModel.find({username: uname}, function(err,user){
      if (!err) {
        return res.send(user);
      } else {
        return handleError(err);
      }
    })
  },

  createUser: function(req,res,next) {
    var newUser = new UserModel(req.body);
    newUser.save( function (err,user,numAffected){
      if (!err) {
        return res.send("Success");
      } else {
        return handleError(err);
      }
    })
  },

  updateUser: function(req,res,next) {
    UserModel.update({email: req.body.email}, req.body, function (err,numAffected,response){
      if (! err) {
        return res.send(response);
      } else {
        return handleError(err);
      }
    });
  },

  deleteUser: function(req,res,next) {
    UserModel.remove(req.body, function (err){
      if (!err) {
        return res.send("Success");
      } else {
        return handleError(err);
      }
    })
  }

};