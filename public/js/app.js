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
		if($scope.username==null || $scope.password==null){
			$scope.flag=false;
			$scope.message="username or password empty";
		}
		if(!$scope.flag){
		$state.go('dashboard.startmatch');
		}
	}
});
app.controller('SignUpCtrl',function($scope,$state,$window){
		var urlbuilder=[];
		urlbuilder.push("response_type=code",
			"client_id=482231649292-r15jbpgbg5kukb4aorgr0dlk4odjh1sa.apps.googleusercontent.com",
			"redirect_uri="+$window.location.origin,
			"scope=profile email")

		$scope.googleauth=function(){
			var url="https://accounts.google.com/o/oauth2/auth?"+urlbuilder.join('&');
			var options="width=500,height=500,left="+($window.outerWidth-500)/2+",top=100";
			$window.open(url,'',options);
		}
		$scope.signup=function(){
		if($scope.firstname==null || $scope.lastname==null || $scope.email==null || $scope.password==null){
			$scope.flag=false;
			$scope.message="fill all required fields";
		}
		if($scope.password!=$scope.repeat){
			$scope.flag=false;
			$scope.message="Passwords donot match";
		}
		if(!$scope.flag){
		$state.go('activate');
		}

		}
});
		