var app=angular.module('ScoreBoardApp',['ngRoute','ui.bootstrap','ui.router']);

app.controller('HomeController',function($scope,$state){
	$scope.startChampionship=function (){
			$state.go("createcship");
	}
});
app.controller('CreateChCtrl',function($scope,$state,championship){
	$scope.createChampionship=function(){		
		championship.setChampionshipName($scope.championship.name);
		championship.setOvers($scope.championship.overs);
		championship.setPlayers($scope.championship.players);
		championship.setConfig($scope.noob,$scope.wide,$scope.overstrike);
		championship.setMeta($scope.championship.organizer,$scope.championship.description);
		console.log(championship);
		$state.go("teamentry");
	}
});
app.controller('TeamEntryCtrl',function($scope,championship){
	$scope.teams=championship.getTeams();
	$scope.addTeam=function(teamname){
		championship.addTeam(teamname);
		$scope.teams=championship.getTeams();
	}
});
app.controller('PlayerEntryCtrl',function($scope,$stateParams,$location,championship){
	$scope.players=championship.getPlayers($stateParams["teamid"]);
	$scope.addPlayer=function(name,skills,position){
		championship.addPlayer($stateParams['teamid'],name,skills,position);
	}
});
app.controller('LoginCtrl',function($scope,$state){	
	$scope.login=function(){
		$state.go('dashboard.startmatch');
	}
});
app.controller('SignUpCtrl',function(){
	
});