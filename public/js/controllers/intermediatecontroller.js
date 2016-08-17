var app = angular.module('fitnessApp');

app.controller('intermediateController', ["$scope", function($scope) {
  $scope.intermediateArticles = [
    {
      "author":"Adam Ali",
      "title":"“Fitness Fallibility”",
      "url":"http://physiqonomics.com/fitness-fallibility/"
    },
    {
      "author":"Adam Ali",
      "title":"“Tackling Strength and Muscle Loss During A Diet”",
      "url":"http://physiqonomics.com/dealing-muscle-strength-loss-diet/"
    },
    {
      "author":"Alexander Cortes",
      "title":"“Perspectives On Hypertrophy”",
      "url":"http://www.elitefts.com/education/perspectives-on-hypertrophy/"
    },
    {
      "author":"",
      "title":"“”",
      "url":""
    },
    {
      "author":"",
      "title":"“”",
      "url":""
    },
    {
      "author":"",
      "title":"“”",
      "url":""
    }
  ];
  $scope.intermediateBooks = [
    {
      "author":"Mike Israetel",
      "title":"“Scientific Principles Of Strength Training”",
      "url":"http://store.jtsstrength.com/products/scientific-principles-of-strength-training",
      "description":"Scientific Principles goes far beyond just giving you sets and reps to use for a few weeks or months, rather it will empower you with knowledge to create effective training programs and make informed answers to tough training problems for a lifetime."
    },
    {
      "author":"Alex Viada",
      "title":"“Hybrid Athlete”",
      "url":"http://store.jtsstrength.com/products/the-hybrid-athlete",
      "description":""
    },
    {
      "author":"Dr. Jen Case, Dr. Melissa Davis, Dr. Mike Israetel",
      "title":"“Renaissance Woman”",
      "url":"http://renaissanceperiodization.com/shop/renaissance-woman/",
      "description":"This book will give you a comprehensive step-by-step road map for creating your own fat loss, muscle gain, or maintenance diet, while maximizing your strength and sport performance.  Not only will you gain the capacity to construct your own diet, you will develop a broad understanding of the underlying nutrition principles.  In addition, you will find an in depth discussion of female specific physiological and psychological aspects of diet design and execution; from nutrition needs at different ages to needs during pregnancy and breast-feeding. Also included is information on how to deal and recover from diet fatigue, a problem many female athletes and body composition-conscious women have faced at some point. Finally, there is a detailed break down of how much water weight can safely be cut at different time points out from weigh in for sport competition without diminishing performance."
    },
    {
      "author":"",
      "title":"“”",
      "url":""
      "description":""
    },
    {
      "author":"",
      "title":"“”",
      "url":""
      "description":""
    }
  ];
}]);
