;(function($, window, document, undefined){ //즉시실행함수 
	var t=0;

	
	function se7AnimateFn(){
		// 스크롤 탑값이 섹션7-500 이전부터 ~ 그리고 &&  스크롤 탑값이 섹션8미만까지 애니메이션 실행
		if( $(this).scrollTop() >= $('#section7').offset().top-500 && 
		    $(this).scrollTop() < $('#section8').offset().top ){
			if( t == 0){
				t=1;	
				$('.graphe').eq(0).stop().animate({width:80+'%'},1000);
				$('.graphe').eq(1).stop().animate({width:90+'%'},1000);
				$('.graphe').eq(2).stop().animate({width:95+'%'},1000);
				$('.graphe').eq(3).stop().animate({width:90+'%'},1000);
			}
		}
		// 스크롤탑값이 섹션6-500 이전이거나 ~ 또는 || 스크롤탑값이 섹션8이상이면 애니메이션 초기화 너비 0으로 설정
		else if( $(this).scrollTop() < $('#section6').offset().top-500 || 
		         $(this).scrollTop() >= $('#section8').offset().top ){
			t=0;		 
			$('.graphe').eq(0).stop().animate({width:0+'%'},0);
			$('.graphe').eq(1).stop().animate({width:0+'%'},0);
			$('.graphe').eq(2).stop().animate({width:0+'%'},0);
			$('.graphe').eq(3).stop().animate({width:0+'%'},0);	
			
		}
	}
	

	
	//섹션7 노출되면(스크롤탑값이)	
	$(window).scroll(function(){
		se7AnimateFn();
	});
	
	
		
	
		
})(jQuery, window, document);//sec7_animation.js