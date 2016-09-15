(function(global, ng, jq){
  'use strict';
  
    ng.module('ngUI')
    .controller('formCtrl', function(){
      this.master = {};

      this.update = function(user) {
        this.master = ng.copy(user);
      };

      this.reset = function(form) {
        if (form) {
          form.$setPristine();
          form.$setUntouched();
        }
        this.user = ng.copy(this.master);
      };

      this.reset();
    });

//END IIFE PATTERN
})(this, this.angular, this.jQuery);