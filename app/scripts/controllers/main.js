'use strict';

angular.module('simpleWebappApp')
  .controller('MainCtrl', function ($scope) {
        $scope.todos = [];

        // Submit callback
        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };

  });
