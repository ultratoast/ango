'use strict';

/**
 * @ngdoc function
 * @name ngbpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngbpApp
 */
angular.module('ngbpApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
