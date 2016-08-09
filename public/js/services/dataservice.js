var app = angular.module('fitnessApp');

app.service('dataService', function($http) {
 // this.getData = function(callback) {
 // 	$http({
 // 	  method: 'GET',
 // 	  url: 'https://api.fitbit.com/1/user/'+ fragment['user_id'] + '/profile.json',
 // 		Authorization: fragment['token_type'] + fragment['access_token']
 // 	}).then(function successCallback(response) {
 // 		return callback();
 // 	}, function errorCallback(response) {
 // 		console.log(response.data);
 // 	});
 // };
 
 function errorCallback() {
	 console.log(response.statusText);
	 $http.get('mock/shugdata.json')
	 .then(callback);
	};
 
 var req = {
	 method: 'GET',
	 url: 'https://api.fitbit.com/1/user/'+ fragment['user_id'] + '/profile.json',
	 headers: {
		 'Authorization': 'Bearer ' + fragment.access_token
	 }
 }
 
 this.getData = function(callback) {
	 console.log('Bearer ' + fragment['access_token']);
	 $http(req).then(callback, errorCallBack);
 };
 
});
