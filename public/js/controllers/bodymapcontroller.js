var app = angular.module('fitnessApp');

app.controller("bodyMapController",["$scope", function($scope){
// Empty Selected Bodymap Excercises Array
$scope.selectedBodyMapExercises = [];
//Empty Bodypap Exercises array
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
//If chest is pressed
$scope.addChest = function(){
  Materialize.toast("A big chest to be better than the rest.", 4000);
  $scope.chestExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addChest = function(){
      Materialize.toast("You already selected chest, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//If back is pressed
$scope.addBack = function(){
  Materialize.toast("You'll be able to carry more people now!", 4000);
  $scope.backExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addBack = function(){
      Materialize.toast("You already selected back, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if lower back is pressed
$scope.addLowerBack = function(){
  Materialize.toast("I see you are in the market for a Christmas tree", 4000);
  $scope.lowerBackExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    Materialize.toast("You already selected lower Back, choose a different muscle group.", 4000);
    $scope.addLowerBack = function(){
      return false;
    }
  });
};
//if quads are pressed
$scope.addQuads = function(){
  Materialize.toast("Big Quads so you don't have Grant Chirpus legs.", 4000);
  $scope.quadExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addQuads = function(){
      Materialize.toast("You already selected quads, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if hamstrings are pressed
$scope.addHams = function(){
  Materialize.toast("Not your typical ham sandwich.", 4000);
  $scope.hamstringExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addHams = function(){
      Materialize.toast("You already selected hamstrings, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if shoulders are pressed
$scope.addShoulders = function(){
  Materialize.toast("You'll have shoulders that look like boulders.", 4000);
  $scope.shoulderExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addShoulders = function(){
      Materialize.toast("You already selected shoulders, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if rear delts are pressed
$scope.addRearDelts = function(){
  Materialize.toast("Rear delts are often overlooked, they are part of a healthy shoulder routine. (We had to be serious for at least one muscle group.)", 4000);
  $scope.rearDeltExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addRearDelts = function(){
      Materialize.toast("You already selected rear delts, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if biceps are pressed
$scope.addBiceps = function(){
  Materialize.toast("Buying tickets to the gun show?", 4000);
  $scope.bicepExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addBiceps = function(){
      Materialize.toast("You already selected biceps, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if triceps are pressed
$scope.addTriceps = function(){
  Materialize.toast("We won't be able to stop you, but we can still tri! (We'll show ourselves out now.)", 4000);
  $scope.tricepExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addTriceps = function(){
      Materialize.toast("You already selected triceps, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if abs are pressed
$scope.addAbs = function(){
  Materialize.toast("Washboard abs so you clean your clothes on them.", 4000);
  $scope.abExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addAbs = function(){
      Materialize.toast("You already selected abs, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if obliques are pressed
$scope.addObliques = function(){
  Materialize.toast("They won't be love handles when you're through with them.", 4000);
  $scope.obliqueExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addObliques = function(){
      Materialize.toast("You already selected obliques, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if calves are pressed
$scope.addCalves = function(){
  Materialize.toast("Work those baby cows", 4000);
  $scope.calfExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addCalves = function(){
      Materialize.toast("You already selected calves, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if traps are pressed
$scope.addTraps = function(){
  Materialize.toast("Untrap your traps.", 4000);
  $scope.trapExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addTraps = function(){
      Materialize.toast("You already selected traps, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if forearms are pressed
$scope.addForearms = function(){
  Materialize.toast("You'll be able to carry all of your groceries in one trip.", 4000);
  $scope.forearmExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addForearms = function(){
      Materialize.toast("You already selected forearms, choose a different muscle group.", 4000);
      return false;
    }
  });
};
//if glutes are pressed
$scope.addGlutes = function(){
  Materialize.toast("Our lawyers advised us not to make any jokes here.", 4000);
  $scope.gluteExercises.forEach(function(item){
    $scope.bodyMapExercises.push(item);
    //disable double click
    $scope.addGlutes = function(){
      Materialize.toast("You already selected glutes, choose a different muscle group.", 4000);
      return false;
    }
  });
};

  // When Add Exercises button is pressed
    $scope.addBodyMap = function(){
      for (var i=0; i<$scope.bodyMapExercises.length;i++){
        if ($scope.bodyMapExercises[i].selected){
        // First push selected exercises to another array
        $scope.selectedBodyMapExercises.push($scope.bodyMapExercises[i]);
        // Check if array is being filled by the object
        console.log($scope.selectedBodyMapExercises);
      };
    }
      // Then remove them from the list
      $scope.selectedBodyMapExercises = $scope.selectedBodyMapExercises.filter(function(item){
        return !item.selected;
      });
    };
}]);
