'use strict';

angular.module('gameSetMatch', ['ngRoute', 'chart.js', 'ngMessages'])
  // .config(function ($httpProvider) {
  //   $httpProvider.interceptors.push('fourOhOneInterceptor');
  // })
  .run(function($rootScope, $http, $location, AuthFactory) {

    if(AuthFactory.isLoggedIn()) {
      var data = simpleStorage.get('gsm-user-token');
      $http.defaults.headers.common.Authorization = 'Token token=' + data;
    }

    var routesThatDontRequireAuth = ['/login', '/home', '/signup'];

    var routeClean = function(route) {
      return (routesThatDontRequireAuth.indexOf(route) > -1);
    };

    $rootScope.$on('$routeChangeStart', function() {

      if (!routeClean($location.url()) && !AuthFactory.isLoggedIn()) {
        // redirect back to login
        $location.path('/home');
      }

      // if ($location.path() === '/users') {
      //   UserFactory.getUsers($location.search().username);
      // } else if ($location.path() === '/followers') {
      //   UserFactory.getFollowers();
      // } else if ($location.path() === '/following') {
      //   UserFactory.getFollowing();
      // }
    });

  });
