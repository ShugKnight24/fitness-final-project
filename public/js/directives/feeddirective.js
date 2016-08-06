var app = angular.module('fitnessApp');

app.directive("post", function(){
  return {
    restrict: "AE",
    templateUrl: "templates/post.html",
    replace: false
  };
});
