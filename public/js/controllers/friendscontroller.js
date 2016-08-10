var app = angular.module('fitnessApp');

app.controller('friendsController', ["$scope", function($scope) {
// fake friends
	$scope.friends = [
		{
			fullName: "Gil Daniels",
			avatar: "../images/gil.jpeg",
			displayName: "Sammie",
			strideLengthWalking: 20.60000000000001,
			averageDailySteps: "2000",
			features: {
            	exerciseGoal: true
        		},
			weight: "12"
		},
		{
			fullName: "John Dog",
			avatar: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			displayName: "Johnnie",
			strideLengthWalking: 30.60000000000001,
			averageDailySteps: "3000",
			features: {
            	exerciseGoal: false
        		},
			weight: "45"			
		},
		{
			fullName: "Alex Dog",
			avatar: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			displayName: "Lexie",
			strideLengthWalking: 30.60000000000001,
			averageDailySteps: "3000",
			features: {
            	exerciseGoal: true
        		},
			weight: "45"			
		},
		{
			fullName: "John Dog",
			avatar: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			displayName: "Johnnie",
			strideLengthWalking: 30.60000000000001,
			averageDailySteps: "3000",
			features: {
            	exerciseGoal: false
        		},
			weight: "45"			
		},
		{
			fullName: "John Dog",
			avatar: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			displayName: "Johnnie",
			strideLengthWalking: 30.60000000000001,
			averageDailySteps: "3000",
			features: {
            	exerciseGoal: false
        		},
			weight: "45"			
		},
		{
			fullName: "John Dog",
			avatar: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			displayName: "Johnnie",
			strideLengthWalking: 30.60000000000001,
			averageDailySteps: "3000",
			features: {
            	exerciseGoal: false
        		},
			weight: "45"			
		},
		{
			fullName: "John Dog",
			avatar: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			displayName: "Johnnie",
			strideLengthWalking: 30.60000000000001,
			averageDailySteps: "3000",
			features: {
            	exerciseGoal: false
        		},
			weight: "45"			
		},
		{
			fullName: "John Dog",
			avatar: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			displayName: "Johnnie",
			strideLengthWalking: 30.60000000000001,
			averageDailySteps: "3000",
			features: {
            	exerciseGoal: false
        		},
			weight: "45"			
		},
		{
			fullName: "John Dog",
			avatar: "http://i720.photobucket.com/albums/ww206/skim4life21/sillydog.jpg",
			displayName: "Johnnie",
			strideLengthWalking: 30.60000000000001,
			averageDailySteps: "3000",
			features: {
            	exerciseGoal: false
        		},
			weight: "45"			
		}

	];
// search for friend
$scope.findFriend = function() {
	// code goes here
};
// delete button removes friend from friends list
$scope.deleteFriend = function(friends, index){
    friends.splice(index, 1);
};

}]);
