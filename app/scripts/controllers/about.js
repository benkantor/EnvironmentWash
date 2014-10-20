'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
