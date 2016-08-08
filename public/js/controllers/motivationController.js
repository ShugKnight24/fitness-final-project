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

	$scope.videos = [
		"https://www.youtube.com/watch?v=vH0nP4NzS9M",
		"https://www.youtube.com/watch?v=mDxDMaZW5bw",
		"https://www.youtube.com/watch?v=BzOw7xb7uRo",
		"https://www.youtube.com/watch?v=g-jwWYX7Jlo",
		"https://www.youtube.com/watch?v=mgmVOuLgFB0",
		"https://www.youtube.com/watch?v=Sk56VxaeqEQ",
		"https://www.youtube.com/watch?v=r3MxMfzWfbE",
		"https://www.youtube.com/watch?v=V6xLYt265ZM",
		"https://www.youtube.com/watch?v=2vj-ZmYTGAw",
		"https://www.youtube.com/watch?v=CMm6tDavSXg",
		"https://www.youtube.com/watch?v=9o6F_cRW5W0",
		"https://www.youtube.com/watch?v=NS95suaHc18",
		"https://www.youtube.com/watch?v=_pi7oqZ6ioU",
		"https://www.youtube.com/watch?v=FhzNSPiqO0M",
		"https://www.youtube.com/watch?v=r5IMO0RohL4",
		"https://www.youtube.com/watch?v=8JSmbM1z54k",
		"https://www.youtube.com/watch?v=q5nVqeVhgQE",
		"https://www.youtube.com/watch?v=lsSC2vx7zFQ",
		"https://www.youtube.com/watch?v=M0uZnhAovBc",
		"https://www.youtube.com/watch?v=R9CD7uj2TL0",
		"https://www.youtube.com/watch?v=RC6sMFbL288",
		"https://www.youtube.com/watch?v=UfjRcGDBvMQ",
		"https://www.youtube.com/watch?v=Z0ZrkBCnfxw",
		"https://www.youtube.com/watch?v=zIOi-B0uOqA",
		"https://www.youtube.com/watch?v=u9psXavuegk",
		"https://www.youtube.com/watch?v=JNy-XytidOU",
		"https://www.youtube.com/watch?v=guRp6usVYaQ",
		"https://www.youtube.com/watch?v=bAwXAFz6cmA"
	];

	$scope.randomMotivationalVideo = $scope.videos[Math.floor(Math.random()*$scope.videos.length)];

	dataService.getData(function(response) {
		$scope.user = response.data.user;
	});
});
