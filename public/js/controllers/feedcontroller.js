var app = angular.module('fitnessApp');

app.controller('feedController', ["$scope", "dataService", "$http", "$filter", "dataStore", function($scope, dataService, $http, $filter, dataStore) {
  
  $scope.getPosts = function() {
    $scope.user = dataStore.getUserProfile();
    $scope.friendProfiles = dataStore.getFriendProfiles();
    $scope.posts = $scope.user.posts;
    for (var i = 0; i < $scope.friendProfiles.length; i++) {
      $scope.posts = $scope.posts.concat($scope.friendProfiles[i].posts);
    }
  };
    
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
    $scope.user.posts.push($scope.newPost);
    $scope.newPostContent = "";
    dataStore.storeUserProfile($scope.user);
    $scope.getPosts();
  };
  
  $scope.getPosts();
  
}]);
