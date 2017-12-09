$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 100) { 
          $(".navbar").css("background-color", "#fff");
          $(".navbar").css("box-shadow", "rgb(165, 169, 173) 0px 0px 20px 2px");
          $(".navbar-brand").css("color", "#000");
          $(".navbar-nav .nav-link").css("color", "#000");
        } else {
          $(".navbar").css("background-color", "transparent");
          $(".navbar").css("box-shadow", "");
          $(".navbar-brand").css('color', "#fff");
          $(".navbar-nav .nav-link").css("color", "#fff");
        }
      });
    });
