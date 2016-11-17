angular.module('pureStorageApp')

.controller('FormCtrl', function($scope, TabData, $mdSidenav){

	var data = TabData.customerSurvey;
	$scope.tabs = data;

	$scope.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	};

	// Just some manual logic of the Excel Sheet
	var flashArrayInUse = 'FlashArray//m';
	var flashArrayGen   = 'FlashArray//m';

	var sumTotalUsableCapacity = 'someNumber' // int;
	var YearOnePureStorageEffectiveTB = 'someNumber'; // int

	if (flashArrayInUse == flashArrayGen) {
		if (sumTotalUsableCapacity == 0) {
			return 0;
		} else{
			var dataReduction = YearOnePureStorageEffectiveTB/sumTotalUsableCapacity;
			return dataReduction;
		}
	}


});