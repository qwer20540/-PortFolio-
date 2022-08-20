;(function($, window, document, undefined){
	var t=0;
	
	var sec8AnimationFn = function(){ //익명함수
		
		if( $(window).scrollTop() >= $('#section8').offset().top-400 && 
			$(window).scrollTop() < $('#section9').offset().top ){
			if( t == 0){
				t=1;
				$('.section8-ani').eq(0).stop().animate({top:0, opacity:1},600,'easeOutSine');
				$('.section8-ani').eq(1).stop().delay(150).animate({top:0, opacity:1},600,'easeOutSine');
				$('.section8-ani').eq(2).stop().delay(300).animate({top:0, opacity:1},600,'easeOutSine');
			}
		}
		else if( $(window).scrollTop() < $('#section7').offset().top-200 ||
				 $(window).scrollTop() >= $('#section9').offset().top  ){
			t=0;	
			$('.section8-ani').eq(0).stop().animate({top:400, opacity:0},0);
			$('.section8-ani').eq(1).stop().animate({top:400, opacity:0},0);
			$('.section8-ani').eq(2).stop().animate({top:400, opacity:0},0);
			
		}
		
	}
	
	
	//섹션8 탑값-300 ~ 섹션9미만 이면(노출되면) 아래에서 위로 부드럽게 애니메이션
	$(window).scroll(function(){
		
		sec8AnimationFn();
		
	});
	
})(jQuery, window, document);
//sec8-animation.js