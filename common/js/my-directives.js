angular.module('myDirectives', [])

.directive('menuHeader', function($location, $mdSidenav){
	return {

		restrict: 'E', 
		replace: true, 
		transclude: true,
		templateUrl: 'common/tmpls/menu/menu.html', 
		link: function(scope, element, attrs) {
			scope.openSideNav = function () {
		        $mdSidenav('left').toggle();;
		    };

			scope.closeInteractive = function () {
		        mflyCommands.close();
		    };
		}

	}
})

.directive('yesNo', function() {
    return {
        template: '<span>{{ yesNo ? "yes" : "no" }}</span>',
        scope: {
            yesNo: '='
        }
    };
});