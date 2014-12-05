'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('SignupCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
    $scope.createUser = function() {
      var data = {
        first_name: $scope.first_name,
        last_name: $scope.last_name,
        username: $scope.username,
        email: $scope.email,
        phone_number: $scope.phone_number,
        password: $scope.password
      };
      $http.post('http://104.131.177.161:3000/api/user', data).
        success(function (data,status,headers,config){
          $location.url('/');
        }).
        error(function (data,status,headers,config){
        });
    };

    $scope.cancel = function() {
      $location.url('/'); // TODO: Should this go to index or back a page?
    };
  }]);
