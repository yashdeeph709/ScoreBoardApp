var app=angular.module('ScoreBoardApp',['ngRoute']);

app.run(function($rootScope){
	$rootScope.overs=[5,10,15,20,25,30,35,40,45,50];
	$rootScope.nops=[2,3,4,5,6,7,8,9,10,11];
}); 
