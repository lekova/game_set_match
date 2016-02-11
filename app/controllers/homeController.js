'use strict';

(function() {
	angular.module('gameSetMatch').controller('HomeController', HomeController);

	HomeController.$inject = ['$location'];

	function HomeController($location) {

		this.login = function() {
			$location.path('/login');
		};

		this.signup = function() {
			$location.path('/signup');
		};
	};
})();
