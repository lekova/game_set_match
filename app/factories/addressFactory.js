'use strict';

(function() {

	angular.module('gameSetMatch').factory('AddressFactory', AddressFactory);
	AddressFactory.$inject = ['$http', 'appSettings'];

	function AddressFactory($http, appSettings) {
		var address = {};

		function createAddress(addressToCreate) {
			console.log("addressToCreate is ", addressToCreate);
			return $http.post(appSettings.apiUrl + '/addresses', addressToCreate).success(function(response) {
				angular.copy(response, address);
			});
		};

		function updateAddress(addressToUpdate) {
			console.log("addressToUpdate.id is: ", addressToUpdate.id);
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
