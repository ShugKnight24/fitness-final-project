var app = angular.module('fitnessApp');

app.controller("exerciseLibraryController",["$scope", function($scope){
  $scope.exercises =[
    {
      "bodypart":"Chest",
      "exerciseName":"Bench Press",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Chest",
      "exerciseName":"Incline Bench Press",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Chest",
      "exerciseName":"Dumbbell Press",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Chest",
      "exerciseName":"Cable Crossover",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Back",
      "exerciseName":"Barbell Rows",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Back",
      "exerciseName":"One-Arm Row",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Back",
      "exerciseName":"Pull Ups",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Back",
      "exerciseName":"Lat Pull Down",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Quads",
      "exerciseName":"Squats",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Quads",
      "exerciseName":"Leg Extensions",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Quads",
      "exerciseName":"Leg Extensions",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Hamstrings",
      "exerciseName":"Good Morning",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Hamstrings",
      "exerciseName":"Lying Leg Curl",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Hamstrings",
      "exerciseName":"Seated Leg Curl",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Over Head Press",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Side Laterals",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Rear delt fly",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Front Raise",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Up Right Row",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Shoulders",
      "exerciseName":"Face Pull",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Biceps",
      "exerciseName":"Standing Bar Curl",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Biceps",
      "exerciseName":"Supinated Dumbbell Curl",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Biceps",
      "exerciseName":"Hammer Curls",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Triceps",
      "exerciseName":"Rope Pushdown",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Triceps",
      "exerciseName":"Skull Crushers",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Triceps",
      "exerciseName":"Tricep Extensions",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Abs",
      "exerciseName":"Crunch",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Abs",
      "exerciseName":"Plank",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Obliques",
      "exerciseName":"Bicycle",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Obliques",
      "exerciseName":"Russian Twist",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Calves",
      "exerciseName":"Seated Calf Raise",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Calves",
      "exerciseName":"Standing Calf Raise",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Traps",
      "exerciseName":"Barbell Shrugs",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Traps",
      "exerciseName":"Dumbbell Shrugs",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Forearms",
      "exerciseName":"Wrist Curls",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Forearms",
      "exerciseName":"Farmers Carrys",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Glutes",
      "exerciseName":"Glute Bridge",
      "exerciseDescription": "Description",
    },
    {
      "bodypart":"Glutes",
      "exerciseName":"Barbell Glute Bridge",
      "exerciseDescription": "Description",
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
