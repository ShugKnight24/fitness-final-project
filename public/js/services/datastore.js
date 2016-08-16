var app = angular.module('fitnessApp');

app.factory('dataStore', function() {
  var userProfile;
  var friendProfiles;
  
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
  
  return {
    storeUserProfile: storeUserProfile,
    getUserProfile: getUserProfile,
    storeFriendProfiles: storeFriendProfiles,
    getFriendProfiles: getFriendProfiles
  };
  
});
