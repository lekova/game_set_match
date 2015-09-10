'use strict';

(function(){

  angular.module('gameSetMatch').config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/home', {
        templateUrl: 'app/views/home.html'
      })
      .when('/', {
        templateUrl: 'app/views/dashboard-page.html'
      })
      .when('/login', {
        templateUrl: 'app/views/login-page.html'
      })
      .when('/signup', {
        templateUrl: 'app/views/signup-page.html'
      })
      .when('/profile', {
        templateUrl: 'app/views/profile-page.html'
      })
      .when('/users', {
        templateUrl: 'app/views/find-users-page.html',
        controller: 'UserCtrl',
        controllerAs: 'UserCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'app/views/profile-page.html'
      })
      .when('/addresses', {
        templateUrl: 'app/views/addresses.html'
      })
      .when('/addresses/:id', {
        templateUrl: 'app/views/address-view.html'
      })
      .when('/games', {
        templateUrl: 'app/views/games.html'
      })
      .when('/games/:id', {
        templateUrl: 'app/views/game-view.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

})();
