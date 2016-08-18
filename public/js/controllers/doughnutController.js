var app = angular.module('fitnessApp');

app.controller("doughnutController", function ($scope, dataStore) {

  $scope.populateDoughnut = function() {
    $scope.stepsLabels = ['Steps', 'Remaining steps'];
    $scope.activeMinutesLabels = ['Active minutes', 'Remaining active minutes'];
    $scope.caloriesLabels = ['Calories burned', 'Active calorie goal'];
    $scope.sleepLabels = ['Sleep', 'Sleep goal'];
    console.log($scope.$parent.user);
    $scope.currentUser = $scope.$parent.user;
    $scope.stepsData = [$scope.currentUser.activities.summary.steps, 10000 - $scope.currentUser.activities.summary.steps];
    $scope.activeMinutesData = [$scope.currentUser.activities.summary.fairlyActiveMinutes + $scope.currentUser.activities.summary.lightlyActiveMinutes + $scope.currentUser.activities.summary.veryActiveMinutes, 120 - ($scope.currentUser.activities.summary.fairlyActiveMinutes + $scope.currentUser.activities.summary.lightlyActiveMinutes + $scope.currentUser.activities.summary.veryActiveMinutes)];
    $scope.caloriesData = [$scope.currentUser.activities.summary.activityCalories, $scope.currentUser.activities.goals.caloriesOut - $scope.currentUser.activities.summary.caloriesBMR];
    $scope.sleepData = [$scope.currentUser.sleep.summary.totalMinutesAsleep / 60, 8 - $scope.currentUser.sleep.summary.totalMinutesAsleep / 60];
  };
  
  $scope.populateDoughnut();
});
