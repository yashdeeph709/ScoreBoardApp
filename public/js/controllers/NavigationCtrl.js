var app=angular.module('ScoreBoardApp');

app.controller('NavigationCtrl',function($scope,authToken){
		$scope.isAuthenticated=authToken.isAuthenticated;
});