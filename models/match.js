var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ball=new Schema({
		ballno:Number,
		run:Number,
		extra:Number,
		type:String,
});

var wicket=new Schema({
		ballno:Number,
		batsman:String,
		type:String,
		bowler:String
});

var batsman=new Schema({
		Order:Number,
		Name:String,
		Runs:String
});

var bowler=new Schema({
		Name:String,
		Overs:Number,
		Wicket:Number
});


var ining=new Schema({
		order:Number,
		runrate:Number,
		overs:Number,
		boundaries:Number,
		sixes:Number,
		balls:[ball],
		wickets:[wicket],
		batting:[batsman],
		bowling:[bowler]
});

var matchSchema=new Schema({
        MatchId:Number,
        Team1:String,
        Team2:String,
        Winner:String,
        TotalOvers:Number,
        Inings:[ining]
});
var match=mongoose.model('match',matchSchema);

module.exports=match;