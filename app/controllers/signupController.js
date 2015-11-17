'use strict';

(function() {
	angular.module('gameSetMatch').controller('SignupController', SignupController);

	SignupController.$inject = ['UserFactory'];

	function SignupController(UserFactory) {
		let vm = this;

		vm.user = {};
		vm.message = '';
		vm.userProficiencyType = {};
		vm.userProficiencyType.proficiency_type_id = 1;

		vm.createUser = function(isValid) {
			if (!isValid) {
				vm.message = 'There are still invalid fields';
				return;
			}

			if (vm.isDuplicateEmail(vm.user.email)) {
				vm.message = 'Email already exists';
				return;
			}

			UserFactory.createUser({
				credentials: vm.user,
				proficiency: vm.userProficiencyType
			}).then(function(response) {
				vm.credentials = {};
			}, function(response) {
				vm.serverErrors = true;
			});
		};

		vm.resetForm = function() {
			vm.user = {};
			vm.userProficiencyType = {};
			vm.userProficiencyType.proficiency_type_id = 1;
		};

		vm.isDuplicateEmail = function(email) {
			UserFactory.checkEmail(email);
		};
	};
})();
