(function ($) {
  $(() => {
    // Nav Drawer
    $('.button-collapse').sideNav();

	// Match Column Heights..

    $('.tripcard').matchHeight();

    // Modal - the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    // Parallax
    $('.parallax').parallax();

    // Carousel

    $('.carousel').carousel();


   // Search + Filters (RJ)

    $('.filters-list a').click(function () {
      $(this).toggleClass('active');
      $('.tabreset').css('display', 'inline-block');
      $('.tabapply a').addClass('active').removeClass('disable');
    });
    $('.tabreset').click(function () {
      $(this).css('display', 'none');
      $('.filters-list a').removeClass('active');
      $('.tabapply a').removeClass('active').addClass('disable');
    });
    $('.search').focus(() => {
      $('.filters, .fixed-action-tabs').fadeOut('fast');
    });
    $('.search').focusout(() => {
      $('.filters, .fixed-action-tabs').fadeIn('fast');
    });
  }); // end of document ready
}(jQuery)); // end of jQuery name space
