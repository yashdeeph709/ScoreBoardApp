var app=angular.module('ScoreBoardApp');
app.config(router);

function router($routeProvider,$locationProvider){
$locationProvider.html5Mode(true);
$routeProvider.when('/',{templateUrl:'partials/Main.html'});
$routeProvider.when('/start',{templateUrl:'partials/MatchStart.html'});
$routeProvider.when('/watch',{templateUrl:'partials/Watch.html'});
$routeProvider.when('/loop',{templateUrl:'partials/MatchLoop.html'});
$routeProvider.when('/championship',{templateUrl:'partials/Championship.html'});
$routeProvider.when('/teamlist',{templateUrl:'partials/TeamList.html'});
$routeProvider.when('/teamentry',{templateUrl:'partials/TeamEntry.html'});
$routeProvider.when('/credits',{templateUrl:'partials/Credits.html'});
}

