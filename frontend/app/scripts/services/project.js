'use strict';

angular.module('environmentWashApp')
  .factory('Project',['$resource',
    function($resource) {
      return $resource('http://localhost:3000/api/project/:projectId', {}, {
        query: {method: 'GET', params: {projectId:''}, isArray:true }
      });
    }
  ]);