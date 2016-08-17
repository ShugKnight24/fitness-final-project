var app = angular.module('fitnessApp');

app.controller('feedController', ["$scope", "dataService", "$http", "$filter", "dataStore", function($scope, dataService, $http, $filter, dataStore) {

  $scope.imageStrings = [];
  $scope.processFiles = function(files){
    angular.forEach(files, function(flowFile, i){
       var fileReader = new FileReader();
          fileReader.onload = function (event) {
            var uri = event.target.result;
              $scope.imageStrings[i] = uri;
          };
          fileReader.readAsDataURL(flowFile.file);
    });
  };


  $scope.getPosts = function() {
    $scope.user = dataStore.getUserProfile();
    $scope.friendProfiles = dataStore.getFriendProfiles();
    $scope.posts = $scope.user.posts;
    for (var i = 0; i < $scope.friendProfiles.length; i++) {
      $scope.posts = $scope.posts.concat($scope.friendProfiles[i].posts);
    }
  };

  var Post = function(author, avatar, image, content, date) {
      this.dateUploaded = date;
      this.author = author;
      this.avatar = avatar;
      this.image = image;
      this.content = content;
      this.likes = 0;
      this.comments = [];
    };

  var Comment = function(author, avatar, image, comment, date) {
    this.dateUploaded = date;
    this.author = author;
    this.avatar = avatar;
    this.image = image;
    this.comment = comment;
  };

  $scope.addPost = function() {
    $scope.date = new Date();
    $scope.date = $filter('date')($scope.date, "mediumDate");
    $scope.newPost = new Post($scope.user.fullName, $scope.user.data.user.avatar150, $scope.imageStrings[0], $scope.newPostContent, $scope.date);
    $scope.user.posts.push($scope.newPost);
    $scope.newPostContent = ""; //clear
    dataStore.storeUserProfile($scope.user);
    $scope.getPosts();
  };

  $scope.addComment = function(post) {
    $scope.date = new Date();
    $scope.date = $filter('date')($scope.date, "mediumDate");
    $scope.newComment = new Comment($scope.user.fullName, $scope.user.data.user.avatar150 ,"", $scope.newCommentContent, $scope.date);
    $scope.newCommentContent = ""; //clear
    for (var i = 0; i < $scope.user.posts.length; i++) {
      if (angular.equals(post, $scope.user.posts[i])) {
        $scope.user.posts[i].comments.push($scope.newComment);
      }
    }
    for (var i = 0; i < $scope.friendProfiles.length; i++) {
      for (var j = 0; j < $scope.friendProfiles[i].posts.length; j++) {
        if (angular.equals(post, $scope.friendProfiles[i].posts[j])) {
          $scope.friendProfiles[i].posts[j].comments.push($scope.newComment);
        }
      }
    }
    dataStore.storeUserProfile($scope.user);
    dataStore.storeFriendProfiles($scope.friendProfiles);
    $scope.getPosts();
  };

  $scope.addLike = function(post) {
    for (var i = 0; i < $scope.user.posts.length; i++) {
      if (angular.equals(post, $scope.user.posts[i])) {
        $scope.user.posts[i].likes++;
        console.log($scope.user.posts[i].likes);
      }
    }
    for (var i = 0; i < $scope.friendProfiles.length; i++) {
      for (var j = 0; j < $scope.friendProfiles[i].posts.length; j++) {
        if (angular.equals(post, $scope.friendProfiles[i].posts[j])) {
          console.log("working");
          $scope.friendProfiles[i].posts[j].likes = $scope.friendProfiles[i].posts[j].likes + 1;
          // $scope.friendProfiles[i].posts[j].likes++;
        }
      }
    }
    dataStore.storeUserProfile($scope.user);
    dataStore.storeFriendProfiles($scope.friendProfiles);
    $scope.getPosts();
  };


  $scope.getPosts();

  //add avatar150 to each post

  //add avatar150 to each comment
  //add date string to each comment
  //author, avatar, content, date

  //determine which post was commented on (how?)
  //find the corresponding post in the user profile or one of the friend profiles
  //update that post with the new comment
  //store the userprofile and friend profile in dataStore
  //run getPosts

  //do the same with likes

  //create an isolate or child scope in feeddirective?

  //add likes to comments?

}]);
