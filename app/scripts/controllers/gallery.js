'use strict';

/**
 * @ngdoc function
 * @name appAngularApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the appAngularApp
 */
angular.module('appAngularApp').controller('GalleryCtrl', function ($scope, Lightbox) {
  $scope.images = [
    {
      'url': 'images/gallery/1.jpg',
      'caption': 'Optional caption',
      'thumbUrl': 'images/gallery/thumb1.jpg' // used only for this example
    },
    {
      'url': 'images/gallery/2.jpg',
      'thumbUrl': 'images/gallery/thumb2.jpg'
    },
    {
      'url': 'images/gallery/3.jpg',
      'thumbUrl': 'images/gallery/thumb3.jpg'
    }
  ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});