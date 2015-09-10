'use strict';

(function(){

  angular.module('gameSetMatch').directive('glNavBar', glNavBar);

  function glNavBar(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/navbar.html',
      controller: 'NavbarCtrl',
      controllerAs: 'NavbarCtrl',
      bindToController: true
    };
  };

})();
