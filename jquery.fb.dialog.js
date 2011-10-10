(function($) {
    
  // Facebook-looking dialog widget
  $.fn.fbDialog = function(title) {
    $('#dialog').remove();
    $('body').append('<div id="dialog"><div></div></div>');
    
    var $dialog = $('#dialog');
    
    $dialog.find('> div')
      .append('<h3>'+title+'</h3>')
      .append(this);
    
    $dialog.css({
      marginLeft: $dialog.width() / 2 * -1,
      marginTop:  $dialog.height() / 2 * 1.5 * -1
    });
      
    return this;
  };
  
})(jQuery);
