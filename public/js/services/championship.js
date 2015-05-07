var app=angular.module('ScoreBoardApp');
app.factory('championship',function($http){
	return{
	"ChampionShip_Name":"",
	"organizer":"",
	"description":"",
	"overs":"",
	"config":[],
	"players":"12",
	"teams":[],
	"pointstable":[],
	"matchlist":[],

	setChampionship:function(name,organizer,desc,overs){
		console.log("set cham called!");
		this.ChampionShip_Name=name;
		this.overs=overs;
	 	this.organizer=organizer;
	 	this.description=desc;
		$http.post('api/championship',{
	 		"chamname":this.ChampionShip_Name,
	 		"overs":this.overs,
	 		"players":this.players,
	 		"organizer":this.organizer,
	 		"description":this.description
	 	});
	 	console.log("request done!");
		},

	addPlayer:function(id,name,skills,position){
		if(!name||!skills||!position){
			return "Please fill all fields";
		}
		this.teams[id-1].players.push({
			"id":this.teams[id-1].players.length+1,
			"name":name,
			"skills":skills,
			"position":position
		});
		$http.post('api/addPlayer',{
			"teamid":id,
			"pname":name,
			"skills":skills,
			"position":position
		});
	},
	addTeam:function(teamname){
		if(!teamname){
			return "Please fill all fields";
		}
		this.teams.push({"id":this.teams.length+1,"teamname":teamname,"players":[]});
		$http.post('api/addTeam',{
	 			"id":this.teams.length,
	 			"teamname":teamname,
	 			"players":[]
	 	});
	},
	getTeams:function(){
		console.log(this.teams);
		return this.teams;
	},
	getPlayers:function(id){
		return this.teams[id-1].players;
	},
	getChampionships:function(){
		return $http.get('api/championship').success(function(championship){
			return championship;
		});
	}
	}
});