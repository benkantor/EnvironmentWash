'use strict';

/**
 * @ngdoc function
 * @name environmentWashApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the environmentWashApp
 */
angular.module('environmentWashApp')
  .controller('MainCtrl', ['$scope','Project', 'Session',
    function ($scope,Project,Session) {
      $scope.projects = Project.query();
      $scope.session = Session;
    }
  ]);