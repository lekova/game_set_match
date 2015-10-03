'use strict';

(function() {

	angular.module('gameSetMatch').controller('SignupController', SignupController);
	SignupController.$inject = ['$location', 'UserFactory'];

	function SignupController($location, UserFactory) {
		var vm = this;

		vm.user = {};
		vm.user.message = '';
		vm.userProficiencyType = {};
		vm.userProficiencyType.proficiency_type_id = 1;

		vm.createUser = function(isValid) {
			if (!isValid) {
				vm.user.message = 'There are still invalid fields';
				return;
			}

			if(isDuplicateEmail) {
				return;
			}

			UserFactory.createUser({
				credentials: vm.user,
				proficiency: vm.userProficiencyType
			}).then(function(response) {
				vm.credentials = {};
				$location.path('/users/' + response.data.id);
			}, function(response) {
				vm.serverErrors = true;
			});
		}

		vm.resetForm = function() {
			vm.user = {};
			vm.userProficiencyType = {};
			vm.userProficiencyType.proficiency_type_id = 1;
		}

		vm.isDuplicateEmail = function() {
			//TODO;
		}
	};
})();
