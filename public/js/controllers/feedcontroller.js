var app = angular.module('fitnessApp');

app.controller('feedController', ["$scope", "dataService", "friendProfileService", "$http", function($scope, dataService, friendProfileService, $http) {
  
  $scope.friendProfiles = [];

  dataService.getData(function(response) {
		$scope.user = response.data;
    $scope.posts = $scope.user.posts;
    recursiveRequest($scope.user.friends.length - 1);
	});
  
  function recursiveRequest(i) {
    if(i >= 0) {
      $http.get('mock/' + $scope.user.friends[i] + '.json').then(function(response) {
        $scope.friendProfiles.push(response.data);
        $scope.posts = $scope.posts.concat(response.data.posts);
        recursiveRequest(i-1);
      });
    }
  }
  
  
  
  
  // var Post = function(author, image, content) {
  //     dateUploaded: new Date(),
  //     author: author,
  //     image: image,
  //     content: content,
  //     likes: 0,
  //     comments: []
  //   };
    
//new comment 
    
  // $scope.addPost = function() {
  //   var newPost = new Post(currentUser, "", $scope.newPostContent);
  //   //unshift to user posts array
  // };
  
  //$scope.addComment
  
  
  
}]);
