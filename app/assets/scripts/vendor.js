import 'lazysizes';
import 'owl.carousel';
import 'style-loader!owl.carousel/dist/assets/owl.carousel.min.css';
import 'style-loader!owl.carousel/dist/assets/owl.theme.default.min.css';

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true
  });
});
