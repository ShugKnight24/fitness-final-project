var app = angular.module('fitnessApp');

app.controller('compareController', ["$scope", "dataStore", function($scope, dataStore) {
  
  $scope.user = dataStore.getUserProfile();
  $scope.friendProfiles = dataStore.getFriendProfiles();
  
  
  
  
  
}]);
