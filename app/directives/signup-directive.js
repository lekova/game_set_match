'use strict';

(function() {

  angular.module('gameSetMatch').directive('gsmSignUpForm', gsmSignUpForm);

  function gsmSignUpForm() {
    return {
      restrict: 'E',
      templateUrl: 'app/views/signup-form.html',
      controller: 'SignupController',
      controllerAs: 'SignupCtrl',
      bindToController: true
    };
  };

})();
