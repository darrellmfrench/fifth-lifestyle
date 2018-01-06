$('.button-collapse').sideNav({
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  new WOW().init();

  if ( $('#slide-out').hasClass('no-admin') ) {
    $('.logo-wrapper img').attr('src', 'img/logo-red.svg')
  }