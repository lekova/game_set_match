'use strict';

(function() {

	angular.module('gameSetMatch').controller('GamesCtrl', GamesCtrl);

	GamesCtrl.$inject = ['$location', 'GameFactory', 'AuthFactory', 'UserFactory', '$scope', '$filter'];

	function GamesCtrl($location, GameFactory, AuthFactory, UserFactory, $scope, $filter) {
		var vm = this;
		vm.currentUser = AuthFactory.currentUser;
		vm.wonGames = GameFactory.wonGames;
		vm.lostGames = GameFactory.lostGames;
		vm.upcomingGames = GameFactory.upcomingGames;
		vm.users = UserFactory.users;
		// for creating new game
		vm.game = {};
		vm.datetime;
		vm.duration;
		vm.scoreOneLeft;
		vm.scoreOneRight;
		vm.scoreTwoLeft;
		vm.scoreTwoRight;
		vm.scoreThreeLeft;
		vm.scoreThreeRight;
		vm.winnerId;
		vm.opponent = {};
		vm.comment;
		// for sorting
		vm.sortBy = 'datetime';
		vm.reverse = false;

		vm.createGame = function() {
			GameFactory.createGame({
				game: {
					datetime: vm.datetime,
					duration: vm.duration,
					place: vm.city,
					winner_id: vm.winnerId,
					loser_id: vm.getLoser(),
					score: vm.getScore(),
					comment: vm.comment,
					status: 1
				}
			}).then(function(response) {
				console.log('create game response: ', response);
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
		};

		vm.getScore = function() {
			var score = vm.scoreOneLeft + ':' + vm.scoreOneRight + ', ' +
						vm.scoreTwoLeft + ':' + vm.scoreTwoRight + ', ' +
						vm.scoreThreeLeft + ':' + vm.scoreThreeRight;
			console.log('score is ', score);
			return score;
		}

		vm.getLoser = function() {
			return vm.winnerId == vm.currentUser.id ? vm.opponent.id : vm.currentUser.id;
		}

		vm.sortBy = function(propName) {
			vm.sortBy = propName;
			vm.reverse = !vm.reverse;
		};

		vm.getWonPastGames();
		vm.getLostPastGames();
		vm.getUpcomingGames();
	};

})();
