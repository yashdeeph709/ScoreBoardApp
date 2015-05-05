var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var playerSchema=Schema({
        "id":Number,
        "pname":String,
        "skills":[String],
        "position":String
});
var teamSchema=new Schema({
        "id":Number,
        "teamname":String,
        "players":[playerSchema]
});
var pointSchema=new Schema({
        "teamname":String,
        "points":Number
});
var matchSchema=new Schema({
        "date":String,
        "team1":String,
        "team2":String,
        "winner":String
});
var championshipSchema=new Schema({
        "complete":Number,
        "user":String,
        "ChampionShip_Name":String,
        "organizer":String,
        "description":String,
        "overs":Number,
        "teams":[teamSchema],
        "pointstable":[pointSchema],
        "matchlist":[matchSchema]
});
var Championship=mongoose.model('Championship',championshipSchema);
module.exports=Championship;