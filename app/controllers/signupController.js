'use strict';

(function() {

	angular.module('gameSetMatch').controller('SignupController', SignupController);
	SignupController.$inject = ['$location', 'UserFactory'];

	function SignupController($location, UserFactory) {
		var vm = this;

		vm.user = {};
		vm.userProficiencyType = {};

		vm.createUser = function() {
			console.log('create user function inside Signup controller');
			if(vm.passwordMacth()) {
				console.log('inside create user');
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
		}

		vm.clearForm = function() {
			console.log('clear form');
			console.log('vm.user');
			vm.user = {};
		}

		vm.passwordMacth = function() {
			console.log('password match burron clicked!');
			return vm.password === vm.passwordConfirmation;
		}
	};
})();
