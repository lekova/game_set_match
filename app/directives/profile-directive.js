'use strict';

(function() {

  angular.module('gameSetMatch').directive('glProfile', glProfile);

  function glProfile() {

    return {
      restrict: 'E',
      templateUrl: 'app/views/profile.html',
      controller: 'UsersCtrl',
      controllerAs: 'UsersCtrl',
      bindToController: true
    };
  };

})();
