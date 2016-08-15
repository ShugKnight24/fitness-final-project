var app = angular.module('fitnessApp');

app.controller('feedController', ["$scope", "dataService", "friendProfileService", "$http", "$filter", "dataStore", function($scope, dataService, friendProfileService, $http, $filter, dataStore) {
    
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
