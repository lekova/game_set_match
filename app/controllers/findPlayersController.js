'use strict';

(function() {
	angular.module('gameSetMatch').controller('FindPlayersCtrl', FindPlayersCtrl);

	FindPlayersCtrl.$inject = ['AuthFactory', 'UserFactory'];

	function FindPlayersCtrl(AuthFactory, UserFactory) {
		var vm = this;

		vm.currentUser = AuthFactory.currentUser;
		vm.players = UserFactory.users;
		vm.showPlayers = false;

		vm.findPlayers = function() {
			UserFactory.findPlayers(vm.city);
			vm.showPlayers = true;
		};
	}
})();
