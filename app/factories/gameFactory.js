'use strict';

(function() {

  angular.module('gameSetMatch').factory('GameFactory', GameFactory);
  GameFactory.$inject = ['$http', '$location', 'appSettings'];

  function GameFactory($http, $location, appSettings) {
    var games = [];
    var game = {};

    var wonGames = [];
    var lostGames = [];
    var upcomingGames = [];

    function getWonPastGames() {
      return $http.get(appSettings.apiUrl + '/games/?won=true&status=1&datetime=true').then(function(response) {
          angular.copy(response.data, wonGames);
        });
    }

    function getLostPastGames() {
      return $http.get(appSettings.apiUrl + '/games/?lost=true&status=1&datetime=true').then(function(response) {
          angular.copy(response.data, lostGames);
        });
    };

    function getUpcomingGames() {
      return $http.get(appSettings.apiUrl + '/games/?status=0').then(function(response) {
          angular.copy(response.data, upcomingGames);
          console.log('===== Upcoming Games response.data:', response.data);
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
        angular.copy(response, game);
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

})();
