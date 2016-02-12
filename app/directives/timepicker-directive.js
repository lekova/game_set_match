'use strict';

(function() {

	angular.module('gameSetMatch').directive('gsmTimepicker', gsmTimepicker);

	function gsmTimepicker() {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				element.timepicker({
					showInputs: false
				});
			}
		};
	};

})();
