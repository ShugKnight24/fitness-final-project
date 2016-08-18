var app = angular.module('fitnessApp');

app.controller("barController", function ($scope, dataStore) {
  
  $scope.populateBar = function() {
    $scope.adsSeries = ['Average Daily Steps'];
    $scope.sSeries = ["Today's Steps"];
    $scope.amSeries = ['Active Minutes'];
    $scope.rhrSeries = ['Resting Heart Rate'];
    $scope.labels = [];
    $scope.adsData = [];
    $scope.sData = [];
    $scope.amData = [];
    $scope.rhrData = [];
    $scope.user = dataStore.getUserProfile();
    $scope.labels.push($scope.user.data.user.displayName);
    $scope.adsData.push($scope.user.data.user.averageDailySteps);
    $scope.sData.push($scope.user.activities.summary.steps);
    $scope.amData.push($scope.user.activities.summary.fairlyActiveMinutes + $scope.user.activities.summary.lightlyActiveMinutes + $scope.user.activities.summary.veryActiveMinutes);
    $scope.rhrData.push($scope.user.heartrate["activities-heart"]["0"].value.restingHeartRate);
    $scope.friendProfiles = dataStore.getFriendProfiles();
    for (var i = 0; i < $scope.friendProfiles.length; i++) {
      $scope.labels.push($scope.friendProfiles[i].data.user.displayName);
      $scope.adsData.push($scope.friendProfiles[i].data.user.averageDailySteps);
      $scope.sData.push($scope.friendProfiles[i].activities.summary.steps);
      $scope.amData.push($scope.friendProfiles[i].activities.summary.fairlyActiveMinutes + $scope.user.activities.summary.lightlyActiveMinutes + $scope.user.activities.summary.veryActiveMinutes);
      $scope.rhrData.push($scope.friendProfiles[i].heartrate["activities-heart"]["0"].value.restingHeartRate);
    }
  };
  
  $scope.populateBar();
});
