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

      $scope.cancel = function() {
        // TODO: Name should be static
        angular.element('[name="comment-name"]').val('');

        angular.element('[name="comment-body"]').val('');
      };

      $scope.addComment = function(comment) {
        comment.date = new Date();

        // TODO: Hook to api
        console.log(comment);
      };
    }
  ]);
