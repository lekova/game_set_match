'use strict';

(function() {

  angular.module('gameSetMatch').directive('gsmNavBar', gsmNavBar);

  function gsmNavBar() {

    return {
      restrict: 'E',
      templateUrl: 'app/views/navbar.html',
      controller: 'NavbarCtrl',
      controllerAs: 'NavbarCtrl',
      bindToController: true
    };
  };

})();
