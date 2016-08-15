var app = angular.module('fitnessApp');

app.factory('dataStore', function() {
  var userProfile;
  var friendProfiles;
  var posts;
  
  var storeUserProfile = function(profile) {
    userProfile = profile;
  };
  
  var getUserProfile = function() {
    return userProfile;
  };
  
  var storeFriendProfiles = function(profiles) {
    friendProfiles = profiles;
  };
  
  var getFriendProfiles = function() {
    return friendProfiles;
  };
  
  var getPosts = function() {
    posts = userProfile.posts;
    for (var i = 0; i < friendProfiles.length; i++) {
      posts = posts.concat(friendProfiles[i].posts);
    }
    return posts;
  };
  
  return {
    storeUserProfile: storeUserProfile,
    getUserProfile: getUserProfile,
    storeFriendProfiles: storeFriendProfiles,
    getFriendProfiles: getFriendProfiles,
    getPosts: getPosts
  };
  
});
