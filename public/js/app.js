var app=angular.module('ScoreBoardApp',['ui.bootstrap','ui.router','angularValidator']);

app.controller('HomeController',function($scope,$state){
	$scope.startChampionship=function (){
			$state.go("joinus");
	}
});
