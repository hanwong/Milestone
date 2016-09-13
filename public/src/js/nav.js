(function(global, $){
  'use strict';

  var $gnb_home = $('.gnb-home'),
  $gnb_nav_list = $('.gnb-nav-list'),
  $side_nav = $('.side-nav');

  // gnb navigation 링크 이동시 active 클래스 추가
  $gnb_home.find('a').on('click', function () {
    gotoPages.call(this, event);
    viewUpdate.call(this, 'home');
  });
  
  $gnb_nav_list.find('a').on('click', function () {
    gotoPages.call(this, event);
    var $this = $.$(this);
    viewUpdate.call(this,  $this.parent().index() );
    $this.parent().radioClass('active');
  });

  // gnb navigation 영역 ScrollMagic 추가
  var ctrl = new ScrollMagic.Controller({
    'addIndicators': false
  });

  var scroll_scene = new ScrollMagic.Scene({
      'triggerElement': '.home-carousel',
      'triggerHook': 0.1,
      // 'duration': $(document).height()
      // 'reverse': false
  })
  .setClassToggle('.gnb-nav', 'scrolled')
  .addTo(ctrl);

  var gnb_scene = '.gnb-page01, .gnb-page02, .gnb-page03, .gnb-page04, .gnb-page05, .gnb-page06'.split(', ');
  var page_names = '.testimonials, .features, .projects, .pricing, .about-us, .contacts'.split(', ');
  gnb_scene.forEach(function (selector, idx) {
    var gnb_nav_scene = new ScrollMagic.Scene({
          'triggerElement': `${page_names[idx]}`,
          'triggerHook': 0.5,
          'duration': $(`${page_names[idx]}`).height()
          // 'reverse': false
      })
      .setClassToggle(selector, 'active')
      .addTo(ctrl);
  });

  // side navigation 링크 이동시 active 클래스 추가
  $side_nav.find('a').on('click', function () {
    gotoPages.call(this, event);
    var $this = $.$(this);
    viewUpdate.call(this,  $this.parent().index() );
    $this.parent().radioClass('active');
  });

  // side navigation 영역 ScrollMagic 추가
  var tm = new TweenMax.fromTo('.side-nav', 0.3, { 'opacity': 0 }, { 'opacity': 1 });
  var side_nav_scene = new ScrollMagic.Scene({
        'triggerElement': '.testimonials',
        'triggerHook': 0.5,
        // 'duration': $(document).height()
        // 'reverse': false
    })
    .setClassToggle('.side-nav', 'fade-in')
    .addTo(ctrl)
    .setTween(tm);

  var side_scene = '.side-page01, .side-page02, .side-page03, .side-page04, .side-page05, .side-page06'.split(', ');
  side_scene.forEach(function (selector, idx) {
    var side_nav_scene = new ScrollMagic.Scene({
          'triggerElement': `${page_names[idx]}`,
          'triggerHook': 0.5,
          'duration': $(`${page_names[idx]}`).height()
          // 'reverse': false
      })
      .setClassToggle(selector, 'active')
      .addTo(ctrl);
  });


  var eventType = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
  var $navicon = $('[data-navicon="button"]');
  $navicon.on(eventType, menuToggle);

})(this, this.jQuery);