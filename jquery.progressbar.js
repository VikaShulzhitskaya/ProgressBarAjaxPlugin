(function ($) {
  'use strict';
  jQuery.fn.progressbarPlugin = function (options) {

    options = $.extend({
      buttonId: '#button',
      ajaxSet: {}
    }, options);

    function make() {
      var progressbar = (this);
      var $button = $(options.buttonId);
      var ajaxOptions = options.ajaxSet;
      $button.on('click', function (event) {
        event.preventDefault();
        ajaxOptions = $.extend({
          xhr: function () {
            var xhr = $.ajaxSettings.xhr();
            xhr.addEventListener('progress', function (evt) {
              if (evt.lengthComputable) {
                var percentComplete = Math.ceil(evt.loaded / evt.total * 100);
                $(progressbar).val(percentComplete);
              }
            }, false);
            xhr.upload.addEventListener('progress', function (evt) {
              if (evt.lengthComputable) {
                var percentComplete = Math.ceil(evt.loaded / evt.total * 100);
                $(progressbar).val(percentComplete);
              }
            }, false);
            return xhr;
          }
        }, options.ajaxSet);

        $.ajax(ajaxOptions);
      });

    }

    return this.each(make);

  };

})(jQuery);