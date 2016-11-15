angular.module('pureStorageApp')

.controller('FormCtrl', function($scope, TabData){

	console.log('click');

	var data = TabData.customerSurvey;
	console.log(data);

	
	$scope.tabs = data;

});