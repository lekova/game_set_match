'use strict';

(function() {

	angular.module('gameSetMatch').controller('ChartsCtrl', ChartsCtrl);
	ChartsCtrl.$inject = ['$location', 'GameFactory', '$scope'];

	function ChartsCtrl($location, GameFactory, $scope) {
		var vm = this;

		vm.labels = [ 'April', 'May', 'June', 'July', 'August', 'September'];
		vm.series = ['Wins', 'Losses'];
		vm.data = [
			[65, 59, 80, 81, 56, 55, 40],
			[28, 48, 40, 19, 86, 27, 90]
		];

		vm.colours = [{
			'fillColor': 'rgba(0,166,90,0.4)',
			'strokeColor': 'rgba(0,140,80,1)',
			'pointColor': 'rgba(0,166,90,1)',
			'pointStrokeColor': '#fff',
			'pointHighlightFill': '#00A65A',
			'pointHighlightStroke': 'rgba(0,140,80,0.8)'
		},
		{
			'fillColor': 'rgba(0, 192, 239, 0.4)',
			'strokeColor': 'rgba(0, 110, 190, 1)',
			'pointColor': 'rgba(0, 192, 239, 1)',
			'pointStrokeColor': '#fff',
			'pointHighlightFill': '#00C0EF',
			'pointHighlightStroke': 'rgba(0,110,190,0.8)'
		}];

		vm.onClick = function(points, evt) {
			console.log(points, evt);
		};

		vm.wonGamesLine = GameFactory.getWonPastGames();

		vm.lostGamesLine = [];

		vm.showChart = function() {
			GameFactory.getWonPastGames();
			GameFactory.getLostGames();
		}
	};

})();
