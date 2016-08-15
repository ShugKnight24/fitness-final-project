var app = angular.module('fitnessApp');

app.controller('beginnerController', ["$scope", function($scope) {

  $scope.beginnerArticles = [
    {
      "author":"Dick Talens",
      "title":"The Myth of Willpower and “Eat Less, Move More”",
      "url":"http://dicktalens.com/the-myth-of-willpower-and-eat-less-move-more/"
    },
    {
      "author":"Dick Talens",
      "title":"Fitness Is a Skill, Not a Talent: Here's How to Develop It",
      "url":"http://lifehacker.com/fitness-is-a-skill-not-a-talent-heres-how-to-develop-1651281013"
    },
    {
      "author":"Dick Talens",
      "title":"Weight Loss 101",
      "url":"http://dicktalens.com/weight-loss-for-beginners/"
    },
    {
      "author":"Dick Talens",
      "title":"Exercise vs. Diet: Which Is More Important for Weight Loss?",
      "url":"http://vitals.lifehacker.com/exercise-vs-diet-which-is-more-important-for-weight-l-1677532039"
    },
    {
      "author":"Mike Vacanti",
      "title":"How to Count Your Macros (A Comprehensive Guide)",
      "url":"http://www.ontheregimen.com/2013/10/15/how-to-count-your-macros-a-comprehensive-guide/"
    }
  ];
}]);
