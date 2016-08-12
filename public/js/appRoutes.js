var app = angular.module('fitnessApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'views/motivation.html',
		controller: 'motivationController'
	})
	.when ('/404',
	{
		templateUrl: 'views/404.html',
		controller: '404Controller'
	})
	.when('/bodymap',
	{
		templateUrl: 'views/bodymap.html',
		controller: 'bodyMapController'
	})
	.when('/feed',
	{
		templateUrl: 'views/feed.html',
		controller: 'feedController'
	})
	.when('/about',
	{
		templateUrl: 'views/about.html',
		controller: 'aboutController'
	})
	.when ('/challenges',
	{
		templateUrl: 'views/challenges.html',
		controller: 'challengesController'
	})
	.when ('/compare',
	{
		templateUrl: 'views/compare.html',
		controller: 'compareController'
	})
	.when ('/data',
	{
		templateUrl: 'views/data.html',
		controller: 'dataController'
	})
	.when ('/exercise',
	{
		templateUrl: 'views/exercise.html',
		controller: 'exerciseController'
	})
	.when ('/exerciselibrary',
	{
		templateUrl: 'views/exerciselibrary.html',
		controller: 'exerciseLibraryController'
	})
	.when ('/friends',
	{
		templateUrl: 'views/friends.html',
		controller: 'friendsController'
	})
	.when ('/leaderboard',
	{
		templateUrl: 'views/leaderboard.html',
		controller: 'leaderboardController'
	})
	.when('/motivation',
	{
		templateUrl: 'views/motivation.html',
		controller: 'motivationController'
	})
	.when ('/project',
	{
		templateUrl: 'views/project.html',
		controller: 'projectController'
	})
	.when ('/recommendations',
	{
		templateUrl: 'views/recommendations.html',
		controller: 'recommendationsController'
	})
	.when('/routine',
	{
		templateUrl: 'views/routine.html',
		controller: 'routineController'
	})
	.otherwise({ redirectTo: '/'})
});
