$(window).scroll(function() {
  if($("#menu").offset().top > 100) {
      $("#menu").addClass("bg-my-color");
  } else {
      $("#menu").removeClass("bg-my-color");
  }
});

new WOW().init();




