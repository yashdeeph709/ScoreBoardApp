var app=angular.module('ScoreBoardApp',['ngResource','ui.bootstrap','ui.router']);

app.controller('HomeController',function($scope,$state){
	$scope.startChampionship=function (){
			$state.go("joinus");
	}
});
