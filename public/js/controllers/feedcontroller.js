var app = angular.module('fitnessApp');

app.controller('feedController', ["$scope", function($scope) {

//Move to database when we have backend
  $scope.posts = [
    {
      title:"Post 1",
      author: "Author 1",
      image: {
        path:"#",
        alt:"alt text",
        imagecomments:["image comment 1", "image comment 2", "image comment 3"]
      },
      text: "Some Text",
      comments:["text comment 1", "text comment 2", "text comment 3"]
    },
    {
      title:"Post 2",
      author: "Author 2",
      image: {
        path:"#",
        alt:"alt text",
        imagecomments:["image comment 1", "image comment 2", "image comment 3"]
      },
      text: "Some Text",
      comments:["text comment 1", "text comment 2", "text comment 3"]
    },
    {
      title:"Post 3",
      author: "Author 3",
      image: {
        path:"#",
        alt:"alt text",
        imagecomments:["image comment 1", "image comment 2", "image comment 3"]
      },
      text: "Some Text",
      comments:["text comment 1", "text comment 2", "text comment 3"]
    }
  ];
}]);
