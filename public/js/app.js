var app=angular.module('ScoreBoardApp',['ipCookie','ngResource','ui.bootstrap','ui.router','ngAnimate','satellizer']);

app.controller('HomeController',function($scope,$state){
	$scope.startChampionship=function (){
			$state.go("joinus");
	}
});
