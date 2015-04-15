var app=angular.module('ScoreBoardApp',['ipCookie','ngResource','ui.bootstrap','ui.router']);

app.controller('HomeController',function($scope,$state,ipCookie){
	$scope.startChampionship=function (){
			$state.go("joinus");
	}
});
