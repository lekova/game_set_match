'use strict';

(function() {
	angular.module('gameSetMatch').controller('NavbarCtrl', NavbarCtrl);

	NavbarCtrl.$inject = ['$location', 'UserFactory', 'AuthFactory', '$scope'];

	function NavbarCtrl($location, UserFactory, AuthFactory, $scope) {
		var vm = this;
		vm.searchString = '';
		vm.currentUser = AuthFactory.currentUser;

		vm.isLoggedIn = function() {
			return AuthFactory.isLoggedIn();
		};

		vm.logOut = function() {
			AuthFactory.logOut();
		};

		var getProfile = function() {
			AuthFactory.getProfile();
		};

		$scope.$watch(function() { return self.currentUser; }, function(user) {
			if (!user && simpleStorage.get('gsm-user-token')) {
				getProfile();
			}
		});
	};
})();
