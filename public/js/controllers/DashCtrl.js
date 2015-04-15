var app=angular.module('ScoreBoardApp');
app.controller('dashboardCtrl',function($scope,$state,$cookies){
	if(!$cookies.get('uid')){
		$state.go('home');
	}
});