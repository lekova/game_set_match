'use strict';

(function() {

	ChartFactory.$inject = ['$http', '$window', '$location', 'appSettings'];

	function ChartFactory($http, $window, $location, appSettings) {
		var games = [];
		var game = {};

		var wonGames = [];
		var lostGames = [];
		var upcomingGames = [];

		function getWonPastGames() {
			return $http.get(appSettings.apiUrl + '/games/?won=true&status=1').then(function(response) {
				angular.copy(response.data, wonGames);
				console.log('===== Won Past Games response.data:', response.data);
			});
		}

		function getLostPastGames() {
			return $http.get(appSettings.apiUrl + '/games/?lost=true&status=1').then(function(response) {
				angular.copy(response.data, lostGames);
				console.log('===== Won Lost Games response.data:', response.data);
			});
		};

		function getUpcomingGames() {
			return $http.get(appSettings.apiUrl + '/games/?status=0').then(function(response) {
				angular.copy(response.data, upcomingGames);
				console.log('===== Won Upcoming Games response.data:', response.data);
			});
		};

		function updateGame(game) {
			var params = { game: game };
			return $http.patch(appSettings.apiUrl + '/games', params).then(function(response) {
				angular.copy(response.data.game, game);
				location.reload();
			});
		};

		function createGame(game) {
			return $http.post(appSettings.apiUrl + '/games', game).success(function(response) {
				angular.copy(response.data);
			});
		};

		function deleteGame(id) {
			return $http.delete(appSettings.apiUrl + '/games/' + id);
		};

		return {
			games: games,
			game: game,
			wonGames: wonGames,
			lostGames: lostGames,
			upcomingGames: upcomingGames,
			getWonPastGames: getWonPastGames,
			getLostPastGames: getLostPastGames,
			getUpcomingGames: getUpcomingGames,
			updateGame: updateGame,
			createGame: createGame,
			deleteGame: deleteGame
		};
	}

	angular.module('gameSetMatch').factory('ChartFactory', ChartFactory);
})();
