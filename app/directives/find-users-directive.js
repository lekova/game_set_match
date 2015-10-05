'use strict';

(function() {

  angular.module('gameSetMatch').directive('gsmFindUsers', gsmFindUsers);

  function gsmFindUsers() {

    return {
      restrict: 'E',
      templateUrl: 'app/views/find-users-page.html'
      // link: function(scope) {
      //   scope.UsersCtrl.findUsers();
      // }
    };
  };

})();
