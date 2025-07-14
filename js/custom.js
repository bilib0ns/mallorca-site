(function ($) {

    "use strict";

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
        });


        // MENU
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $(window).scroll(function() {
          if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
              } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
              }
        });


        // PARALLAX JS
        function initParallax() {
          $('#home').parallax("60%", 100);
          $('#about').parallax("100%", 80);
          $('#project').parallax("80%", 60);
          $('#team').parallax("40%", 40);
          $('#contact').parallax("20%", 20);
          }
        initParallax();


        // Owl Carousel
        var owl = $("#owl-team");
          owl.owlCarousel({
            autoPlay: 6000,
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            Speedfast: 200,
        });

})(jQuery);
function matchYourMood() {
  let mood = prompt("What’s your vibe today? (boujee, party, zen, curious)");
  let response = "";

  if (!mood) {
    response = "Come on, pick one!";
  } else {
    switch (mood.toLowerCase()) {
      case "boujee":
        response = "Gran Folies Beach Club";
        break;
      case "party":
        response = "Magaluf is wild tonight";
        break;
      case "zen":
        response = "Port Adriano is your peace";
        break;
      case "curious":
        response = "Palma’s historic streets are waiting";
        break;
      default:
        response = "Try 'boujee', 'party', 'zen', or 'curious' next time ";
    }
  }

  document.getElementById("moodOutput").innerText = response;
}

