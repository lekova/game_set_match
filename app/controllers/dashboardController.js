'use strict';

(function() {

  angular.module('gameSetMatch').controller('DashboardCtrl', DashboardCtrl);

  // FeedCtrl.$inject = ['PictureFactory', 'LikeFactory'];

  function DashboardCtrl() {
    var vm = this;
    // vm.feed = PictureFactory.feed;

    // function switchLikeStatus(id){
    //   for (var i = 0; i < vm.feed.length; i++) {
    //       if (vm.feed[i].id === id) {
    //           vm.feed[i].liked_by_user = !vm.feed[i].liked_by_user;
    //       };
    //   };
    // }

    // vm.toggleLike = function(id, likedByUser){
    //   (likedByUser ? LikeFactory.unlike(id) : LikeFactory.like(id)).then(function(response){
    //     switchLikeStatus(id);
    //   });
    // };

    function init() {
        // PictureFactory.getFeed();
    };

    init();

  }

})();
