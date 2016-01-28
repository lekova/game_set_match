'use strict';

(function() {
	angular.module('gameSetMatch').controller('AddressesCtrl', AddressesCtrl);

	AddressesCtrl.$inject = ['AuthFactory'];

	function AddressesCtrl(AuthFactory) {
		this.user = {};
		this.currentUser = AuthFactory.currentUser;
	};
})();
