var app = angular.module('fitnessApp');

app.service('friendProfileService', function($http) {
  //NO LONGER USED //DELETE
  this.getFriendsPosts = function(friendsList, userPosts) {
    var allPosts = userPosts;
    for (var i = 0; i < friendsList.length; i++) {
      $http.get('mock/' + friendsList[i] + '.json').then(function(response) {
        allPosts = allPosts.concat(response.data.posts);
      });
    }
    return allPosts;
  };
});
