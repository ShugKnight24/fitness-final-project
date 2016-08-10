var app = angular.module('fitnessApp');

app.controller('motivationController', function($scope, dataService) {

	$scope.quotes = [
	" 'Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.' - John F. Kennedy",
	" 'A feeble body weakens the mind.' - Jean-Jacques Rousseau",
	" 'Walking is the best possible exercise. Habituate yourself to walk very far.' - Thomas Jefferson",
	" 'Take care of your body. It's the only place you have to live.' - Jim Rohn",
	" 'We do not stop exercising because we grow old – we grow old because we stop exercising.' - Dr. Kenneth Cooper",
	" 'If something stands between you and your success, move it. Never be denied.' - Dwayne &lsquo;The Rock&rsquo; Johnson",
	" 'Don't be afraid of failure. This is the way to succeed.' - LeBron James",
	" 'When you have a clear vision of your goal, it's easier to take the first step toward it.' - L.L. Cool J.",
	" 'People often say that motivation doesnt last. Well, neither does bathing-- that's why we recommend it daily.' - Zig Ziglar",
	" 'The secret of change is to focus all of your energy not on fighting the old, but on building the new.' - Socrates",
	" 'The greatest wealth is health.' – Virgil",
	" 'He who takes medicine and neglects to diet wastes the skill of his doctors.' – Chinese Proverb",
	" 'Happiness lies, first of all, in health.' – George William Curtis",
	" 'To keep the body in good health is a duty, otherwise we shall not be able to keep our mind strong and clear.' – Buddha",
	" 'Lack of activity destroys the good condition of every human being, while movement and methodical physical exercise save it and preserve it.' – Plato",
	" 'You can use the same motto for everything in life. If you put that effort in, you'll get what you want.' – Kim Kardashian",
	" 'I've always practiced this: Love yourself. Move your body. Watch your portions.' - Richard Simmons",
	" 'Fact: Thinking about going to the gym burns between 0 and 0 calories.' ",
	" 'Run like you stole something.' ",
	" 'We are what we repeatedly do. Excellence, therefore, is not an act but a habit.' — Aristotle",
	" 'Your future is created by what you do today, not tomorrow' — Robert T. Kiyosaki",
	" 'Don&#8217;t count the days; make the days count' — Muhammad Ali",
	" 'I used to jog but the ice cubes kept falling out of my glass.' - David Lee Roth",
	" 'Never eat more than you can lift.' - Miss Piggy",
	" 'A bear, however hard he tries, grows tubby without exercise.' - A.A. Milne "
	];

  $scope.randomMotivationalQuote = $scope.quotes[Math.floor(Math.random()*$scope.quotes.length)];

	dataService.getData(function(response) {
		$scope.user = response.data.user;
		var msg = " Hello, " + $scope.user.displayName + ", ";
    // change the user's walking stride from centimeters to feet and
    // calculate how many miles per day
  		var miles = ($scope.user.strideLengthWalking/0.39370)/12*($scope.user.averageDailySteps)/5280;
  		console.log(miles);
  		if ($scope.user.averageDailySteps >= 10000) {
    		msg +=  "you've walked 10,000 steps per day on average! ";
  		}
  		if (miles > 6) {
			msg += "You're a walking machine!";
			$scope.changingImg = "http://i.dailymail.co.uk/i/pix/2015/06/09/16/03BB5E5A0000044D-3117010-image-a-25_1433862086692.jpg";

  		} else if (miles <= 6) {
			msg += " Doing great! Try taking a walk around the block after dinner.";
			$scope.changingImg = "http://unisci24.com/data_images/wlls/31/279303-lynx.jpg";

  		} else if (miles <= 1) {
  			msg += " take a walk on your lunch break. You can do it!";
			$scope.changingImg = "http://www.pic.cx/img65/bczyghemnzdaozqgufev.jpg";
  		}
	// variable message that will depend on steps
	$scope.motivationalMsg = msg;
	});


});
