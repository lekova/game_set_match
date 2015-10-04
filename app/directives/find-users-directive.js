'use strict';

(function() {

  angular.module('gameSetMatch').directive('glFindUsers', glFindUsers);

  function glFindUsers() {

    return {
      restrict: 'E',
      templateUrl: 'app/views/find-users-page.html',
      link: function(scope) {
        scope.UsersCtrl.findUsers();
      }
    };
  };

})();
