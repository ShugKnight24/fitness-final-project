var app = angular.module('fitnessApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/index.html',
	{
		templateUrl: 'views/overview.html',
		controller: 'overviewCtrl'	
	})
	.when ('/stats',
	{
		templateUrl: 'views/stats.html',
		controller: 'statsCtrl'
	})
	.when ('/recommendations',
	{
		templateUrl: 'views/recommendations.html',
		controller: 'recommendationsCtrl'
	})
	.otherwise({ redirectTo: '/'})
});