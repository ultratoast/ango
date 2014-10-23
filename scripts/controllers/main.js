'use strict';

/**
 * @ngdoc function
 * @name ngbpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngbpApp
 */
angular.module('ngbpApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
