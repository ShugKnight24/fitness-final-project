var app = angular.module('fitnessApp');

app.controller('challengesController', ["$scope", function($scope, challengeFactory, $location) {

	$scope.createChallenge = function(challenge) {
		
	challengeFactory.saveObject(challenge);
	// go to challenge view
	$location.path('challenges');
	};

}]);
