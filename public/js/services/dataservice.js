var app = angular.module('fitnessApp');

app.service('dataService', function($http) {

 var req = {
  method: 'GET',
  url: 'https://api.fitbit.com/1/user/' + fragment['user_id'] + '/profile.json',
  headers: {
 	 'Authorization': 'Bearer ' + fragment.access_token
  }
 }
 
 var reqActivities = {
  method: 'GET',
  url: 'https://api.fitbit.com/1/user/' + fragment['user_id'] + '/activities/date/today.json',
  headers: {
 	 'Authorization': 'Bearer ' + fragment.access_token
  }
 }
 
 var reqHeartRate = {
  method: 'GET',
  url: 'https://api.fitbit.com/1/user/' + fragment['user_id'] + '/activities/heart/date/today/1d.json',
  headers: {
 	 'Authorization': 'Bearer ' + fragment.access_token
  }
 }
 
 var reqSleep = {
  method: 'GET',
  url: 'https://api.fitbit.com/1/user/' + fragment['user_id'] + '/sleep/date/today.json',
  headers: {
 	 'Authorization': 'Bearer ' + fragment.access_token
  }
 }
 
 this.getData = function(callback) {
  if (fragment['user_id']) {
    $http(req).then(callback);
  } else {
    $http.get('mock/shugdata.json').then(callback);
  }  
 };
 
 this.getActivities = function(callback) {
   $http(reqActivities).then(callback);
 };
 
 this.getHeartRate = function(callback) {
   $http(reqHeartRate).then(callback);
 };
 
 this.getSleep = function(callback) {
   $http(reqSleep).then(callback);
 };
 
});
