'use strict';

angular.module('environmentWashApp')
  .factory('Project',['$resource',
    function($resource) {
      return $resource('testdata/projects/:projectId.json', {}, {
        query: {method: 'GET', params: {projectId:'projects'}, isArray:true }
      });
    }
  ]);