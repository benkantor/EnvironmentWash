'use strict';

/**
 * @ngdoc overview
 * @name environmentWashApp
 * @description
 * # environmentWashApp
 *
 * Main module of the application.
 */
angular
  .module('environmentWashApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/create-project', {
        templateUrl: 'views/create-project.html',
        controller: 'CreateProjectCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
