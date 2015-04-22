app.factory('MatchService',function($http){
	return{
        Team1:"",
        Team2:"",
        Winner:"",
        TotalOvers:0,
        Inings:[],
		
		startMatch:function(team1,team2,bat1,bat2,bowl){
				this.Team1=team1;
				this.Team2=team2;
				this.addIning(1)
				this.addBatsman(1,bat1,0);
				this.addBatsman(2,bat2,0);
				this.addBowler(bowl);
				console.log(this);
				var reqdata={
					team1:team1,
					team2:team2,
					bat1:bat1,
					bat2:bat2,
					bowl:bowl
				}
				$http.post('/match/startmatch',reqdata);
		},
		addIning:function(order){
			this.Inings.push({
			order:order,
			runrate:0,
			overs:0,
			boundaries:0,
			sixes:0,
			balls:[],
			wickets:[],
			batting:[],
			bowling:[]
			});			
		},
		addBowler:function(name,overs,wickets){
			this.Inings[0].bowling.push({
			Name:String,
			Overs:Number,
			Wicket:Number
			});			
		},
		addBatsman:function(order,name,runs){
			this.Inings[0].batting.push({
			Order:Number,
			Name:String,
			Runs:String			
			});
		},
		addBall:function(run,extra,type){
			this.Inings[0].balls.push({
			ballno:Number,
			run:Number,
			extra:Number,
			type:String,
			});			
		},
		addWicket:function(bat,type,bowler){
			this.inings[1].wickets.push({
			ballno:Number,
			batsman:String,
			type:String,
			bowler:String
			});
		}
	}
});
