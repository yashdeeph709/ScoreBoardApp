var app=angular.module('ScoreBoardApp',['ipCookie','ngResource','ui.bootstrap','ui.router','ngAnimate']);

app.controller('HomeController',function($scope,$state){
	$scope.startChampionship=function (){
			$state.go("joinus");
	}
});
