'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('LoginCtrl',[ '$scope', '$location', 'Session', function ($scope, $location, Session) {
    $scope.login = function(){
      Session.updateSession($scope.username);
      $location.url('/');
    };
    $scope.cancel = function(){
      $location.url('/');
    }; 
  }]);
