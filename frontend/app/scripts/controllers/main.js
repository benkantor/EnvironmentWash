'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('MainCtrl', ['$scope','Project',
    function ($scope,Project) {
      $scope.projects = Project.query();
    }
  ]);