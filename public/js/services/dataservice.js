var app = angular.module('fitnessApp');

app.service('dataService', function($http) {

 var req = {
  method: 'GET',
  url: 'https://api.fitbit.com/1/user/' + fragment['user_id'] + '/profile.json',
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
 
});
