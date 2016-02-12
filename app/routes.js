'use strict';

(function() {

	angular.module('gameSetMatch').config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'app/views/home.html',
				controller: 'HomeController',
				controllerAs: 'HomeCtrl'
			})
			.when('/', {
				templateUrl: 'app/views/dashboard.html',
				controller: 'DashboardCtrl',
				controllerAs: 'DashCtrl'
			})
			.when('/login', {
				templateUrl: 'app/views/login-page.html'
			})
			.when('/signup', {
				templateUrl: 'app/views/signup-page.html'
			})
			.when('/users', {
				templateUrl: 'app/views/find-users-page.html'
			})
			.when('/users/:userId', {
				templateUrl: 'app/views/profile-page.html'
			})
			.when('/addresses', {
				templateUrl: 'app/views/addresses-page.html',
				controller: 'AddressesCtrl',
				controllerAs: 'AddressesCtrl'
			})
			.when('/addresses/:id', {
				templateUrl: 'app/views/address-view.html'
			})
			.when('/games', {
				templateUrl: 'app/views/games.html'
			})
			.when('/games/:id', {
				templateUrl: 'app/views/game-view.html',
				controller: 'GamesCtrl',
				controllerAs: 'GamesCtrl'
			})
			.when('/messages', {
				templateUrl: 'app/views/messages.html',
				controller: 'MessagesCtrl',
				controllerAs: 'MessagesCtrl'
			})
			.when('/calendar', {
				templateUrl: 'app/views/calendar.html',
				controller: 'CalendarCtrl',
				controllerAs: 'CalendarCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
})();
