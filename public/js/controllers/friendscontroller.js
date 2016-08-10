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

}]);
