'use strict';

(function() {

  angular.module('gameSetMatch').directive('gsmSideBar', gsmSideBar);

  function gsmSideBar() {

    return {
      restrict: 'E',
      templateUrl: 'app/views/sidebar.html',
      controller: 'SidebarController',
      controllerAs: 'SidebarCtrl',
      bindToController: true
    };
  };

})();
