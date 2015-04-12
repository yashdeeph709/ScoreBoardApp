var Championship=require('../models/championship.js');

module.exports.createChampionship=function(championship,next){
	var newChampionship=new Championship({
        "user":"default",
        "ChampionShip_Name":championship.chamname,
        "organizer":championship.organizer,
        "description":championship.description,
        "overs":championship.overs,
        "players":championship.players,
        "config":championship.config,
        "teams":[],
        "pointstable":[],
        "matchlist":[]
	});
	newChampionship.save(function(err){
		if(err){
			return next(err);
		}
		next(null);
	});
};