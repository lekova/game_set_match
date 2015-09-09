'use strict';

(function(){

    angular
        .module('gameSetMatch')
        .factory('UserFactory', UserFactory);

    UserFactory.$inject = ['$http', '$window', '$location', 'appSettings'];

    function UserFactory($http, $window, $location, appSettings) {
        var users = [];
        var user = {};
        var search;

        function setUser(newUser) {
            angular.copy(newUser, user);
        };

        function getUser(id) {
            return $http.get(appSettings.apiUrl + '/users/' + id)
                .then(function(response) {
                    angular.copy(response.data.user, user);
                });
        };

        function removeUser(user) {
            users.splice(findUserIndexById(user.id), 1);
        };

        function findUserIndexById(id) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === id) {
                    return i;
                };
            };
        };

        function getUsers(search) {
            return $http.get(appSettings.apiUrl + '/users?username=' + search)
                .then(function(response) {
                    angular.copy(response.data.users, users);
                });
        };

        function getFollowers() {
            return $http.get(appSettings.apiUrl + '/followers')
                .then(function(response) {
                    angular.copy(response.data.users, users);
                });
        };

        function getFollowing() {
            return $http.get(appSettings.apiUrl + '/following')
                .then(function(response) {
                    angular.copy(response.data.users, users);
                });
        };

        function followUser(id){
            return $http.get(appSettings.apiUrl + '/users/' + id + '/follow')
                .then(function(response) {
                    angular.copy(response.data.user, user);
                    if (users.length > 0 ){
                        users[findUserIndexById(id)] = response.data.user;
                    }
                });
        };

        function unfollowUser(id){
            return $http.get(appSettings.apiUrl + '/users/' + id + '/unfollow')
                .then(function(response) {
                    angular.copy(response.data.user, user);
                    if (users.length > 0 ){
                        users[findUserIndexById(id)] = response.data.user;
                    }
                });
        };

        function updateUser(user){
            var params = { user: user };
            return $http.patch(appSettings.apiUrl + '/users', params).then(function(response){
                angular.copy(response.data.user, user);
                location.reload();
            });
        };

        function createUser(user) {
            var params = {
                auth: user
            };
            return $http.post(appSettings.apiUrl + '/register', params).success(function(response) {
                simpleStorage.set('gl-user-token', response.token, {TTL: 86400});
                $http.defaults.headers.common.Authorization = 'Token token=' + response.token;
                $location.path('/');
            });
        };

        function deleteUser(user) {
            return $http.delete(appSettings.apiUrl + '/users/' + user.id);
        };

        return {
            search: search,
            users: users,
            user: user,
            removeUser: removeUser,
            getUser: getUser,
            setUser: setUser,
            getFollowing: getFollowing,
            getFollowers: getFollowers,
            getUsers: getUsers,
            deleteUser: deleteUser,
            followUser: followUser,
            unfollowUser: unfollowUser,
            updateUser: updateUser,
            createUser: createUser
        };
    };

})();