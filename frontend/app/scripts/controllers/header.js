'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('HeaderCtrl', ['$scope','$cookieStore', '$location', '$route', 'Session', function ($scope,$cookieStore,$location, $route, Session) {
    $scope.session = Session;
    $scope.logout = function(){
      $scope.session.logout();
    };
    $scope.search = function(){
      var url = ('search?query=' + $scope.searchQuery);
      $location.url(url);
    };
  }]);
