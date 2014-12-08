'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('SearchCtrl', ['$scope','$routeParams', 'Project', '$location', function ($scope,$routeParams,Project,$location) {
    $scope.query = $routeParams.query;
    $scope.projects = Project.query();
    $scope.search = function(){
      var url = ('search?query=' + $scope.searchQuery);
      $location.url(url);
    };
  }]);
