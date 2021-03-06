'use strict';

(function() {
	angular.module('gameSetMatch').controller('GamesCtrl', GamesCtrl);

	GamesCtrl.$inject = ['$scope', '$location', 'GameFactory', 'AuthFactory', 'UserFactory'];

	function GamesCtrl($scope, $location, GameFactory, AuthFactory, UserFactory) {
		var vm = this;
		vm.currentUser = AuthFactory.currentUser;
		vm.wonGames = GameFactory.wonGames;
		vm.lostGames = GameFactory.lostGames;
		vm.upcomingGames = GameFactory.upcomingGames;
		vm.opponents = UserFactory.users;
		// for creating new game
		vm.game = {};
		vm.score = {};

		// for sorting
		vm.sortWinsBy = 'datetime';
		vm.sortLossesBy = 'datetime';
		vm.reverseWins = false;
		vm.reverseLosses = false;
		vm.label = false;
		vm.submitted = false;

		vm.interacted = function(field) {
			return vm.submitted || field.$dirty;
		};

		vm.createGame = function() {
			vm.submitted = true;
			vm.game.loser_id = vm.getLoser();
			vm.game.score = vm.getScore();
			vm.game.status = 1;

			var obj = {
				datetime: vm.game.datetime,
				durations: vm.game.duration,
				place: vm.game.city,
				winner_id: Number(vm.game.winner_id),
				loser_id: vm.game.loser_id,
				score: vm.game.score,
				comment: vm.game.comment,
				status: 1
			};

			GameFactory.createGame(obj).then(function(response) {
				vm.label = true;
				angular.copy(response.data, vm.game);
				vm.resetForm();
				vm.getWonPastGames();
				vm.getLostPastGames();
			},
			function(response) {
				vm.serverErrors = true;
			});
		};

		vm.getOpponents = function() {
			UserFactory.getUsers();
		};

		vm.getWonPastGames = function() {
			GameFactory.getWonPastGames();
		};

		vm.getLostPastGames = function() {
			GameFactory.getLostPastGames();
		};

		vm.getUpcomingGames = function() {
			GameFactory.getUpcomingGames();
		};

		vm.getScore = function() {
			var score = vm.score.scoreOneLeft + ':' + vm.score.scoreOneRight + ', ' +
						vm.score.scoreTwoLeft + ':' + vm.score.scoreTwoRight + ', ' +
						vm.score.scoreThreeLeft + ':' + vm.score.scoreThreeRight;
			return score;
		};

		vm.getLoser = function() {
			return Number(vm.game.winner_id) === Number(vm.currentUser.id) ? vm.opponent.id : vm.currentUser.id;
		};

		vm.sortWinsBy = function(propName) {
			vm.sortWinsBy = propName;
			vm.reverseWins = !vm.reverseWins;
		};

		vm.sortLossesBy = function(propName) {
			vm.sortLossesBy = propName;
			vm.reverseLosses = !vm.reverseLosses;
		};

		vm.resetForm = function() {
			$scope.addGameForm.$setPristine();
			vm.game = {};
			vm.score = {};
			vm.label = false;
		};

		vm.getWonPastGames();
		vm.getLostPastGames();
		vm.getUpcomingGames();
		vm.getOpponents();
	}
})();
