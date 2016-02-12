'use strict';

(function() {
	angular.module('gameSetMatch').controller("ProfileCtrl", ProfileCtrl);

	ProfileCtrl.$inject = ['$location', 'UserFactory', 'AuthFactory', 'ProficiencyFactory'];

	function ProfileCtrl($location, UserFactory, AuthFactory, ProficiencyFactory) {

		this.user = {};
		this.address = {};
		this.currentUser = AuthFactory.currentUser;
		this.proficiencyTypes = ProficiencyFactory.proficiencyTypes;
		this.proficiency = UserFactory.proficiency;
		this.credentials = {};

		this.updateUser = function(userToUpdate) {
			if (!userToUpdate || userToUpdate === '') {
				return;
			}
			UserFactory.updateUser(this.currentUser.id, userToUpdate);
		};

		this.getProficiencyTypes = function() {
			ProficiencyFactory.getProficiencyLevels();
		};

		this.updateUserProficiency = function(proficiencyId) {
			UserFactory.updateUserProficiency(this.currentUser.id, proficiencyId);
		};

		this.updateEmailOrPassword = function(isValid) {
			if (!isValid) {
				console.log('credentials.password or password_confirmation are empty strings');
				return;
			}

			UserFactory.updateEmailOrPassword(this.currentUser.id, this.credentials);
		};

		this.getProficiencyTypes();
	};
})();
