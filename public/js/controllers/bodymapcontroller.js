var app = angular.module('fitnessApp');

app.controller("bodyMapController",["$scope", function($scope){
// Selected Excercises Array
$scope.selectedExercises = [];
// Array for objects of exercises the user can add
$scope.execises =[
  {
    "exerciseName":"",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "exerciseName":"",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "exerciseName":"",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "exerciseName":"",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "exerciseName":"",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "exerciseName":"",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "exerciseName":"",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "exerciseName":"",
    "exerciseDescription": "Description",
    "selected":false
  }
];
  // Add new exercise to the list
    $scope.addNewExercise = function(){
      $scope.exercises.push({"exerciseName": $scope.newExercise, "selected":false});
      $scope.newExercise = "";
    };
  // When clear selected button is pressed
    $scope.clearSelected = function(){
      for (i=0; i<$scope.exercises.length;i++){
        if ($scope.exercises[i].completed){
        // First push selected exercises to another array
        $scope.selectedExercises.push($scope.exercises[i]);
        // Check if array is being filled by the object
        console.log($scope.selectedExercises);
      };
    }
      // Then remove them from the list
      $scope.exercises = $scope.exercises.filter(function(item){
        return !item.selected;
      });
    };
}]);
