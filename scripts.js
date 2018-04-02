// Portfolio by Mila K-L

// March 2018

// Toggling footer position on desktop vs mobile screens

var $window = $(window),

  $header = $("#header"),
  $footer = $("#footer"),
  $main = $("#main");


function checkSize() {
  if ($(window).width() <= 980) {
    $footer.insertAfter($main);
    console.log("Small screen");
  } else {
    $footer.appendTo($header);
    console.log("Big screen");

  }
}
$(document).ready(checkSize());

window.onresize = checkSize;
