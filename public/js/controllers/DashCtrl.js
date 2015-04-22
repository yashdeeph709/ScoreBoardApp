var app=angular.module('ScoreBoardApp');
app.controller('dashboardCtrl',function($scope,$state,$http,authToken,championship){
	console.log('DashBoard Controller Loaded!');
	
	if(!authToken.isAuthenticated()){
		$state.go('home');
	}	
	$http.get('match/getTeams').success(function(){$scope.nocreate=false;})
});