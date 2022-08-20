;(function($, window, document, undefined){
	var n = $('.gallery ul li').length;
    var winW = $(window).innerWidth();		
	var cols = 4;
	var rows = Math.ceil( n / cols );
	var imgW = winW / cols;	
	var imgH = imgW;
	var z = 0; //버튼0 기본 8개 모두 출력
	var hide = [];   //사라질 이미지 배열번호
	var show = [0,1,2,3,4,5,6,7];   //보여질 이미지 배열번호
	
		//탭메뉴 버튼 버튼클릭 이벤트
		$('.sec5Bt').eq(0).on({  //all
			click:	function(){
				z = 0;  //버튼번호(인덱스)
				hide = []; //감춰질(hide) 배열 
				show = [0,1,2,3,4,5,6,7]; //보여질(show) 배열
				n = show.length;
				galleryFn();	
				
				$('.sec5Bt').removeClass('addClasssec5Bt');
				$(this).addClass('addClasssec5Bt');
			}
		});
		
		$('.sec5Bt').eq(1).on({  //5개 
			click:	function(){
				z = 1;
				hide = [1,5,7];
				show = [0,2,3,4,6];
				n = show.length;
				galleryFn();	
				
				$('.sec5Bt').removeClass('addClasssec5Bt');
				$(this).addClass('addClasssec5Bt');				
			}
		});

		$('.sec5Bt').eq(2).on({  //5개 
			click:	function(){
				z = 2;
				hide = [2,5,6];
				show = [0,1,3,4,7];
				n = show.length;
				galleryFn();	
				
				$('.sec5Bt').removeClass('addClasssec5Bt');
				$(this).addClass('addClasssec5Bt');				
			}
		});
		
		$('.sec5Bt').eq(3).on({  //5개 
			click:	function(){
				z = 3;
				hide = [0,3,6];
				show = [1,2,4,5,7];
				n = show.length;				
				galleryFn();				
				
				$('.sec5Bt').removeClass('addClasssec5Bt');
				$(this).addClass('addClasssec5Bt');				
			}
		});
		
		$('.sec5Bt').eq(4).on({  //5개 
			click:	function(){
				z = 4;
				hide = [0,2,7];
				show = [1,3,4,5,6];
				n = show.length;				
				galleryFn();
				
				$('.sec5Bt').removeClass('addClasssec5Bt');
				$(this).addClass('addClasssec5Bt');				
			}
		});
		
		
		
		galleryFn();
		setTimeout(galleryFn, 100);
		
		
		$(window).resize(function(){
			galleryFn();
		});
		
		
		function galleryFn(){
			
			winW = $(window).innerWidth();
			
				if( winW > 1200 ){
					cols = 4;
				}
				else if( winW > 900 ){
					cols = 3;
				}
				else if( winW > 600 ){
					cols = 2;
				}
				else {
					cols = 1;
				}
				
				rows = Math.ceil(n/cols);				
				imgW = winW/cols;
				imgH = imgW;
				
				
				$('.gallery ul').stop().animate({ height: imgH*rows });
				
				$('.gallery li').removeClass('addZoom');
				
				
				
				if( cols==4 ){	
				
					if( z==0 ){
						hide = [];
						show = [0,1,2,3,4,5,6,7];
						n = 8;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH },300);
						
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*1), left:(imgW*2), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*1), left:(imgW*3), width:imgW, height:imgH },300);

					}	
					else if( z==1 ){
						hide = [1,5,7];
						show = [0,2,3,4,6];
						
						n = 5;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(1).hide();
						$('.gallery li').eq(5).hide();
						$('.gallery li').eq(7).hide();
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH },300);
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						
						
						
					}	
					else if( z==2 ){
						hide = [2,5,6];
						show = [0,1,3,4,7];	

						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(2).hide();
						$('.gallery li').eq(5).hide();
						$('.gallery li').eq(6).hide();
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						
								
					}	
					else if( z==3 ){
						hide = [0,3,6];
						show = [1,2,4,5,7];	
						
						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(0).hide();
						$('.gallery li').eq(3).hide();
						$('.gallery li').eq(6).hide();
						
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						
					}	
					else if( z==4 ){
						hide = [0,2,7];
						show = [1,3,4,5,6];

						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(0).hide();
						$('.gallery li').eq(2).hide();
						$('.gallery li').eq(7).hide();
						
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*0), left:(imgW*3), width:imgW, height:imgH },300);
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						
					}	
					
					
				}
				else if( cols==3 ){	
					
					if( z==0 ){
						hide = [];
						show = [0,1,2,3,4,5,6,7];	
						
						n = 8;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*1), left:(imgW*2), width:imgW, height:imgH },300);
						
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*2), left:(imgW*1), width:imgW, height:imgH },300);

						
					}
					else if( z==1 ){
						hide = [1,5,7];
						show = [0,2,3,4,6];

						n = 5;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(1).hide();
						$('.gallery li').eq(5).hide();
						$('.gallery li').eq(7).hide();
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
						
						
					}
					else if( z==2 ){
						hide = [2,5,6];
						show = [0,1,3,4,7];

						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(2).hide();
						$('.gallery li').eq(5).hide();
						$('.gallery li').eq(6).hide();
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
						

					}
					else if( z==3 ){
						hide = [0,3,6];
						show = [1,2,4,5,7];	
						
						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(0).hide();
						$('.gallery li').eq(3).hide();
						$('.gallery li').eq(6).hide();
						
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
						

					}
					else if( z==4 ){
						hide = [0,2,7];
						show = [1,3,4,5,6];

						n = 5;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(0).hide();
						$('.gallery li').eq(2).hide();
						$('.gallery li').eq(7).hide();
						
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
						
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
						
						
					}

				
				}
				else if( cols==2 ){				
					
					if( z==0 ){
						hide = [];
						show = [0,1,2,3,4,5,6,7];	
						
						n = 8;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*2), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*3), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*3), left:(imgW*1), width:imgW, height:imgH },300);

						
					}
					else if( z==1 ){
						hide = [1,5,7];
						show = [0,2,3,4,6];

						n = 5;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(1).hide();
						$('.gallery li').eq(5).hide();
						$('.gallery li').eq(7).hide();
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);					
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						
						
					}
					else if( z==2 ){
						hide = [2,5,6];
						show = [0,1,3,4,7];

						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(2).hide();
						$('.gallery li').eq(5).hide();
						$('.gallery li').eq(6).hide();
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);					
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						

					}
					else if( z==3 ){
						hide = [0,3,6];
						show = [1,2,4,5,7];	
						
						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(0).hide();
						$('.gallery li').eq(3).hide();
						$('.gallery li').eq(6).hide();
						
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);						
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						

					}
					else if( z==4 ){
						hide = [0,2,7];
						show = [1,3,4,5,6];

						n = 5;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(0).hide();
						$('.gallery li').eq(2).hide();
						$('.gallery li').eq(7).hide();
						
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);						
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);

						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						
						
					}
				}
				else if( cols==1 ){				
					
					if( z==0 ){
						hide = [];
						show = [0,1,2,3,4,5,6,7];	
						
						n = 8;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*3), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*4), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*5), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*6), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*7), left:(imgW*0), width:imgW, height:imgH },300);

						
					}
					else if( z==1 ){
						hide = [1,5,7];
						show = [0,2,3,4,6];

						n = 5;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(1).hide();
						$('.gallery li').eq(5).hide();
						$('.gallery li').eq(7).hide();
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*3), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*4), left:(imgW*0), width:imgW, height:imgH },300);
						
						
					}
					else if( z==2 ){
						hide = [2,5,6];
						show = [0,1,3,4,7];

						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(2).hide();
						$('.gallery li').eq(5).hide();
						$('.gallery li').eq(6).hide();
						
						$('.gallery li').eq(0).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*3), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*4), left:(imgW*0), width:imgW, height:imgH },300);
						

					}
					else if( z==3 ){
						hide = [0,3,6];
						show = [1,2,4,5,7];	
						
						n = 5;
						rows = Math.ceil(n/cols);						
						
						$('.gallery li').eq(0).hide();
						$('.gallery li').eq(3).hide();
						$('.gallery li').eq(6).hide();
						
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(2).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*3), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(7).show().stop().animate({ top:(imgH*4), left:(imgW*0), width:imgW, height:imgH },300);
						

					}
					else if( z==4 ){
						hide = [0,2,7];
						show = [1,3,4,5,6];

						n = 5;
						rows = Math.ceil(n/cols);
						
						$('.gallery li').eq(0).hide();
						$('.gallery li').eq(2).hide();
						$('.gallery li').eq(7).hide();
						
						$('.gallery li').eq(1).show().stop().animate({ top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(3).show().stop().animate({ top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(4).show().stop().animate({ top:(imgH*2), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(5).show().stop().animate({ top:(imgH*3), left:(imgW*0), width:imgW, height:imgH },300);
						$('.gallery li').eq(6).show().stop().animate({ top:(imgH*4), left:(imgW*0), width:imgW, height:imgH },300);
						
						
					}
				}
				
				$('.gallery li').addClass('addZoom');
			
		} //갤러리 함수 끝
		
	
	
	
})(jQuery, window, document);
//sec5_gallery.js