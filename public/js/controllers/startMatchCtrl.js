var app=angular.module('ScoreBoardApp');

app.controller('startMatchCtrl',function($scope,$http,$state){
	$http.get('scoreboard/getTeams')
	.success(function(data){
		$scope.teams=data;
	})
	.error(function(error){
		$state.go('createcship');		
	});
	$scope.toss=function(team){
		if(team===1){
			$scope.players=$scope.teams[find($scope.teams,$scope.team1)].players;
			$scope.bowlers=$scope.teams[find($scope.teams,$scope.team2)].players;	
		}else{
			$scope.players=$scope.teams[find($scope.teams,$scope.team2)].players;
			$scope.bowlers=$scope.teams[find($scope.teams,$scope.team1)].players;	
		}
	}
	function find(teams,team){
		for(i=0;i<teams.length;i++){
			if(teams[i].teamname===team){
				return i;
			}
		}
	}
});