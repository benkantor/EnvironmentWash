'use strict';

angular.module('environmentWashApp')
  .controller('ProjectCtrl', ['$scope', '$routeParams','Project',
    function ($scope,$routeParams,Project) {
      $scope.project = Project.get({projectId: $routeParams.projectId}, function() {});
    }
  ]);