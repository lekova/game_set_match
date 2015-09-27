'use strict';

(function() {

  angular.module('gameSetMatch').directive('glSideBar', glSideBar);

  function glSideBar() {

    return {
      restrict: 'E',
      templateUrl: 'app/views/sidebar.html',
      controller: 'UserCtrl',
      controllerAs: 'UserCtrl',
      bindToController: true
    };
  };

})();
