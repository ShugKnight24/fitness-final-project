var app = angular.module('fitnessApp');

app.controller('chirpusController', function($scope) {
  
  // set the default states for all slides
  $scope.first = true;
  $scope.second = false;
  $scope.third = false;
  $scope.fourth = false;
  $scope.fifth = false;
  $scope.sixth = false;

});
