var app = angular.module('fitnessApp');

app.controller('friendsController', ["$scope", function($scope) {
// fake friends
	$scope.friends = function(user) {
		// stuff here
	}

	
// search for friend
$scope.findFriend = function() {
	// code goes here
};
// delete button removes friend from friends list
$scope.deleteFriend = function(friends, index){
    friends.splice(index, 1);
};

$scope.friendProfiles = [];

dataService.getData(function(response) {
	$scope.user = response.data;
	recursiveRequest($scope.user.friends.length - 1);
});

function recursiveRequest(i) {
	if(i >= 0) {
		$http.get('mock/' + $scope.user.friends[i] + '.json').then(function(response) {
			$scope.friendProfiles.push(response.data);
			recursiveRequest(i-1);
		});
	}
}

}]);
