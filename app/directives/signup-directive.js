'use strict';

(function() {

  angular.module('gameSetMatch').directive('glSignUpForm', glSignUpForm);

  function glSignUpForm() {
    return {
      restrict: 'E',
      templateUrl: 'app/views/signup-form.html',
      controller: 'UserCtrl',
      controllerAs: 'UserCtrl',
      bindToController: true
    };
  };

})();
