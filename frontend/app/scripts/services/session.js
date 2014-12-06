'use strict';

/**
 * @ngdoc service
 * @name environmentWashApp.Session
 * @description
 * # Session
 * Service in the environmentWashApp.
 */
angular.module('environmentWashApp')
  .factory('Session', ['$http', '$cookieStore', function Session($http,$cookieStore) {
    var session = {
      loggedIn: ($cookieStore.get('loggedIn') || false),
      userdata: ($cookieStore.get('userdata') || {}),
      updateSession: function (username){
        var query = 'http://104.131.177.161:3000/api/user/' + username;
        $http.get(query).
          success(function (data){
            $cookieStore.put('userdata', data[0]);
            session.userdata = data[0];
            $cookieStore.put('loggedIn', JSON.stringify(true));
            session.loggedIn = true;
          }).
          error(function (){
            session.userdata = {state: 'error'};
          });
      },
      logout: function (){
        $cookieStore.put('loggedIn',JSON.stringify(false));
        $cookieStore.put('userdata',{});
        session.loggedIn = false;
        session.userdata = {};
      }
    };
    return session;
  }]);
