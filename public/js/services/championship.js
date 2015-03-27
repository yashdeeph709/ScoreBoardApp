var app=angular.module('ScoreBoardApp');
app.factory('championship',function(){
	return{
	"ChampionShip_Name":"IPL",
	"overs":"10",
	"config":[],
	"players":"12",
	"teams":[{
			"teamname":"",
			"players":[{
				"playername":"",
				"skills":["batting","bowling"],
				"position":"opener"
			},{
				"playername":"",
				"skills":["batting","bowling"],
				"position":"captain"
			}]
			}],
	"pointstable":[
	
	],
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
	}
	}
});