var app = angular.module('fitnessApp');

app.controller("bodyMapController",["$scope", function($scope){
// Selected Excercises Array
$scope.bodyMapExercises = [];
// Array for objects of exercises the user can add
$scope.chestExercises =[
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
  }
];
$scope.backExercises =[
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
  }
];
$scope.lowerBackExercises =[
  {
    "bodypart":"Lower Back",
    "exerciseName":"Barbell Deadlift",
    "selected":false
  },
  {
    "bodypart":"Lower Back",
    "exerciseName":"Body Weight Hyperextensions",
    "selected":false
  }
];
$scope.quadExercises =[
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
  }
];
$scope.hamstringExercises =[
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
  }
];
$scope.shoulderExercises =[
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
    "exerciseName":"Dumbbell Front Raise",
    "selected":false
  },
  {
    "bodypart":"Shoulders",
    "exerciseName":"Barbell Upright Row",
    "selected":false
  }
];
$scope.rearDeltExercises =[
  {
    "bodypart":"Rear Delts",
    "exerciseName":"Dumbbell Rear Delt fly",
    "selected":false
  },
  {
    "bodypart":"Rear Delts",
    "exerciseName":"Rope Face Pull",
    "selected":false
  }
];
$scope.bicepExercises =[
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
  }
];
$scope.tricepExercises =[
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
  }
];
$scope.abExercises =[
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
  }
];
$scope.obliqueExercises =[
  {
    "bodypart":"Obliques",
    "exerciseName":"Twisting Incline Sit-Up",
    "selected":false
  },
  {
    "bodypart":"Obliques",
    "exerciseName":"Russian Twist",
    "selected":false
  }
];
$scope.calfExercises =[
  {
    "bodypart":"Calves",
    "exerciseName":"Seated Calf Raise",
    "selected":false
  },
  {
    "bodypart":"Calves",
    "exerciseName":"Machine Standing Calf Raise",
    "selected":false
  }
];
$scope.trapExercises =[
  {
    "bodypart":"Traps",
    "exerciseName":"Barbell Shrugs",
    "selected":false
  },
  {
    "bodypart":"Traps",
    "exerciseName":"Dumbbell Shrugs",
    "selected":false
  }
];
$scope.forearmExercises =[
  {
    "bodypart":"Forearms",
    "exerciseName":"Barbell Wrist Curls",
    "selected":false
  },
  {
    "bodypart":"Forearms",
    "exerciseName":"Farmer's Walk",
    "selected":false
  }
];
$scope.gluteExercises =[
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
