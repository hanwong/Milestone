(function(global, ng, jq){
  'use strict';

  ng.module('ngUI')
    .controller('listCtrl', function(){
      this.contents = [
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item01.jpg'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item02.jpg'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item03.jpg'
        },
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item04.jpg'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item05.jpg'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item06.jpg'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item07.jpg'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item08.jpg'
        },
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item09.jpg'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item10.jpg'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item11.jpg'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': '/public/src/img/portf_item12.jpg'
        }        
      ];


    });

  


//END IIFE PATTERN
})(this, this.angular, this.jQuery);