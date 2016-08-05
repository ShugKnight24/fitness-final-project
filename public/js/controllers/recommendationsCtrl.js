var app = angular.module('fitnessApp');


app.controller('aboutCtrl', function($scope) {
	$scope.recommendations = [
			{
				source: "Mayo Clinic",
				subject: "High blood pressure",
				preview: " ",
				path: "http://www.mayoclinic.org/diseases-conditions/high-blood-pressure/basics/definition/con-20019580",

			},
			{

			},

	]
});