'use strict';

(function() {

	angular.module('gameSetMatch').directive('gsmCollapse', gsmCollapse);

	function gsmCollapse($parse) {

		return {
			restrict: 'A',
			controller: 'NavbarCtrl',
			controllerAs: 'NavbarCtrl',
			link: function($scope, element, attrs, NavbarCtrl) {
				element.bind('click', function(event, val) {
					$(element.parent().parent()).collapse('hide');
				});
			}
		}
	};

})();
