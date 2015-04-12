var app=angular.module('ScoreBoardApp',['ui.bootstrap','ui.router']);

app.controller('HomeController',function($scope,$state){
	$scope.startChampionship=function (){
			$state.go("joinus");
	}
});
