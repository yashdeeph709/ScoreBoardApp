var app=angular.module('ScoreBoardApp',['ngRoute','ui.bootstrap']);

app.controller('HomeController',function($scope,$location){
	$scope.startChampionship=function (){
			$location.path("/championship");
	}
});
app.controller('CreateChCtrl',function($scope,$location,championship){
	$scope.createChampionship=function(){		
		championship.setChampionshipName($scope.championship.name);
		championship.setOvers($scope.championship.overs);
		championship.setPlayers($scope.championship.players);
		championship.setConfig($scope.noob,$scope.wide,$scope.overstrike);
		console.log(championship);
		$location.path("/teamentry");
	}
});