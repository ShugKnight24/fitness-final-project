var app = angular.module('fitnessApp');

app.controller('thankYouController', ["$scope", function($scope) {

}]);

$(document).ready(function(){
  // Materialize.toast(message, displayLength, className, completeCallback);
  Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast
});
