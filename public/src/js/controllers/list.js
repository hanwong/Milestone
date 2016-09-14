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
          'img': 'img.png'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'branding',
          'name': 'This is branding.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'app',
          'name': 'This is app.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        },
        {
          'category': 'web',
          'name': 'This is web.',
          'description': 'This is description.',
          'link': 'http://',
          'img': 'img.png'
        }        
      ];

    });


//END IIFE PATTERN
})(this, this.angular, this.jQuery);