'use strict';

(function() {

  angular.module('gameSetMatch').directive('glFooter', glFooter);

  function glFooter() {

    return {
      restrict: 'E',
      templateUrl: 'app/views/footer.html'
    };
  };

})();
