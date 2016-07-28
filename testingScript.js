$(function () {
  var progressBar = $('#progressbar1').progressbarPlugin({
    buttonId: '#get',
    ajaxSet: {
      url: 'http://download.thinkbroadband.com/20MB.zip',
      type: 'GET',
      contentType: false,
      processData: false,
      success: function () {
        alert('Done!');
      }
    }
  });
});