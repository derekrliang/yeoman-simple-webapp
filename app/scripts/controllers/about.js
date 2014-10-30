'use strict';

/**
 * @ngdoc function
 * @name simpleWebappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleWebappApp
 */
angular.module('simpleWebappApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
