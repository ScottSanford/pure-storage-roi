angular.module('pureStorageApp')

.controller('FormCtrl', function($scope, TabData, $mdSidenav, Mfly){

	var data = TabData.customerSurvey;
	$scope.tabs = data;

	$scope.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	};

	var key = 'cat';
	var value = {name: 'Jasmine', age: 23};

	$scope.getResults = function() {
		Mfly.getSyncedValue(key, value).then(function(data){
			console.log(data);
		});
		
	}


});