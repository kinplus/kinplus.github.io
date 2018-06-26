$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.fixed-action-btn').floatingActionButton({
    direction: 'left'
  });

  $('.slider').slider({
    indicators: true,
    height: 440
  })

  $('#message').trigger('autoresize');

});

/*
TODO:
responsive
javascript button
google map api

liat kertas, edit linked in
*/
