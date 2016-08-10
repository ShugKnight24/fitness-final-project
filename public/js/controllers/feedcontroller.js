var app = angular.module('fitnessApp');

app.controller('feedController', ["$scope", function($scope) {
  /* --strategy to order posts-- 
  1. Get users friends posts array
  2. Concat friends posts arrays and users post array
  3. ng Repeat
  4. ng OrderBy date
  5. Reverse
  */
  
  //define currentUser
  
  var Post = function(author, image, content) {
      dateUploaded: new Date()
      author: author,
      image: image,
      content: content,
      likes: 0,
      comments: []
    }
    
//new comment 
    
  $scope.addPost = function() {
    var newPost = new Post(currentUser, "", $scope.newPostContent);
    //unshift to user posts array
  };
  
  //$scope.addComment
  
  
  
}]);
