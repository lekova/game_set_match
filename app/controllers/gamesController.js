'use strict';

(function() {

	angular.module('gameSetMatch').controller('GamesCtrl', GamesCtrl);

	GamesCtrl.$inject = ['$location', 'GameFactory', 'AuthFactory', '$scope'];

	function GamesCtrl($location, GameFactory, AuthFactory, $scope) {
		var vm = this;
		vm.currentUser = AuthFactory.currentUser;
		vm.wonGames = GameFactory.wonGames;
		vm.lostGames = GameFactory.lostGames;
		vm.upcomingGames = GameFactory.upcomingGames;
		vm.game = {};

		vm.createGame = function() {
			GameFactory.createGame({
				datetime: vm.datetime,
				duration: vm.duration,
				place: vm.place,
				comment: vm.comment,
				status: 0
			}).then(function(response) {
				// TODO
			}, function(response) {
				vm.serverErrors = true;
			});
		};

		vm.getWonPastGames = function() {
			GameFactory.getWonPastGames();
		}

		vm.getLostPastGames = function() {
			GameFactory.getLostPastGames();
		}

		vm.getUpcomingGames = function() {
			GameFactory.getUpcomingGames();
		}

		vm.getWonPastGames();
		vm.getLostPastGames();
		vm.getUpcomingGames();
	};

})();
