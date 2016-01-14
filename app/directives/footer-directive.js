'use strict';

(function() {

	angular.module('gameSetMatch').directive('gsmFooter', gsmFooter);

	function gsmFooter() {

		return {
			restrict: 'E',
			templateUrl: 'app/views/footer.html'
		};
	};

})();
