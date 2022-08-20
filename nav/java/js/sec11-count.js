;(function($, window, document, undefined){
	
	$('.section11-content-list>ul>li').on({
		mouseenter: function(){
			$(this).addClass('addSec11Hover');
		},
		mouseleave: function(){
			$(this).removeClass('addSec11Hover');
		},
	});

})(jQuery, window, document);//sec11-count.js