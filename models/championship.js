var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var championshipSchema=new Schema({
        "user":String,
        "ChampionShip_Name":String,
        "organizer":String,
        "description":String,
        "overs":Number,
        "players":Number,
        "config":[],
        "teams":[],
        "pointstable":[],
        "matchlist":[]
});
var Championship=mongoose.model('Championship',championshipSchema);

module.exports=Championship;