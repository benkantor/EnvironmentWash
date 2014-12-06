'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:CreateProjectCtrl
 * @description
 * # CreateProjectCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('CreateProjectCtrl', ['$scope', '$location', '$http', '$cookieStore', function ($scope, $location,$http,$cookieStore) {
    $('[name="project-date"]').datepicker();
    $scope.createProject = function() {
      var userdata = $cookieStore.get('userdata');
      var project = {
        name: $scope.name,
        date: $scope.date,
        startTime: $scope.start,
        endTime: $scope.end,
        location: $scope.location,
        description: $scope.description,
        createdBy: (userdata.first_name + ' ' + userdata.last_name),
        volunteers: [],
        comments: []
      };
      $http.post('http://104.131.177.161:3000/api/project',project).
        success(function (data,status,headers,config) {
          $location.url('/');
        }).
        error(function (data,status,headers,config){
        });
    };

    $scope.cancel = function() {
      $location.url('/');
    };
  }]);
