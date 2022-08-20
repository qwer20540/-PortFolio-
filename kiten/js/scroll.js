$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".navbar").css("background" , "#4c6ef5");
      }
      else{
        $(".navbar").css("background" , "#343a40");   
      }
    })
})

   