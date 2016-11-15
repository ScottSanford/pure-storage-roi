angular.module('pureStorageApp')

.controller('FormCtrl', function($scope, TabData, $mdSidenav){

	var data = TabData.customerSurvey;
	$scope.tabs = data;

	$scope.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	};


});