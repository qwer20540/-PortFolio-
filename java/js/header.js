;(function($, window, document, undefined){ //즉시실행함수
	var x;
	
	// ECMA Script5
	// ECMA Script6 == 웹앱  앵귤라.js 리엑트.js 뷰.js 노드.js
	
	$('.appbarBt').on({
		click:	function(){
			$(this).toggleClass('addClassAppbarX');
			$('.appbar-menu-wrap').toggleClass('addClassHeader');
		}
	});
	
	var resizeFn = function(){
		if( $(window).innerWidth() > 1170 ){
			$('.appbarBt').removeClass('addClassAppbarX');
			$('.appbar-menu-wrap').removeClass('addClassHeader');	
		}
	}
	resizeFn();
	$(window).resize(function(){
		
			resizeFn();
			
	});
	
	
	
	var scrollEventFn = function(){ //익명함수 또는 리터럴함수
		if( $(this).scrollTop() >=10 ){
			$('#header').addClass('addClassHeader');
			$('.goTop').stop().fadeIn(1000);
		}
		else{
			$('#header').removeClass('addClassHeader');
			$('.goTop').stop().fadeOut(1000);
		}	
	}
	scrollEventFn();
	
	$(window).scroll(function(){
		scrollEventFn();
	});


	$('.smoothBt').on({
		click:	function(event){
			event.preventDefault();  //이전의 이벤트를 기본값
			
			x = $(this).attr('href');
			   $('html,body').stop().animate({scrollTop: $( x ).offset().top  }, 1000,'easeInOutExpo');
		}
	});
	
	$('.mainBt').on({
		click:	function(){
			$('.mainBt').removeClass('addMainbt');
			$(this).addClass('addMainbt');
		}
	});
	
	
})(jQuery, window, document);//header.js