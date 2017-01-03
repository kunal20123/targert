(function () {

  'use strict';

  var myApp = angular.module('myApp', ['ngRoute', 'mgcrea.ngStrap']);
  myApp.constant('VERSION', "0.1");

  myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {templateUrl:'partials/HelloWorld.html', controller:'MyController'});
  });

  myApp.controller('MyController', function($scope) {
    $scope.greeting = "Hello, World!";
    $scope.newText = undefined;
    $scope.changeGreeting = function() {
      $scope.greeting = $scope.newText;
    };
  });

}());
