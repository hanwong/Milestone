(function(global, ng, jq){
  'use strict';
  
  ng.module('ngUI')
    .controller('peopleCtrl', function(){

      this.contents = [
        {
          'class': 'brian',
          'name': 'Brian Williamson',
          'role': 'PM  •  Jetlinks',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my...',
          'img': '/public/src/img/brian.png'
        },
        {
          'class': 'helen',
          'name': 'Helen French',
          'role': 'PM  •  Coginix.co',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my...',
          'img': '/public/src/img/helen.png'
        },
        {
          'class': 'john',
          'name': 'John Doe',
          'role': 'PM  •  Google',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my...',
          'img': '/public/src/img/john.png'
        },
        {
          'class': 'connor',
          'name': 'Mildred O’Connor',
          'role': 'PM  •  eabox',
          'description': ' This little wandering journey, without settled place of abode, had been so unpleasant to me, that my...',
          'img': '/public/src/img/connor.png'
        }
        
      ];

      var $people = $('.testimonials'),
        $prevButton = $people.find('.prev'),
        $nextButton = $people.find('.next');

      var current_item = 0,
        item_length = this.contents.length;

      this.prevItem = function () {
        current_item === 0 ? current_item = item_length - 1 : current_item-- ;
        current_item = Math.abs(current_item % item_length);
        // console.log(current_item);
        return current_item;
      };
      this.nextItem = function () {
        current_item++;
        current_item = Math.abs(current_item % item_length);
        // console.log(current_item);
        return current_item;
      };

      this.currentClass = function (cls) {
         var className = '';
         
         var left_item = current_item === 0 ? item_length - 1 : current_item - 1 ;
         left_item = Math.abs(left_item % item_length);
         
         var right_item = current_item + 1;
         right_item = Math.abs(right_item % item_length);
         
         if ( this.contents[current_item].class === cls ) {
            className = 'current';
         } else if ( this.contents[left_item].class === cls  ) {
            className = 'standby-left';
         } else if ( this.contents[right_item].class === cls  ) {
            className = 'standby-right';
         }
         return className;
      };
        
  })
    .animation('.people-animation', function () {
      return {
        'setClass': function(element, addedClass, removedClass, done) {
        var $root = $('html');
          // next버튼 클릭시
        if( $root.hasClass('wide') || $root.hasClass('lg')) {
          if ( addedClass === 'standby-left' && removedClass === 'current' ) {
            if (!element.next().next()[0] && element.next()[0]) {
              TweenMax.fromTo(element, 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: 300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done }); 
              TweenMax.fromTo(element.next().find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
            else if (!element.next().next()[0] && !element.next()[0]) {
              TweenMax.fromTo(element, 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: 300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(1), 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done }); 
              TweenMax.fromTo(element.parent().children().eq(0).find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
            else {
              TweenMax.fromTo(element, 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: 300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.next().next(), 0.5, { x: 300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next().find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
          }
          // prev버튼 클릭시
          if ( addedClass === 'current' && removedClass === 'standby-left' ) {
            if (!element.next()[0]) {
              TweenMax.fromTo(element.prev(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
            }
            else if (!element.prev()[0]) {
              TweenMax.fromTo(element.parent().children().last(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
            }
            else {
              TweenMax.fromTo(element.prev(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -300, scale: 0.8 }, { x: 0, scale: 1, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: -300, scale: 1 }, { x: 0, scale: 0.8, onComplete: done });
              // TimelineMax.fromTo(element.next().find('.item-text'), 0.5, { y: 50 }, { y: 0, onComplete: done });
            }
            TweenMax.fromTo(element.find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
          }
        }

        if( $root.hasClass('md') || $root.hasClass('xs')) {
          if ( addedClass === 'standby-left' && removedClass === 'current' ) {
            if (!element.next().next()[0] && element.next()[0]) {
              TweenMax.fromTo(element, 0.5, { x: 236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: 236, scale: 0.6 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: 236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done }); 
              TweenMax.fromTo(element.next().find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
            else if (!element.next().next()[0] && !element.next()[0]) {
              TweenMax.fromTo(element, 0.5, { x: 236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: 236, scale: 0.6 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(1), 0.5, { x: 236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done }); 
              TweenMax.fromTo(element.parent().children().eq(0).find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
            else {
              TweenMax.fromTo(element, 0.5, { x: 236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: 236, scale: 0.6 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next().next(), 0.5, { x: 236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
              TweenMax.fromTo(element.next().find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
            }
          }
          // prev버튼 클릭시
          if ( addedClass === 'current' && removedClass === 'standby-left' ) {
            if (!element.next()[0]) {
              TweenMax.fromTo(element.prev(), 0.5, { x: -236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -236, scale: 0.6 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.parent().children().eq(0), 0.5, { x: -236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
            }
            else if (!element.prev()[0]) {
              TweenMax.fromTo(element.parent().children().last(), 0.5, { x: -236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -236, scale: 0.6 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: -236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
            }
            else {
              TweenMax.fromTo(element.prev(), 0.5, { x: -236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
              TweenMax.fromTo(element, 0.5, { x: -236, scale: 0.6 }, { x: 0, scale: 0.8, onComplete: done });
              TweenMax.fromTo(element.next(), 0.5, { x: -236, scale: 0.8 }, { x: 0, scale: 0.6, onComplete: done });
              // TimelineMax.fromTo(element.next().find('.item-text'), 0.5, { y: 50 }, { y: 0, onComplete: done });
            }
            TweenMax.fromTo(element.find('.item-text'), 0.5, { y: -100 }, { y: 0, onComplete: done });
          }
        }


      }
    };
  });

//END IIFE PATTERN
})(this, this.angular, this.jQuery);