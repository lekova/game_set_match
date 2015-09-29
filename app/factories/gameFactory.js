'use strict';

(function() {

  GameFactory.$inject = ['$http', '$window', '$location', 'appSettings'];

  function GameFactory($http, $window, $location, appSettings) {
    var games = [];
    var game = {};

    var wonGames = [];
    var lostGames = [];
    var upcomingGames = [];

    function getWonPastGames() {
      return $http.get(appSettings.apiUrl + '/games/?won=true&status=1').then(function(response) {
          angular.copy(response.data, wonGames);
        });
    }

    function getLostPastGames() {
      return $http.get(appSettings.apiUrl + '/games/?lost=true&status=1').then(function(response) {
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
        angular.copy(response.data);
        console.log('create game response data: ', response.data);
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

  angular.module('gameSetMatch').factory('GameFactory', GameFactory);
})();
