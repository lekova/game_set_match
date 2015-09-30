'use strict';

(function() {

	angular.module('gameSetMatch').directive('gsmAddaddress', gsmAddaddress);

	function gsmAddaddress() {
		return {
			restrict: 'E',
			templateUrl: 'app/views/add-address.html'
		};
	};

})();
