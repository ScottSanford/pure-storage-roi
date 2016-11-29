angular.module('pureStorageApp')

.controller('FormCtrl', function($scope, $mdSidenav, Mfly){

	$scope.factorProvision = {
		switch: true
	};
	

	$scope.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	};


	$scope.getResults = function() {

		var key = 'pureValues';
		var value = {
			pureValues: data[0].categories
		};

		mflyCommands.putSyncedValue(key, value).done(function(data, status) {
			console.log("Success :: ", data, status);
		});

		mflyCommands.getSyncedValues()
		    .done(function(data, status) {
		        // Success! Do something.
		        console.log(data);
		    })
		    .fail(function(deferred, status) {
		        // Error! Do something.
		    });
	}


});