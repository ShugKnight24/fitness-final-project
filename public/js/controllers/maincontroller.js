var app = angular.module('fitnessApp');

app.controller('mainController', function($scope, $http, dataService, dataStore) {
  
  $scope.allUsers = ['4VKLDW', '220RAY', '323CHE', '444GRT', '565LAN', '656JOH', '767MRC', '888TRF'];
  $scope.friendProfiles = [];
  
  function recursiveRequest(i) {
    if(i >= 0) {
      $http.get('mock/' + $scope.allUsers[i] + '.json').then(function(response) {
        $scope.friendProfiles.push(response.data);
        recursiveRequest(i-1);
      });
    }
  }

  dataService.getData(function(response) {
    $scope.mainResponse = response;
    if (fragment['user_id']) {
      $http.get('mock/' + fragment['user_id'] + '.json').then(function(response) {
        $scope.user = response.data;
        $scope.user.data = $scope.mainResponse.data;
        dataService.getActivities(function(response) {
          $scope.user.activities = response.data;
        });
        dataService.getHeartRate(function(response) {
          $scope.user.heartrate = response.data;
        });
        dataService.getSleep(function(response) {
          $scope.user.sleep = response.data;
        });
        $scope.user.activities
      });
      recursiveRequest($scope.allUsers.length - 1);
    } else {
      $scope.user = response.data;
      recursiveRequest($scope.allUsers.length - 1);
    }
    dataStore.storeUserProfile($scope.user);  
	});
  
  
  dataStore.storeUserProfile($scope.user);
  dataStore.storeFriendProfiles($scope.friendProfiles);
  
});
