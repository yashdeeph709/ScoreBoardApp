var app=angular.module('ScoreBoardApp');
app.controller('dashboardCtrl',function($scope,$state,$http,authToken,championship){
	if(!authToken.isAuthenticated()){
		$state.go('home');
	}	
});