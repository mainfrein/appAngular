'use strict';

/**
 * @ngdoc overview
 * @name appAngularApp
 * @description
 * # appAngularApp
 *
 * Main module of the application.
 */
angular
  .module('appAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'slick',
    'bootstrapLightbox'
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
      .when('/conctact', {
        templateUrl: 'views/conctact.html',
        controller: 'ConctactCtrl',
        controllerAs: 'conctact'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
