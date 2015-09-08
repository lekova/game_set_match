'use strict';

(function(){

  angular.module('gameSetMatch').config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html'
      })
      .when('/login', {
        templateUrl: 'views/login.html'
      })
      .when('/register', {
        templateUrl: 'views/register.html'
      })
      .when('/users', {
        templateUrl: 'views/users-list.html'
      })
      .when('/users/:userId', {
        templateUrl: 'views/user-shows.html'
      })
      .when('/addresses', {
        templateUrl: 'views/addresses.html'
      })
      .when('/addresses/:id', {
        templateUrl: 'views/address-view.html'
      })
      .when('/games', {
        templateUrl: 'views/games.html'
      })
      .when('/games/:id', {
        templateUrl: 'views/game-view.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

})();
