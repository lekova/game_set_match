'use strict';

(function(){

  angular.module('gameSetMatch').directive('glFindUsers', glFindUsers);

  function glFindUsers(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/find-users-page.html',
      controller: 'UserCtrl',
      controllerAs: 'UserCtrl',
      bindToController: true,
      link: function(scope){
        scope.UserCtrl.findUsers();
      }
    };
  };

})();
