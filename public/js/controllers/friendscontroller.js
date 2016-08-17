var app = angular.module('fitnessApp');

app.controller('friendsController', function($scope, dataService, dataStore) {

	// send user to compare with friend selected
	// $scope.compare = function(friendsProfiles, index) {
	// 	$location.path('compare');
	// };
	// delete button removes friend from friends list
	// $scope.deleteFriend = function(friendProfiles, index){
  //   	$scope.friendProfiles.splice(index, 1);
	// };
	
	$scope.deleteFriend = function(friend) {
		for (var i = 0; i < $scope.friendProfiles.length; i++) {
			if (angular.equals(friend, $scope.friendProfiles[i])) {
				$scope.friendProfiles.splice(i, 1);
				break;
			}
		}
		dataStore.storeFriendProfiles($scope.friendProfiles);
		$scope.friendProfiles = dataStore.getFriendProfiles();
	};

	$scope.friendProfiles = dataStore.getFriendProfiles();


});
