'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('SearchCtrl', ['$scope','$routeParams', 'Project', function ($scope,$routeParams,Project) {
    $scope.query = $routeParams.query;
    $scope.projects = Project.query();
  }]);
