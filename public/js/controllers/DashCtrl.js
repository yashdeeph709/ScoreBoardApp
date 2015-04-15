var app=angular.module('ScoreBoardApp');
app.controller('dashboardCtrl',function($scope,$state,ipCookie){
		if(ipCookie('uid')==undefined){
			$state.go('home');
		}
});