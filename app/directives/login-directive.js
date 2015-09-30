'use strict';

(function() {

  angular.module('gameSetMatch').directive('glLoginForm', glLoginForm);

  function glLoginForm() {

    return {
      restrict: 'E',
      templateUrl: 'app/views/login-form.html',
      controller: 'AuthCtrl',
      controllerAs: 'AuthCtrl',
      bindToController: true,
      scope: {
        credentials: '&'
      }
    };
  };

})();
