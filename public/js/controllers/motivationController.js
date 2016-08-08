var app = angular.module('fitnessApp');

app.controller('motivationController', function($scope, dataService) {
	dataService.getData(function(response) {
		$scope.user = response.data.user;
	});
});
