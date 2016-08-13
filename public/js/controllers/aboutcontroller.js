var app = angular.module('fitnessApp');

app.controller('aboutController',["$scope", function($scope) {
	$scope.developers = [
			{
				name: "Shugmi Shumunov",
				motto: "Life long learner, aspiring web developer. Interested in all things VR.",
				image: {
					path: "http://www.grandcircus.co/perch/resources/shugsphoto.jpg",
					altText: "Shug at Grand Circus"
					},
				github: {
					path: "https://github.com/ShugKnight24",
					altText: "Shugmi's Github"
					},
				linkedin: {
					path:"https://www.linkedin.com/in/shugmishumunov",
					altText: "Shugmi's LinkedIn"
					},
				content: "A little more about Shug's motivation here.",
			},
			{
				name: "Karen Langner",
				motto: "Front-end web developer looking for problems to solve.",
				image: {
					path: "http://www.grandcircus.co/perch/resources/img9584-1.jpg",
					altText: "Karen at Grand Circus"
					},
				github: {
					path: "https://github.com/krenabeth",
					altText:"Karen's Github"
					},
				linkedin: {
					path:"https://www.linkedin.com/in/karen-langner",
					altText:"Karen's 's LinkedIn"
					},
				content: "A little more about Karen's motivation here.",
			},
			{
				name: "Syed Rashid",
				motto: "Aspiring developer with a mathematics background.",
				image: {
					path: "http://www.grandcircus.co/perch/resources/img9593.jpg",
					altText: "Syed at Grand Circus"
					},
				github: {
					path: "https://github.com/rashidindigo",
					altText: "Syed's Github"
					},
				linkedin: {
					path:"https://www.linkedin.com/in/syed-rashid",
					altText: "Syed's LinkedIn"
					},
				content: "A little more about Syed's motivation here.",
			}
		];
}]);
