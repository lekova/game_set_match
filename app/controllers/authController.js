'use strict';

(function(){

  angular.module('gameSetMatch').controller('AuthCtrl', AuthCtrl);

  AuthCtrl.$inject = ['$location', 'AuthFactory', '$scope'];

  function AuthCtrl($location, AuthFactory, $scope){
    var vm = this;
    vm.currentUser = AuthFactory.currentUser;
    vm.credentials = {};
    vm.serverErrors = false;

    vm.login = function(credentials){
      AuthFactory.login(credentials).then(function(response){
        vm.credentials = {};
        $location.path('');
      }, function(){
        vm.serverErrors = true;
      });
    };

    vm.logout = function(){
      AuthFactory.logout();
    };

    vm.closeWarningMessage = function(){
      vm.serverErrors = !vm.serverErrors;
    };

    vm.isLoggedIn = function(){
      return AuthFactory.isLoggedIn();
    };
  };

})();
