'use strict';

(function() {
	angular.module('gameSetMatch').controller('HomeController', HomeController);

	HomeController.$inject = ['$location', '$document'];

	function HomeController($location, $document) {

		angular.element($document).find('body').addClass('body-bg-image');

		this.login = function() {
			$location.path('/login');
		};

		this.signup = function() {
			$location.path('/signup');
		};
	};
})();
