app.controller('PlayerEntryCtrl',function($scope,$stateParams,$location,championship){
	console.log('PlayerEntry Controller Loaded!');
	
	$scope.players=championship.getPlayers($stateParams["teamid"]);
	$scope.addPlayer=function(name,skills,position){
		championship.addPlayer($stateParams['teamid'],name,skills,position);
	}
});
