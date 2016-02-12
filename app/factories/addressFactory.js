'use strict';

(function() {

	angular.module('gameSetMatch').factory('AddressFactory', AddressFactory);
	AddressFactory.$inject = ['$http', 'appSettings'];

	function AddressFactory($http, appSettings) {
		var address = {};

		function createAddress(addressToCreate) {
			return $http.post(appSettings.apiUrl + '/addresses', addressToCreate).success(function(response) {
				angular.copy(response, address);
			});
		};

		function updateAddress(addressToUpdate) {
			return $http.patch(appSettings.apiUrl + '/addresses/' + addressToUpdate.id, addressToUpdate)
				.success(function(response) {
					angular.copy(response, address);
				});
		}

		return {
			createAddress: createAddress,
			updateAddress: updateAddress
		};
	}
})();
