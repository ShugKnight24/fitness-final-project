var app = angular.module('fitnessApp');

app.controller('aboutCtrl',["$scope", function($scope) {
	$scope.developers = [
			{
			name: "Shugmi Shumunov",
			motto: "Life long learner, aspiring web developer. Interested in all things VR.",
			image: {
				path: "http://www.grandcircus.co/perch/resources/shugsphoto.jpg",
				altText: "Shug at Grand Circus"
				},
			content: "A little more about Shug's motivation here.",
			comments: [
				{
				comment: "He really knows what he's doing!",
				commenter: "Karen"
				},
				{
				comment: "",
				commenter: ""
				},
				{
				comment: "",
				commenter: ""
				}
				],
			},
			{
			name: "Karen Langner",
			motto: "Front-end web developer looking for problems to solve.",
			image: {
				path: "http://www.grandcircus.co/perch/resources/img9584-1.jpg",
				altText: "Karen at Grand Circus"
				},
			content: "",
			comments: [
				{
				comment: "",
				commenter: ""
				},
				{
				comment: "",
				commenter: ""
				},
				{
				comment: "",
				commenter: ""
				}
				],
			},
			{
			name: "Syed Rashid",
			motto: "Aspiring developer with a mathematics background.",
			image: {
				path: "http://www.grandcircus.co/perch/resources/img9593.jpg",
				altText: "Syed at Grand Circus"
				},
			github: "",
			linkedin: "",
			content: "",
			comments: [
				{
				comment: "",
				commenter: ""
				},
				{
				comment: "",
				commenter: ""
				},
				{
				comment: "",
				commenter: ""
				}
				],
			},
			]
}]);
