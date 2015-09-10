'use strict';

(function(){

  angular.module('gameSetMatch').factory('AuthFactory', AuthFactory);

  AuthFactory.$inject = ['$http', '$location', '$window', 'appSettings'];

   function AuthFactory($http, $location, $window, appSettings) {
    var currentUser = {};

    function getProfile() {
      return $http.get(appSettings.apiUrl + '/refresh-navbar')
        .then(function(response) {
          console.log("=======response data:", response);
          angular.copy(response.data, currentUser);
      });
    };

    var login = function(credentials){
      return $http.post(appSettings.apiUrl + '/login', credentials).success(function(response){
        simpleStorage.set('gl-user-token', response.token);
        $http.defaults.headers.common.Authorization = 'Token token=' + response.token;
        getProfile();
        $location.path('');
      });
    };

    var logOut = function(){
      simpleStorage.flush();
      $location.path('/home');
    };

     var isLoggedIn = function(){
      return simpleStorage.get('gl-user-token');
    };

    return {
      login: login,
      logOut: logOut,
      getProfile: getProfile,
      currentUser: currentUser,
      isLoggedIn: isLoggedIn
    };

  };

})();

