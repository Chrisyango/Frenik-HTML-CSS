'use strict';

$(document).ready(function() {
  
  // Show information on hover
  $('.board-members').hover(function() {
    $(this).children('.board-members-info').addClass('showing');
    $(this).children('.overlay').addClass('overlay-show');
  }, function() {
    $(this).children('.board-members-info').removeClass('showing');
    $(this).children('.overlay').removeClass('overlay-show');
  });

  // Owl Carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
    }
  });
});