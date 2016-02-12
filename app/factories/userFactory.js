'use strict';

(function() {

	angular.module('gameSetMatch').factory('UserFactory', UserFactory);
	UserFactory.$inject = ['$http', '$location', 'appSettings'];

	function UserFactory($http, $location, appSettings) {
		var users = [];
		var user = {};
		var opponents = [];
		var proficiency = {};

		function setUser(newUser) {
			angular.copy(newUser, user);
		};

		function getUser(id) {
			return $http.get(appSettings.apiUrl + '/users/' + id)
				.then(function(response) {
					angular.copy(response.data.user, user);
				});
		};

		function getUsers() {
			return $http.get(appSettings.apiUrl + '/users')
				.then(function(response) {
					angular.copy(response.data, users);
				});
		};

		function findPlayers(city) {
			return $http.get(appSettings.apiUrl + '/users/?city=' + city)
					.success(function(response) {
						return new Promise(function(resolve, reject) {
							angular.copy(response, users);
						});
					});
		};

		function checkEmail(email) {
			return $http.get(appSettings.apiUrl + '/users/?email=' + email)
				.success(function(response) {
					angular.copy(response, users);
				});
		};

		function getOpponents() {
			return $http.get(appSettings.apiUrl + '/opponents')
				.then(function(response) {
					angular.copy(response.data, opponents);
				});
		}

		function updateUser(id, userForUpdate) {
			var params = { user: userForUpdate };
			return $http.patch(appSettings.apiUrl + '/users/' + id + "/", params)
				.then(function(response) {
					angular.copy(response.data.user, user);
					location.reload();
				});
		};

		function updateUserProficiency(id, proficiency_id) {
			var params = { proficiency_types: { proficiency_type_id: proficiency_id } };
			debugger;
			return $http.patch(appSettings.apiUrl + '/users/' + id + "/proficiency/", params)
				.then(function(response) {
					angular.copy(response.data.proficiency, proficiency);
					location.reload();
				});
		};

		function createUser(userToCreate) {
			return $http.post(appSettings.apiUrl + '/signup', userToCreate)
				.success(function(response) {
					simpleStorage.set('gsm-user-token', response.token, {TTL: 86400});
					$http.defaults.headers.common.Authorization = 'Token token=' + response.token;
					$location.path('/users/' + response.id);
					location.reload();
				});
		};

		function updateEmailOrPassword(id, credentials) {
			var params = {
				user: {
					password: credentials.password,
					password_confirmation: credentials.password_confirmation
				}};
			return $http.patch(appSettings.apiUrl + '/users/' + id, params)
				.success(function(response) {
					location.reload();
				});
		}

		function deleteUser(userToDelete) {
			return $http.delete(appSettings.apiUrl + '/users/' + userToDelete.id);
		};

		return {
			user: user,
			users: users,
			opponents: opponents,
			getUser: getUser,
			setUser: setUser,
			checkEmail: checkEmail,
			getOpponents: getOpponents,
			findPlayers: findPlayers,
			getUsers: getUsers,
			deleteUser: deleteUser,
			updateUser: updateUser,
			updateUserProficiency: updateUserProficiency,
			createUser: createUser,
			updateEmailOrPassword: updateEmailOrPassword,
		};
	};

})();
