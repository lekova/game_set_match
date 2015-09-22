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
