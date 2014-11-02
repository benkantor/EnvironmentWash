'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:CreateProjectCtrl
 * @description
 * # CreateProjectCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('CreateProjectCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.createProject = function(project) {
      $location.url('/');
    };

    $scope.cancel = function() {
      $location.url('/');
    };
  }]);
