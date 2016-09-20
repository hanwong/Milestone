(function(global, $){
  'use strict';
  
  var $html = $('html');
  // js 설정 가는 환경 체크 
  $('html').removeClass('no-js').addClass('js');
  $(global).on('load resize', {'i': 0}, function(event) {
    changeDeviceMode($html, event.data.i++ === 0 ? true : false);
  });

  var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
  if (!touchsupport){ // browser doesn't support touch
      document.documentElement.className += " non-touch"
  }

  $(function(){
    
    var $card = $('.element-item');
    
    $card.each(function(index, el) {
      $card.eq(index).on('touchstart', function (e) {
        if ( !$card.eq(index).hasClass('hover') ) {
          $card.eq(index).addClass('hover');
          // TweenMax.to($card.eq(index), 0.5, { 'transform': translateY(-3px), 'transform': rotateY( 180deg ) });
        } 
        else {
          $card.eq(index).removeClass('hover');
          // TweenMax.to($card.eq(index), 0.5, { 'transform': rotateY( 180deg ) , 'transform': translateY( 0 )});
        }

      });
    });

  });
  
//END IIFE PATTERN
})(this, this.jQuery);