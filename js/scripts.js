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
});