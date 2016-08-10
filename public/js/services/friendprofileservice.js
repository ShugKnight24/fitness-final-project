var app = angular.module('fitnessApp');

app.service('friendProfileService', function($http) {
  
  this.getFriendProfiles = function(friendsList) {
    var friendsProfiles = [];
    for (var i = 0; i < friendsList.length; i++) {
      $http.get('mock/' + friendsList[i] + '.json').then(function(response) {
        console.log(response.data);
        friendsProfiles.push(response.data);
      });
    }
    return friendsProfiles;
  };
});
