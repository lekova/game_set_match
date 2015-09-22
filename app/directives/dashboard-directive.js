'use strict';

(function(){

  angular.module('gameSetMatch').directive('glDashboard', glDashboard);

  function glDashboard(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/dashboard.html',
      controller: 'GamesCtrl',
      controllerAs: 'GamesCtrl',
      bindToController: true
    };
  };

})();
