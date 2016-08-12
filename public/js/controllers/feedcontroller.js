var app = angular.module('fitnessApp');

app.controller('feedController', ["$scope", "dataService", "friendProfileService", "$http", "$filter", "dataStore", function($scope, dataService, friendProfileService, $http, $filter, dataStore) {
  
  // $scope.friendProfiles = [];
  // 
  // dataService.getData(function(response) {
	// 	$scope.user = response.data;
  //   $scope.posts = $scope.user.posts;
  //   recursiveRequest($scope.user.friends.length - 1);
	// });
  // 
  // function recursiveRequest(i) {
  //   if(i >= 0) {
  //     $http.get('mock/' + $scope.user.friends[i] + '.json').then(function(response) {
  //       $scope.friendProfiles.push(response.data);
  //       $scope.posts = $scope.posts.concat(response.data.posts);
  //       recursiveRequest(i-1);
  //     });
  //   }
  // }
  
  var Post = function(author, image, content, date) {
      this.dateUploaded = date;
      this.author = author;
      this.image = image;
      this.content = content;
      this.likes = 0;
      this.comments = [];
    };
    
  $scope.addPost = function() {
    $scope.date = new Date();
    $scope.date = $filter('date')($scope.date, "mediumDate");
    $scope.newPost = new Post($scope.user.fullName, "", $scope.newPostContent, $scope.date);
    $scope.posts.push($scope.newPost);
    $scope.newPostContent = "";
  };
  
  $scope.friendProfiles = dataStore.getFriendProfiles();
  
}]);
