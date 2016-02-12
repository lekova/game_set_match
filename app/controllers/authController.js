'use strict';

(function() {
	angular.module('gameSetMatch').controller('AuthCtrl', AuthCtrl);

	AuthCtrl.$inject = ['$location', 'AuthFactory'];

	function AuthCtrl($location, AuthFactory) {
		var vm = this;
		vm.currentUser = AuthFactory.currentUser;
		vm.credentials = {};
		vm.serverErrors = false;

		vm.login = function(credentials) {
			AuthFactory.login(credentials).then(function(response) {
				vm.credentials = {};
				$location.path('');
			}, function() {
				vm.serverErrors = true;
			});
		};

		vm.logout = function() {
			AuthFactory.logout();
		};

		vm.closeWarningMessage = function() {
			vm.serverErrors = !vm.serverErrors;
		};

		vm.isLoggedIn = function() {
			return AuthFactory.isLoggedIn();
		};

		vm.resetForm = function() {
			vm.credentials = {};
		}

		vm.goHome = function() {
			$location.path('/home');
		}
	};
})();
