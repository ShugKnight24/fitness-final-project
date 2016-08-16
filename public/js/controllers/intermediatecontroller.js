var app = angular.module('fitnessApp');

app.controller('intermediateController', ["$scope", function($scope) {
  $scope.intermediateArticles = [
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
      "title":"“”",
      "url":""
    },
    {
      "author":"Alex Viada",
      "title":"“Hybrid Athlete”",
      "url":"http://store.jtsstrength.com/products/the-hybrid-athlete"
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
}]);
