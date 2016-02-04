'use strict';

(function() {
	angular.module('gameSetMatch').controller('AddressesCtrl', AddressesCtrl);

	AddressesCtrl.$inject = ['AuthFactory', 'AddressFactory'];

	function AddressesCtrl(AuthFactory, AddressFactory) {
		this.address = {};
		this.selected = {};
		this.addressTab = true;
		this.currentUser = AuthFactory.currentUser;

		this.createAddress = function() {
			AddressFactory.createAddress(this.address);
		};

		this.toggleTab = function(bool) {
			// this.addressTab = (this.addressTab === false) ?  true : false;
			this.addressTab = bool;
		};

		this.updateAddress = function() {
			AddressFactory.updateAddress(this.selected);
		};
	};
})();
