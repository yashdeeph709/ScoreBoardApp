var app=angular.module('ScoreBoardApp');

app.controller('LogoutCtrl',function(authToken,$state){
	authToken.removeToken();
	$state.go('home');
});