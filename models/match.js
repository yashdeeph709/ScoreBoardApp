var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ball=new Schema({
		ballno:Number,
		run:Number,
		extra:String,
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
		Runs:Number
});

var bowler=new Schema({
		Name:String,
		Overs:Number,
		Wicket:Number
});


var ining=new Schema({
		team:String,
		order:Number,
		strike:Boolean,
		runrate:Number,
		runs:Number,
		overs:{
				over:Number,
				ball:Number
		},
		boundaries:Number,
		sixes:Number,
//		balls:[ball],
		wickets:[wicket],
		batting:[batsman],
		bowling:[bowler]
});

var matchSchema=new Schema({
		completed:Boolean,
		IningNumber:Number,
        UserId:String,
        Team1:String,
        Team2:String,
        Winner:String,
        overs:Number,
        Inings:[ining]
});


var match=mongoose.model('match',matchSchema);

module.exports=match;