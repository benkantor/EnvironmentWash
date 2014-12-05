'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('MainCtrl', ['$scope','Project', 'Session','$http',
    function ($scope,Project,Session,$http) {
      $scope.projects = Project.query();
      $scope.session = Session;
      $http.get('http://104.131.177.161:3000/api/project').
        success(function (data,status,headers,config){
          $scope.local = data;
        }).
        error(function (data,status,headers,config){
          $scope.local = 'error';
        });
    }
  ]);