'use strict';

/**
 * @ngdoc function
 * @name simpleWebappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleWebappApp
 */
angular.module('simpleWebappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
