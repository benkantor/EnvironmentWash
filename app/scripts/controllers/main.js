'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
