var app=angular.module('ScoreBoardApp');
app.controller('dashboardCtrl',function($scope,$state,authToken){
	if(!authToken.isAuthenticated()){
		$state.go('home');
	}
});