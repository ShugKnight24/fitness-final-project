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
  
  var Post = function(author, image, content) {
      this.dateUploaded = new Date();
      this.author = author;
      this.image = image;
      this.content = content;
      this.likes = 0;
      this.comments = [];
    };
    
  $scope.addPost = function() {
    $scope.newPost = new Post($scope.user.fullName, "", $scope.newPostContent);
    $scope.posts.push($scope.newPost);
    $scope.newPostContent = "";
  };
  
  $scope.friendProfiles = dataStore.getFriendProfiles();
  
  // $scope.filterByDate = function() {
  //   $filter('orderBy')($scope.posts, 'dateUploaded', true);
  // };

  // $scope.$watch('$scope.posts', function (newVal, oldVal) { /*...*/ }, true);
  //   $filter('orderBy')($scope.posts, 'dateUploaded', true);
  
  
  // $scope.propertyName = 'dateuploaded';
  // $scope.reverse = true;
  // $scope.posts = orderBy(posts, $scope.propertyName, $scope.reverse);
  // 
  // $scope.sortBy = function(propertyName) {
  //   $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
  //       ? !$scope.reverse : false;
  //   $scope.propertyName = propertyName;
  //   $scope.posts = orderBy(posts, $scope.propertyName, $scope.reverse);
  // };
  
  // $scope.collectPosts = function() {
  //   $scope.posts = dataStore.getUserProfile().posts;
  //   $scope.friendProfiles = dataStore.getFriendProfiles();
  //   for (var i = 0; i < $scope.friendProfiles.length; i++) {
  //     $scope.posts = $scope.posts.concat($scope.friendProfiles[i].posts);
  //   }
  // };
  // 
  // $scope.collectPosts();

}]);
