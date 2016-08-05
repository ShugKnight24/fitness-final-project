var app = angular.module('fitnessApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'views/project.html',
		controller: 'projectCtrl'	
	})
	.when ('/about',
	{
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl'
	})
	.otherwise({ redirectTo: '/'})
});