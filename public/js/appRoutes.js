var app = angular.module('fitnessApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/overview',
	{
		templateUrl: 'views/overview.html',
		controller: 'overviewCtrl.js'	
	})
	.when ('/stats',
	{
		templateUrl: 'views/stats.html',
		controller: 'statsCtrl.js'
	})
	.when ('/recommendations',
	{
		templateUrl: 'views/recommendations.html',
		controller: 'recommendationsCtrl.js'
	})
	.otherwise({ redirectTo: 'overview.html'})
});