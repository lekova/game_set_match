'use strict';

(function() {
	angular.module('gameSetMatch').controller('UsersCtrl', UsersCtrl);

	UsersCtrl.$inject = ['$routeParams', '$location', 'UserFactory', 'AuthFactory'];

	function UsersCtrl($routeParams, $location, UserFactory, AuthFactory) {
		let vm = this;
		let userId = $routeParams.userId;
		vm.users = UserFactory.users;
		vm.user = UserFactory.user;
		vm.search = UserFactory.search;
		vm.editMode = false;
		vm.credentials = {};
		vm.userProficiencyType = {};
		vm.userAddress = {};
		vm.currentUser = AuthFactory.currentUser;
		vm.opponents = UserFactory.opponents;

		vm.createUser = function() {
			UserFactory.createUser({
				credentials: vm.user,
				proficiency: vm.userProficiencyType,
				userAddress: vm.userAddress
			})
			.then(function(response) {
				vm.credentials = {};
				$location.path('');
				console.log('$location is:', $location);
			},
			function(response) {
				vm.serverErrors = true;
			});
		};

		vm.getOpponents = function() {
			UserFactory.getOpponents();
		};

		vm.closeWarningMessage = function() {
			vm.serverErrors = !vm.serverErrors;
		};

		vm.updateUser = function(user) {
			UserFactory.updateUser(user);
		};

		vm.showAllUsers = function() {
			UserFactory.getUsers();
		};

		vm.showProfile = function() {
			UserFactory.getProfile();
		};

		vm.followUser = function(id) {
			UserFactory.followUser(id);
		};

		vm.renderPreview = function() {
			let reader = new FileReader();

			reader.onload = function(e) {
				$('#profile').attr('src', e.target.result);
			};

			reader.readAsDataURL($('#profile-preview')[0].files[0]);
		};

		vm.isCurrentUser = function(id) {
			return AuthFactory.currentUser.id === id;
		};

		vm.unfollowUser = function(id) {
			UserFactory.unfollowUser(id);
		};

		vm.showUser = function() {
			UserFactory.getUser(userId);
		};

		vm.searchUsers = function() {
			UserFactory.getUsers(search);
		};

		vm.removeUser = function(user) {
			UserFactory.removeUser(user);
		};

		vm.findUsers = function() {
			UserFactory.findUsers(vm.address);
		};

		function resetForm() {
			vm.user = {};
			vm.serverErrors = false;
		};

		vm.cancel = function() {
			resetForm();
		};

		function init() {
			vm.getOpponents();
			vm.showAllUsers();
		}

		init();
	};
})();
