'use strict';
(function() {
	angular.module('gameSetMatch').controller('FindPlayersCtrl', FindPlayersCtrl);

	FindPlayersCtrl.$inject = ['AuthFactory', 'UserFactory', 'ProficiencyFactory'];

	function FindPlayersCtrl(AuthFactory, UserFactory, ProficiencyFactory) {
		let vm = this;

		vm.currentUser = AuthFactory.currentUser;
		vm.proficiencyTypes = ProficiencyFactory.proficiencyTypes;
		vm.players = UserFactory.users;
		vm.showPlayers = false;

		vm.getProficiencyTypes = function() {
			ProficiencyFactory.getProficiencyLevels();
		};

		vm.findPlayers = function() {
			UserFactory.findUsers(vm.city);
			vm.showPlayers = true;
		};

		vm.getProficiencyTypes();
	}
})();
