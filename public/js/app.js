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
app.controller('TeamEntryCtrl',function($scope,$location,championship){
	$scope.teams=championship.getTeams();
	$scope.addTeam=function(teamname){
		championship.addTeam(teamname);
		$scope.teams=championship.getTeams();
	}
});
app.controller('PlayerEntryCtrl',function($scope,$routeParams,$location,championship){
	$scope.players=championship.getPlayers($routeParams["teamid"]);
	$scope.addPlayer=function(name,skills,position){
		championship.addPlayer($routeParams['teamid'],name,skills,position);
	}
});
app.controller('LoginCtrl',function(){
	
});
app.controller('SignUpCtrl',function(){
	
});