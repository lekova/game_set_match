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
			// data.won_games = [];
			// data.lost_games = [];

			Array.prototype.push.apply(totals, response.totals);
			console.log('totals: ', totals);
			Array.prototype.push.apply(labels, response.labels);

			// Array.prototype.push.apply(data.won_games, response.data.won_games_count);
			// Array.prototype.push.apply(data.lost_games, response.data.lost_games_count);
			//data.won_games = response.data.won_games_count;
			//data.lost_games = response.data.lost_games_count;
			// console.log('data.won_games in dataFilter function: ', data.won_games);

		};

		var getStatistics = function() {
			return $http.get(appSettings.apiUrl + '/dashboard/statistics').then(function(response) {
				console.log('response data for statistics:', response.data);
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
