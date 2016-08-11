var app = angular.module('fitnessApp');

app.controller("routineController",["$scope", function($scope){
// Selected Excercises Array
$scope.selectedExercises = [];
// Bodypart Array
$scope.bodyparts = [];
// Array for objects of exercises the user can add
$scope.exercises =[
  {
    "bodypart":"Chest",
    "exerciseName":"Barbell Bench Press",
    "selected":false
  },
  {
    "bodypart":"Chest",
    "exerciseName":"Incline Bench Press",
    "selected":false
  },
  {
    "bodypart":"Chest",
    "exerciseName":"Dumbbell Bench Press",
    "selected":false
  },
  {
    "bodypart":"Chest",
    "exerciseName":"Cable Crossover",
    "selected":false
  },
  {
    "bodypart":"Back",
    "exerciseName":"Barbell Bent Over Row",
    "selected":false
  },
  {
    "bodypart":"Back",
    "exerciseName":"Dumbbell One-Arm Row",
    "selected":false
  },
  {
    "bodypart":"Back",
    "exerciseName":"Wide Grip Pull Ups",
    "selected":false
  },
  {
    "bodypart":"Back",
    "exerciseName":"Lat Pull Down",
    "selected":false
  },
  {
    "bodypart":"Lower Back",
    "exerciseName":"Barbell Deadlift",
    "selected":false
  },
  {
    "bodypart":"Lower Back",
    "exerciseName":"Body Weight Hyperextensions",
    "selected":false
  },
  {
    "bodypart":"Quads",
    "exerciseName":"Barbell Squats",
    "selected":false
  },
  {
    "bodypart":"Quads",
    "exerciseName":"Leg Extensions",
    "selected":false
  },
  {
    "bodypart":"Quads",
    "exerciseName":"Leg Press",
    "selected":false
  },
  {
    "bodypart":"Hamstrings",
    "exerciseName":"Good Morning",
    "selected":false
  },
  {
    "bodypart":"Hamstrings",
    "exerciseName":"Lying Leg Curl",
    "selected":false
  },
  {
    "bodypart":"Hamstrings",
    "exerciseName":"Seated Leg Curl",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Barbell Over Head Press / Military Press",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Dumbbell Side Laterals",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Dumbbell Rear Delt fly",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Dumbbell Front Raise",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Barbell Upright Row",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Rope Face Pull",
    "selected":false
  },
  {
    "bodypart":"Biceps",
    "exerciseName":"Barbell Curl",
    "selected":false
  },
  {
    "bodypart":"Biceps",
    "exerciseName":"Supinated Dumbbell Curl",
    "selected":false
  },
  {
    "bodypart":"Biceps",
    "exerciseName":"Dumbbell Hammer Curls",
    "selected":false
  },
  {
    "bodypart":"Triceps",
    "exerciseName":"Tricep Pushdown",
    "selected":false
  },
  {
    "bodypart":"Triceps",
    "exerciseName":"Barbell Skull Crushers",
    "selected":false
  },
  {
    "bodypart":"Triceps",
    "exerciseName":"Dumbbell Tricep Kickback",
    "selected":false
  },
  {
    "bodypart":"Abs",
    "exerciseName":"Crunch",
    "selected":false
  },
  {
    "bodypart":"Abs",
    "exerciseName":"Rope Crunch",
    "selected":false
  },
  {
    "bodypart":"Abs",
    "exerciseName":"Plank",
    "selected":false
  },
  {
    "bodypart":"Obliques",
    "exerciseName":"Twisting Incline Sit-Up",
    "selected":false
  },
  {
    "bodypart":"Obliques",
    "exerciseName":"Russian Twist",
    "selected":false
  },
  {
    "bodypart":"Calves",
    "exerciseName":"Seated Calf Raise",
    "selected":false
  },
  {
    "bodypart":"Calves",
    "exerciseName":"Machine Standing Calf Raise",
    "selected":false
  },
  {
    "bodypart":"Traps",
    "exerciseName":"Barbell Shrugs",
    "selected":false
  },
  {
    "bodypart":"Traps",
    "exerciseName":"Dumbbell Shrugs",
    "selected":false
  },
  {
    "bodypart":"Forearms",
    "exerciseName":"Barbell Wrist Curls",
    "selected":false
  },
  {
    "bodypart":"Forearms",
    "exerciseName":"Farmer's Walk",
    "selected":false
  },
  {
    "bodypart":"Glutes",
    "exerciseName":"Glute Bridge",
    "selected":false
  },
  {
    "bodypart":"Glutes",
    "exerciseName":"Barbell Glute Bridge",
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
        if ($scope.exercises[i].selected){
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
