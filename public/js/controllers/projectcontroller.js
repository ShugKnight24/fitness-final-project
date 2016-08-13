var app = angular.module('fitnessApp');

app.controller('projectController', function($scope) {
  console.log('oh hey');
// $scope.slides = [
// 	{
// 		title: "Loving your fitbit?",
//         content: "Unwilling to move if you're not wearing it? You can take it to the next level with FitKnit - an interactive app to increase your motivation to get and stay fit.",
//         image: {
//         	path: "https://pbs.twimg.com/profile_images/684426513773531136/Tk5cdz9f.png",
//         	alt: "fitbit",
//         	link: "https://www.fitbit.com"
//         }
// 	},
// 	{
// 		title: "How it Works",
//         content1: "FitKnit knits together your fitbit statistics and motivational psychology, primarily:",
//         span1: "Self-monitoring:", 
//         content:"viewing how many steps you're taking in an average day",
//         image: {
//         	path: "images/two_step_grant.jpg",
//         	alt: "Only two steps today? I better get moving! Grant Chirpus says."
//         }
// 	},
// 	{
// 		title: "",
// 		span1: "Cognitive restructuring:",
//         content: "self-talk in the style of: 'I can do this!' instead of 'wow, I'm sick of exercising, and I feel like a big blob and all my steps are between the couch and the bathroom.'",
//         image: {
//         	path: "images/positivelyGrant.jpg",
//         	alt: "Grant Chirpus says, My thighs are killing me from all those stairs yesterday. Let's do it again!"
//         }
// 	},
// 	{
// 		title: "",
// 		span1: "Modeling:",
//         content: "learning by watching another person perform the healthy behaviors you aspire to",
//         image: {
//         	path: "images/like_ray_grant.jpg",
//         	alt: "Grant Chirpus is working on his arms today - he wants to look like Ray."
//         }
// 	},
// 	{
// 		title: "",
// 		span1: "Goal-setting:",
//         content: "developing concrete, specific steps to take toward a goal",
//         image: {
//         	path: "images/grants_plan.jpg",
//         	alt: "Grant Chirpus has an exercise plan."
//         }
// 	},
// 	{
// 		title: "Stretch goals",
//         content: "The 'friends' in our app are pre-populated. We'd like to make this the real deal with a backend that brings in your real friends.",
//         image: {
//         	path: "",
//         	alt: ""
//         }
// 	}

// ];

  $scope.myInterval = 10000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    slides.push({
      image: ["https://pbs.twimg.com/profile_images/684426513773531136/Tk5cdz9f.png", "images/two_step_grant.jpg", "images/like_ray_grant.jpg", "images/grants_plan.jpg"][slides.length % 4],
      text: ["Loving your fitbit?", "How it Works", "Cognitive restructuring:", "Modeling:"][slides.length % 4],
      id: currIndex++
    });

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }
};

});