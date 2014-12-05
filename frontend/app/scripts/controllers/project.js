'use strict';

angular.module('environmentWashApp')
  .controller('ProjectCtrl', ['$scope', '$routeParams','Project', '$location', '$anchorScroll', '$cookieStore', '$http', '$route', 'Session',
    function ($scope,$routeParams,Project, $location, $anchorScroll, $cookieStore, $http, $route, Session) {
      $scope.project = Project.get({projectId: $routeParams.projectId}, function() {});
      $scope.session = Session;
      $scope.volunteer = function(){
        var userdata = $cookieStore.get('userdata');
        var url = 'http://104.131.177.161:3000/api/project/'+$scope.project._id+'/volunteer';
        var data = {
          name: (userdata.first_name + ' ' + userdata.last_name)
        };
        $http.post(url,data).
          success(function (data,status,headers,config){
            $route.reload();
          }).
          error(function (data,status,headers,config){

          });        
      };

      $scope.comment = function(){
        var userdata = $cookieStore.get('userdata');
        var url = 'http://104.131.177.161:3000/api/project/'+$scope.project._id+'/comment';
        var data = {
          created: '2014-11-19',
          createdBy: (userdata.first_name + ' ' + userdata.last_name),
          comment: $scope.commentBody
        };
        $http.post(url,data).
          success(function (data,status,headers,config){
            $route.reload();
          }).
          error(function (data,status,headers,config){

          });        
      };

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
