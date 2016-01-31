'use strict';

(function() {

	var ChartFactory = function($http, $window, $location, appSettings) {
		var statistics = {};
		var totals = {};
		var labels = [];
		var data = [[]];

		var dataFilter = function(response) {
			console.log('dataFilter response:', response);
			labels.length = 0;

			Array.prototype.push.apply(totals, response.totals);
			Array.prototype.push.apply(labels, response.labels);
		};

		var getStatistics = function() {
			return $http.get(appSettings.apiUrl + '/dashboard/statistics').then(function(response) {
				angular.copy(response.data, statistics);
				angular.copy(statistics.totals, totals);
				angular.copy(statistics.labels, labels);
				angular.copy(statistics.data, data);
			});
		};

		return {
			labels: labels,
			totals: totals,
			data: data,
			getStatistics: getStatistics,
			dataFilter: dataFilter
		};
	};

	ChartFactory.$inject = ['$http', '$window', '$location', 'appSettings'];
	angular.module('gameSetMatch').factory('ChartFactory', ChartFactory);
})();
