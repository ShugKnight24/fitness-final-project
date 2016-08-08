var app = angular.module('fitnessApp');

app.factory('challengeFactory', function() { 
	// service logic
	var emptyObject = {};
	// function that adds inputs to object
	function saveObject(challenge){
		//set emptyObj to equal challenge the name of the object
		emptyObject = challenge;
		//whenver saveObject runs anything that pass through function is going to be stored inside of empty object
	};
	function returnObject() {
		return emptyObject; // which is now full of the inputs
	};

// saveObject is a property with the value saveObject which is a function
// property : function
	return {
		saveObject: saveObject,
		returnObject: returnObject
	}
});
