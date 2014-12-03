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
    $scope.createProject = function() {
      var userdata = $cookieStore.get('userdata');
      var project = {
        date: $scope.date,
        startTime: $scope.start,
        endTime: $scope.end,
        location: $scope.location,
        description: $scope.description,
        createdBy: (userdata.first_name + ' ' + userdata.last_name),
        volunteers: [],
        comments: []
      };
      $http.post('http://localhost:3000/api/project',project).
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
