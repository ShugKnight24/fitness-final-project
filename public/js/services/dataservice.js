var app = angular.module('fitnessApp');

app.service('dataService', function($http) {
	this.getData = function(callback) {
		$http.get('../mock/shugdata.json')
		// keeping our options open
			.then(callback);
	};
});