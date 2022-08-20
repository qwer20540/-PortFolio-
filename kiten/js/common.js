$(document).ready(function(){
    $('.nav_list>li>a').on('click',function(){
        $(this).addClass('active').parents().siblings().find('>a').removeClass('active'); 
     });

    var scrollEventFn = function(){ //익명함수 또는 리터럴함수
		if( $(this).scrollTop() <=1 ){
			$('.nav_list>li>a').removeClass('active');
		}	
	}
	scrollEventFn();
	
	$(window).scroll(function(){
		scrollEventFn();
	}); 

    $(".nav_list>li>a").click(function(event){            
        event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
})



