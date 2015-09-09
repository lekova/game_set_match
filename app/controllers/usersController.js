'use strict';

(function(){
    angular.module('MainController').controller('UserCtrl', UserCtrl);

    UserCtrl.$inject = ['$routeParams','UserFactory', 'AuthFactory'];

    function UserCtrl($routeParams, UserFactory, AuthFactory) {
        var vm = this;
        var userId = $routeParams.userId;
        vm.users = UserFactory.users;
        vm.user = UserFactory.user;
        vm.search = UserFactory.search;
        vm.editMode = false;


        vm.createUser = function(user) {
            UserFactory.createUser(user).then(function() {
                resetForm();
            }, function(response) {
                vm.serverErrors = true;
            });
        };

        vm.closeWarningMessage = function(){
            vm.serverErrors = !vm.serverErrors;
        };

        vm.updateUser = function(user) {
            UserFactory.updateUser(user);
        };

        vm.toggleEditMode = function(){
            vm.user.avatar = '';
            vm.editMode = !vm.editMode;
        };

        vm.showProfile = function(){
          UserFactory.getProfile();
        };

        vm.followUser = function(id){
            UserFactory.followUser(id);
        };

        vm.renderPreview = function(){
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#profile').attr('src', e.target.result);
            };

            reader.readAsDataURL($('#profile-preview')[0].files[0]);
        };



        vm.isCurrentUser = function(id){
            return (AuthFactory.currentUser.id === id);
        };

        vm.unfollowUser = function(id){
            UserFactory.unfollowUser(id);
        };

        vm.showUser = function(){
          UserFactory.getUser(userId);
        };

        vm.searchUsers = function(){
            UserFactory.getUsers(search);
        };

        vm.removeUser = function(user){
            UserFactory.removeUser(user);
        };

        function resetForm() {
            vm.user = {};
            vm.serverErrors = false;
        };


        vm.cancel = function() {
            resetForm();
        };

    };

})();