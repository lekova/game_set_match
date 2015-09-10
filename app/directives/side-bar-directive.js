'use strict';

(function(){

  angular.module('gameSetMatch').directive('glSideBar', glSideBar);

  function glSideBar(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/sidebar.html',
      bindToController: true
    };
  };

})();
