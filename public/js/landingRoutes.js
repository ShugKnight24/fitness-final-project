var app = angular.module('fitnessApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/project',
	{
		templateUrl: 'views/project.html',
		controller: 'projectCtrl.js'	
	})
	.when ('/about',
	{
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl.js'
	})
	.otherwise({ redirectTo: 'project.html'})
});