(function(global, ng, jq){
  'use strict';

  ng.module('ngUI')
    .controller('listCtrl', function(){
      this.contents = [
        {
          'category': 'branding',
          'name': 'Milestone UI Kit Branding',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item01.jpg'
        },
        {
          'category': 'app',
          'name': 'Milestone UI',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item02.jpg'
        },
        {
          'category': 'web',
          'name': 'Yet one project',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item03.jpg'
        },
        {
          'category': 'branding',
          'name': 'Lorem Ipsum Project',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item04.jpg'
        },
        {
          'category': 'web',
          'name': 'New App Title',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item05.jpg'
        },
        {
          'category': 'app',
          'name': 'Duis aute irure dolo',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item06.jpg'
        },
        {
          'category': 'web',
          'name': 'Excepteur sint occaecat',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item07.jpg'
        },
        {
          'category': 'web',
          'name': 'Llamco laboris nisi ut ali',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item08.jpg'
        },
        {
          'category': 'branding',
          'name': 'Duis aute irure!',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item09.jpg'
        },
        {
          'category': 'app',
          'name': 'Lorem ipsum dolor sit amet',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item10.jpg'
        },
        {
          'category': 'web',
          'name': 'Excepteur sint',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item11.jpg'
        },
        {
          'category': 'web',
          'name': 'Some new proj',
          'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
          'link': 'http://',
          'img': '/public/src/img/portf_item12.jpg'
        }        
      ];


    });

  


//END IIFE PATTERN
})(this, this.angular, this.jQuery);