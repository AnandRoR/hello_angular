'use strict';

/**
 * @ngdoc overview
 * @name helloApp
 * @description
 * # helloApp
 *
 * Main module of the application.
 */
angular
  .module('helloApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/aboutus', {
        templateUrl: 'views/aboutus.html',
        controller: 'AboutusCtrl',
        controllerAs: 'aboutus'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
