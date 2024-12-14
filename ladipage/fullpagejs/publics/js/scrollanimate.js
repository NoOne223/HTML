(function($) {
  'use strict';

  // Variables
  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single'),
      $isAnimatedThird = $('.third .is-animated'),
      $isAnimatedThirdSingle = $('.third .is-animated__single'),
      $isAnimatedFourth = $('.fourth .is-animated'),
      $isAnimatedFourthSingle = $('.fourth .is-animated__single');

  // Initialize fullPage.js
  new fullpage('#fullpage', {
    navigation: true,
    onLeave: function(index, nextIndex, direction) {
      if (index.index === 0 && nextIndex.index === 1) {
        $isAnimatedSecond.addClass('animate__animated animate__fadeInUpBig');
        $isAnimatedSecondSingle.addClass('animate__animated animate__rollIn');
      } else if (index.index === 1 && nextIndex.index === 2) {
        $isAnimatedThird.addClass('animate__animated animate__fadeInLeftBig');
        $isAnimatedThirdSingle.addClass('animate__animated animate__bounceInDown');
      } else if (index.index === 2 && nextIndex.index === 3) {
        $isAnimatedFourth.addClass('animate__animated animate__zoomIn');
        $isAnimatedFourthSingle.addClass('animate__animated animate__lightSpeedIn');
      }
    }
  });
})(jQuery);
