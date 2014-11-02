'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('SignupCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.createUser = function(user) {
      $location.url('/');
    };

    $scope.cancel = function() {
      $location.url('/'); // TODO: Should this go to index or back a page?
    };
  }]);
