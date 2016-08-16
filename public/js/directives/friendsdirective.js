var app = angular.module('fitnessApp');

app.directive("friendCard", function(){
  return {
    restrict: "AE",
    templateUrl: "templates/friendcard.html",
    replace: false
  };
}); 
