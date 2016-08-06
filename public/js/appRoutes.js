var app = angular.module('fitnessApp');

app.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'views/feed.html',
		controller: 'feedController'
	})
	.when ('/404',
	{
		templateUrl: 'views/404.html',
		controller: '404Controller'
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
	.when ('/feed',
	{
		templateUrl: 'views/feed.html',
		controller: 'feedController'
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
	.otherwise({ redirectTo: '/404'})
});
