'use strict';

(function() {

	angular.module('gameSetMatch').directive('gsmLoginForm', gsmLoginForm);

	function gsmLoginForm() {

		return {
			restrict: 'E',
			templateUrl: 'app/views/login-form.html',
			controller: 'AuthCtrl',
			controllerAs: 'AuthCtrl',
			bindToController: true,
			scope: {
				credentials: '&'
			}
		};
	};

})();
