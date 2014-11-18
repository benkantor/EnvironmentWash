'use strict';

angular.module('environmentWashApp')
  .controller('ProjectCtrl', ['$scope', '$routeParams','Project', '$location', '$anchorScroll',
    function ($scope,$routeParams,Project, $location, $anchorScroll) {
      $scope.project = Project.get({projectId: $routeParams.projectId}, function() {});

      $scope.gotoCommentbox = function() {
        if ($location.hash() === 'add-a-comment') {
          $anchorScroll();
        } else {
          $location.hash('add-a-comment');
        }

      };
    }
  ]);
