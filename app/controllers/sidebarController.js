'use strict';

(function() {

	angular.module('gameSetMatch').controller('SidebarController', SidebarController);
	SidebarController.$inject = ['AuthFactory'];

	function SidebarController(AuthFactory) {
		var vm = this;
		vm.user = AuthFactory.currentUser;

		vm.getCurrentUser = function() {
			AuthFactory.getProfile();
		}
	}

})();
