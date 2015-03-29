var app=angular.module('ScoreBoardApp');
app.factory('championship',function(){
	return{
	"ChampionShip_Name":"IPL",
	"overs":"10",
	"config":[],
	"players":"12",
	"teams":[],
	"pointstable":[],
	"matchlist":[{
	"team1":"chennai superkings",
	"team2":"rajasthan royals",
	"winner":"rajasthan royals",
	"winningtag":"rajsthan royals won by 10",
	"inining1":["123","45.5","5"],
	"inining2":["124","12","4"]
	}],
	setChampionshipName:function(name){
		this.ChampionShip_Name=name;
	},
	setOvers:function(overs){
		this.overs=overs;
	},
	setPlayers:function(players){
		this.players=players;
	},
	setConfig:function(noob,wide,overstrike){
		this.config[0]=noob;
		this.config[1]=wide;
	 	this.config[2]=overstrike;	
	},
	getTeams:function(){
		console.log(this.teams);
		return this.teams;
	},
	getPlayers:function(id){
		console.log(this.teams[id-1].players);
		return this.teams[id-1].players;
	},
	addPlayer:function(id,name,skills,position){
		console.log(this.teams[id-1].players);
		this.teams[id-1].players.push({"id":this.teams[id-1].players.length+1,"name":name,"skills":skills,"position":position});
	},
	addTeam:function(teamname){
		console.log(this.teams.length);
		this.teams.push({"id":this.teams.length+1,"teamname":teamname,players:[]});
	}
	}
});