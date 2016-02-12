'use strict';

(function() {
	angular.module('gameSetMatch').controller('AddressesCtrl', AddressesCtrl);

	AddressesCtrl.$inject = ['AuthFactory', 'AddressFactory'];

	function AddressesCtrl(AuthFactory, AddressFactory) {
		var vm = this;
		vm.address = {};
		vm.selected = {};
		vm.addressTab = true;
		vm.currentUser = AuthFactory.currentUser;

		vm.createAddress = function() {
			var result = vm.codeAddress(vm.address);
			result.then(function(value) {
				AddressFactory.createAddress(value);
			}).catch(function(error) {
				console.log("promise error is ", error);
			});
		};

		vm.toggleTab = function(bool) {
			// vm.addressTab = (vm.addressTab === false) ?  true : false;
			vm.addressTab = bool;
		};

		vm.updateAddress = function() {
			AddressFactory.updateAddress(vm.selected);
		};

		vm.codeAddress = function codeAddress(address) {
			var addressStr = address.street + ",  " + address.city + ", " + address.state + ", " + address.zipcode;
			console.log(addressStr);

			var geocoder = new google.maps.Geocoder();
			return new Promise(function(resolve, reject) {
				geocoder.geocode( { 'address': addressStr }, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						address.lat = results[0].geometry.location.lat();
						address.lng = results[0].geometry.location.lng();
						resolve(address);
					} else {
						console.log("Geocode was not successful for the following reason: " + status);
						reject(status);
					}
				});
			});
		};
	}
})();
