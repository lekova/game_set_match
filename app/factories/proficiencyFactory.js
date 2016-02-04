'use strict';

(function() {

	angular.module('gameSetMatch').factory('ProficiencyFactory', ProficiencyFactory);
	ProficiencyFactory.$inject = ['$http', 'appSettings'];

	function ProficiencyFactory($http, appSettings) {
		var proficiencyTypes = [];

		var getProficiencyLevels = function() {
			$http.get(appSettings.apiUrl + '/proficiency_types')
				.then(function(response) {
					angular.copy(response.data, proficiencyTypes);
				});
		};

		return {
			proficiencyTypes: proficiencyTypes,
			getProficiencyLevels: getProficiencyLevels
		};
	};
})();
