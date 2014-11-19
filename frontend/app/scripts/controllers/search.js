'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('SearchCtrl', ['$scope','$routeParams', function ($scope,$routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
