var app = angular.module('fitnessApp');

app.controller('friendsController', ["$scope", function($scope) {

// search for friend- typing friend's name sorts and brings friend to top of list, submit takes to friends page(?) if match
$scope.findFriend = function() {
	// code goes here
};

// delete button removes friend from friends list
$scope.deleteFriend = function() {
	$scope.friends.shift($scope.friend);
};


}]);
