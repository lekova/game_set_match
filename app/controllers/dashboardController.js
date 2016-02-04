'use strict';

(function() {
	angular.module('gameSetMatch').controller('DashboardCtrl', DashboardCtrl);

	DashboardCtrl.$inject = ['ChartFactory'];

	function DashboardCtrl(ChartFactory) {
		var vm = this;

		vm.statistics = ChartFactory.statistics;
		vm.totals = ChartFactory.totals;
		vm.labels = ChartFactory.labels;
		vm.data = ChartFactory.data;
		vm.nodata = false;

		vm.series = ['Wins', 'Losses'];
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

		vm.getStatistics = function() {
			ChartFactory.getStatistics().then(function() {
				if (vm.data[0].length === 0) {
					vm.nodata = true;
				}
			});
		};

		vm.onClick = function(points, evt) {
			console.log(points, evt);
		};

		vm.getStatistics();
	}
})();
