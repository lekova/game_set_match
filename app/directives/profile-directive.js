'use strict';

(function() {

	angular.module('gameSetMatch').directive('gsmProfile', gsmProfile);

	function gsmProfile() {

		return {
			restrict: 'E',
			templateUrl: 'app/views/profile.html',
			controller: 'ProfileCtrl',
			controllerAs: 'ProfileCtrl',
			bindToController: true
		};
	};

})();
