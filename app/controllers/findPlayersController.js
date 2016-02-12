'use strict';

(function() {
	angular.module('gameSetMatch').controller('FindPlayersCtrl', FindPlayersCtrl);

	FindPlayersCtrl.$inject = ['AuthFactory', 'UserFactory'];

	function FindPlayersCtrl(AuthFactory, UserFactory) {
		var vm = this;

		vm.currentUser = AuthFactory.currentUser;
		vm.players = UserFactory.users;
		vm.showPlayers = false;
		vm.map = {};

		vm.findPlayers = function() {
			UserFactory.findPlayers(vm.city).then(function(response) {
				vm.players = response.data;
				vm.showPlayers = true;
				vm.setMapBounds();
			}).catch(function(error) {
				console.log("error is ", error);
			});
		};

		vm.initialize = function() {
			var myLatlng = new google.maps.LatLng(42.355, -71.067857);
			var myOptions = {
				zoom: 11,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};

			vm.map = new google.maps.Map(document.getElementById("playersMap"), myOptions);
		};

		vm.initialize();

		// set map bounds around the markers
		vm.setMapBounds = function() {
			var coordinates = [];
			var arrayOfMarkers = [];
			var bounds = new google.maps.LatLngBounds();

			// get the coordinates from all the addresses of every player
			vm.players.forEach(function(player) {
				player.addresses.forEach(function(addr) {
					coordinates.push([addr.lat, addr.lng]);
				});
			});

			if (coordinates.length === 0) {
				return;
			}

			// put all coordinates in an array
			coordinates.forEach(function(item) {
				var marker = new google.maps.Marker({
					map: vm.map,
					position: new google.maps.LatLng(item[0], item[1])
				});
				arrayOfMarkers.push(marker);
			});

			// get all coorcinated from the array and create bounds from them
			// apply the bounds to the map
			arrayOfMarkers.forEach(function(markerItem) {
				bounds.extend(markerItem.getPosition());
			});
			vm.map.fitBounds(bounds);
		};
	}
})();
