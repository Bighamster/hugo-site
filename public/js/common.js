;(function($) {

  $(window).scroll(function() {
    $('nav.my_header').css('box-shadow', $(this).scrollTop() > 0 ? '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)' : 'none');
  });

  $( document ).on('click', 'a.dd-switcher', function(e) {
    var $this = $(this);
    $('[data-toggled="'+$(this).data('toggle')+'"]').toggleClass('d-none');
    console.log($(this).data('toggle'));
    e.preventDefault();
  });

})(jQuery);
