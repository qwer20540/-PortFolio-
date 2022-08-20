;(function($, window, document, undefined){
	var t = 0;
	
	//섹션2 분석
	//스크롤시 섹션2가 노출되는 싯점에서 부드럽게 나타난다.(페이드인효과)
	//scroll 이벤트  $(window).scroll();
	$(window).scroll(function(){
		
		//섹션2의 범위 
		if( $(this).scrollTop() >= 200  &&   $(this).scrollTop() < $('#section3').offset().top ){ 
			if( t==0 ){   //비교문(제어문:비교조건문)
				t=1;      //스크롤 이벤트 애니메이션 실행 한상태로 변환
				//섹션2의 전체내용이 부드럽게 보인다.
				$('#section2').stop().animate({opacity:0},0).animate({opacity:1},2000);				
			}
		}
		else{ //200 미만이거나 또는 섹션3 탑값 이상이면
			t=0;  //초기화
			$('#section2').stop().animate({opacity:0},0);
		}
				
	});
	
})(jQuery, window, document);
//sec2_animation.js