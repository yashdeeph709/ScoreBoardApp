var app=angular.module('ScoreBoardApp');

app.controller('NavigationCtrl',function($scope,authToken){
	console.log('Navigation Controller Loaded!');
	$scope.isAuthenticated=authToken.isAuthenticated;
	$scope.username=authToken.getUserName();
});