'use strict';

(function() {

	angular.module('gameSetMatch').directive('gsmTimepicker', gsmTimepicker);

	function gsmTimepicker() {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				console.log('inside the directive');
				element.timepicker({
					showInputs: false
				});
			}
		};
	};

})();
