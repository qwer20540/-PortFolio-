;(function($, window, document){

	$('.sec10List').on({
		mouseenter:	function(){
			$(this).find('.sec10Title-wrap').stop().animate({ top:(50)+'%', opacity:1 },0).animate({top:(-10)+'%', opacity:0 },800 ,'easeInOutExpo');
			$(this).find('.sec10Content-wrap').stop().animate({ bottom:(-100)+'%', opacity:0 },0).animate({bottom:(0)+'%', opacity:1 },800  ,'easeInOutExpo');
		},
		mouseleave:	function(){
			$(this).find('.sec10Title-wrap').stop().animate({ top:(-10)+'%', opacity:0 },0).animate({top:(50)+'%', opacity:1 },800 ,'easeInExpo');
			$(this).find('.sec10Content-wrap').stop().animate({ bottom:(0)+'%', opacity:1 },0).animate({bottom:(-100)+'%', opacity:0 },800  ,'easeInOutExpo');
		},
		
	});

})(jQuery, window, document);//sec10-count.js