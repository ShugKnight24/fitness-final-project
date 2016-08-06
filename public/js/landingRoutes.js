var app = angular.module('fitnessApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'views/project.html',
		controller: 'projectController'
	})
	.when ('/about',
	{
		templateUrl: 'views/about.html',
		controller: 'aboutController'
	})
	.when('/project',
	{
		templateUrl: 'views/project.html',
		controller: 'projectController'
	})
	.otherwise({ redirectTo: '/'})
});
