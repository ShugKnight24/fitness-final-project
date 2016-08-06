var app = angular.module('fitnessApp');

app.controller('friendsController', ["$scope", function($scope) {

// search for friend- typing friend's name sorts and brings friend to top of list, submit takes to friends page(?) if match
$scope.findFriend = function() {
	// code goes here
	$scope.friends = [
		{
		name: "John",
		imagePath: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
		altText: "John's game face",
		info: "John chased his tail 72,000 steps today.",
		profilePath: "http://www.funnydogsite.com/"	
		}
	];


};

// delete button removes friend from friends list
$scope.deleteFriend = function() {
	$scope.friends.shift($scope.friend);
};


}]);
