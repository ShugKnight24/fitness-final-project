var app = angular.module('fitnessApp');

app.controller('friendsController', ["$scope", function($scope) {

	$scope.friends = [
		{
			name: "Samantha",
			imagePath: "http://www.becauseimacat.com/wp-content/uploads/2015/11/Cats-Gone-Crazy-22.jpg",
			altText: "Samantha enjoys karate",
			info: "Samantha's heart rate is 100 bpm",
			profilePath: "http://thefw.com/karate-cats/"
			steps: "2000",
			heartrate: "100",
			weight: "12"
		},
		{
			name: "John",
			imagePath: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			altText: "John's game face",
			info: "John chased his tail 72,000 times today.",
			profilePath: "http://www.funnydogsite.com/"	
			steps: "3000",
			heartrate: "100",
			weight: "45"
		}
	];
// search for friend- typing friend's name sorts and brings friend to top of list, submit takes to friends page(?) if match
$scope.findFriend = function() {
	// code goes here
};

// delete button removes friend from friends list

// $scope.deleteFriend = function() {
// 	// deletes first friend? want it to delete selected
// 	$scope.friends.shift($scope.friend);   
// };


$scope.deleteFriend = function(friends, index){
    friends.splice(index, 1);
};

// this is still not deleting the selected friend
// $scope.deleteFriend = function(item) {
//   var index = $scope.friends.indexOf(item);
//   $scope.friends.splice(index, 1);  
// };

}]);
