(function(){

  angular.module('gameSetMatch').factory('fourOhOneInterceptor', ['$location', '$q', function($location, $q) {

      var myInterceptor = {
        responseError: function(response){
          if (response.status === 401) {
            simpleStorage.flush();
            $location.path('/try-glitchly');
            return $q.reject(response);
          } else {
            return $q.reject(response);
          }
        }
      };

      return myInterceptor;
  }]);

})();
