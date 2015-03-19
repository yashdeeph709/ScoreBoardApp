var app=angular.module('ScoreBoardApp',['ngRoute','ui.bootstrap']);

app.controller('HomeController',function($scope,$location){
	$scope.startMatch=function (){
			$location.path("/start");
	}
	$scope.startChampionship=function (){
			$location.path("/championship");
	}
	
});
app.controller('WatchController',function(){

});
