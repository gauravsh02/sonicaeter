$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 100) { 
          $(".navbar").css("background-color", "#fff");
          $(".navbar-brand").css("color", "#000");
          $(".navbar-nav .nav-link").css("color", "#000");
        } else {
          $(".navbar").css("background-color", "transparent");
          $(".navbar-brand").css('color', "#fff");
          $(".navbar-nav .nav-link").css("color", "#fff");
        }
      });
    });
