var app=angular.module('ScoreBoardApp');
app.config(router);

function router($routeProvider){

$routeProvider.when('/',{templateUrl:'partials/home.html'});
$routeProvider.when('/setup',{templateUrl:'partials/ScoreInit.html'});

}

