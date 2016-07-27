(function ($) {
  'use strict';
  jQuery.fn.progressbarPlugin = function (options) {

    options = $.extend({
      buttonId: '#button',
      url: 'http://download.thinkbroadband.com/20MB.zip',
      type: 'GET',
      contentType: false,
      processData: false,
      successFunction: function () {
        alert('Done!');
      }
    }, options);

    function make() {
      var progressbar = (this);
      var $button = $(options.buttonId);
      $button.on('click', function (event) {
        event.preventDefault();
        $.ajax({
          url: options.url,
          type: options.type,
          contentType: options.contentType,
          processData: options.processData,
          xhr: function () {
            var xhr = $.ajaxSettings.xhr();
            xhr.addEventListener('progress', function (evt) {
              if (evt.lengthComputable) {
                var percentComplete = Math.ceil(evt.loaded / evt.total * 100);
                $(progressbar).val(percentComplete);
              }
            }, false);
            return xhr;
          },
          success: options.successFunction

        });
      });

    }



    return this.each(make);

  };

})(jQuery);