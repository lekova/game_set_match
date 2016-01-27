'use strict';

(function() {

	angular.module('gameSetMatch').factory('AddressFactory', AddressFactory);
	AddressFactory.$inject = ['$http', 'appSettings'];

	function AddressFactory($http, appSettings) {
		var address = {};

		function createAddress(addressToCreate) {
			console.log("addressToCreate is ", addressToCreate);
			return $http.post(appSettings.apiUrl + '/addresses', addressToCreate).success(function(response) {
				console.log("address factory response", response);
				angular.copy(response, address);
			});
		};

		return {
			createAddress: createAddress
		};
	}
})();
