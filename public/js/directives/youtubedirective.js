var app = angular.module('fitnessApp');

app.directive('youtube', function($sce) {
  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    template: '<iframe style="overflow:hidden;height:90%;width:90%" width="100%" height="100%" src="{{url}}" frameborder="0" allowfullscreen></iframe>',
    link: function (scope) {

      scope.videos = [
       "vH0nP4NzS9M",
       "mDxDMaZW5bw",
       "BzOw7xb7uRo",
       "g-jwWYX7Jlo",
       "mgmVOuLgFB0",
       "Sk56VxaeqEQ",
       "r3MxMfzWfbE",
       "V6xLYt265ZM",
       "2vj-ZmYTGAw",
       "CMm6tDavSXg",
       "9o6F_cRW5W0",
       "NS95suaHc18",
       "_pi7oqZ6ioU",
       "FhzNSPiqO0M",
       "r5IMO0RohL4",
       "8JSmbM1z54k",
       "q5nVqeVhgQE",
       "lsSC2vx7zFQ",
       "M0uZnhAovBc",
       "R9CD7uj2TL0",
       "RC6sMFbL288",
       "UfjRcGDBvMQ",
       "Z0ZrkBCnfxw",
       "zIOi-B0uOqA",
       "u9psXavuegk",
       "JNy-XytidOU",
       "guRp6usVYaQ",
       "bAwXAFz6cmA"
     ];

    // Randomize
    // scope.randomVideo = scope.videos[Math.floor(Math.random()*scope.videos.length)];

    // Hard coded a video to play for Demo purposes
    scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/g-jwWYX7Jlo");
    }
  };
});
