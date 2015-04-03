var app=angular.module('ScoreBoardApp');
app.config(router);

function router($stateProvider,$locationProvider){
$locationProvider.html5Mode(true);
$stateProvider.state('home',{'url':'/',templateUrl:'partials/home.html'});
$stateProvider.state('dashboard',{'url':'/dashboard',templateUrl:'partials/Dashboard.html'});
$stateProvider.state('matchstart',{'url':'/start',templateUrl:'partials/MatchStart.html'});
$stateProvider.state('joinus',{'url':'/joinus',templateUrl:'partials/JoinUs.html'});
$stateProvider.state('watch',{'url':'/watch',templateUrl:'partials/Watch.html'});
$stateProvider.state('loop',{'url':'/loop',templateUrl:'partials/MatchLoop.html'});
$stateProvider.state('createcship',{'url':'/championship',templateUrl:'partials/createCship.html'});
$stateProvider.state('teamlist',{'url':'/teamlist',templateUrl:'partials/TeamList.html'});
$stateProvider.state('teamentry',{'url':'/teamentry',templateUrl:'partials/TeamEntry.html'});
$stateProvider.state('playerentry',{'url':'/playerentry/:teamid',templateUrl:'partials/PlayerEntry.html'});
$stateProvider.state('credits',{'url':'/credits',templateUrl:'partials/credit.html'});
}

