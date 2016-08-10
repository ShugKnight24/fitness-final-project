var app = angular.module('fitnessApp');

app.controller("routineController",["$scope", function($scope){
// Selected Excercises Array
$scope.selectedExercises = [];
// Bodypart Array
$scope.bodyparts = [];
// Exercise description array
$scope.exerciseDescription = [];
// Array for objects of exercises the user can add
$scope.exercises =[
  {
    "bodypart":"Chest",
    "exerciseName":"Bench Press",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Chest",
    "exerciseName":"Incline Bench Press",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Chest",
    "exerciseName":"Dumbbell Press",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Chest",
    "exerciseName":"Cable Crossover",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Back",
    "exerciseName":"Barbell Rows",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Back",
    "exerciseName":"One-Arm Row",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Back",
    "exerciseName":"Pull Ups",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Back",
    "exerciseName":"Lat Pull Down",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Quads",
    "exerciseName":"Squats",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Quads",
    "exerciseName":"Leg Extensions",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Quads",
    "exerciseName":"Leg Extensions",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Hamstrings",
    "exerciseName":"Good Morning",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Hamstrings",
    "exerciseName":"Lying Leg Curl",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Hamstrings",
    "exerciseName":"Seated Leg Curl",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Over Head Press",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Side Laterals",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Rear delt fly",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Front Raise",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Up Right Row",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Face Pull",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Biceps",
    "exerciseName":"Standing Bar Curl",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Biceps",
    "exerciseName":"Supinated Dumbbell Curl",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Biceps",
    "exerciseName":"Hammer Curls",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Triceps",
    "exerciseName":"Rope Pushdown",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Triceps",
    "exerciseName":"Skull Crushers",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Triceps",
    "exerciseName":"Tricep Extensions",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Abs",
    "exerciseName":"Crunch",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Abs",
    "exerciseName":"Plank",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Obliques",
    "exerciseName":"Bicycle",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Obliques",
    "exerciseName":"Russian Twist",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Calves",
    "exerciseName":"Seated Calf Raise",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Calves",
    "exerciseName":"Standing Calf Raise",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Traps",
    "exerciseName":"Barbell Shrugs",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Traps",
    "exerciseName":"Dumbbell Shrugs",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Forearms",
    "exerciseName":"Wrist Curls",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Forearms",
    "exerciseName":"Farmers Carrys",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Glutes",
    "exerciseName":"Glute Bridge",
    "exerciseDescription": "Description",
    "selected":false
  },
  {
    "bodypart":"Glutes",
    "exerciseName":"Barbell Glute Bridge",
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
    $scope.addSelected = function(){
      for (var i=0; i<$scope.exercises.length;i++){
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
