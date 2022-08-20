;(function($, window, document, undefined){
	var cnt0 = cnt1 = cnt2 = cnt3 = 0;
	var t3=0;
	
		var sec3AnimateFn = function(){ //익명함수
			if( $(this).scrollTop() >= $('#section3').offset().top-700  && $(this).scrollTop() < $('#section4').offset().top   ){
				if( t3 == 0  ){
					t3 = 1;
					counterFn();	
				}
			}
			else{ //섹션3 -700 범위 ~ 섹션4이전까지 범위 벗어나면
				t3 = 0;
				cnt0 = cnt1 = cnt2 = cnt3 = 0;
			}
		}
	
	
		$(window).scroll(function(){
			
			sec3AnimateFn();
					
		});
	
	
	
	//카운트 프로그래밍 제작
	function counterFn(){	
		id0 = setInterval( count0Fn, 12.7388535 );
		
		function count0Fn(){
			cnt0++; //786 끝
			if( cnt0 > 785 ){
				clearInterval(id0);
			}
			else{
				$('.sec3Num').eq(0).text(cnt0);		
			}
		}
			
		id1 = setInterval( count1Fn, 10.13171226 );
		function count1Fn(){
			cnt1++; 
			if( cnt1 > 987 ){
				clearInterval(id1);
			}
			else{
				$('.sec3Num').eq(1).text(cnt1);		
			}
		}

		id2 = setInterval( count2Fn, 28.57142857 );
		function count2Fn(){
			cnt2++; 
			if( cnt2 > 350 ){
				clearInterval(id2);
			}
			else{
				$('.sec3Num').eq(2).text(cnt2);		
			}
		}
		
		id3 = setInterval( count3Fn, 60.24096386 );  //1000:1초  100:0.1초 10:0.01초 1:0.001초
		function count3Fn(){
			cnt3++; 
			if( cnt3 > 166 ){
				clearInterval(id3);
			}
			else{
				$('.sec3Num').eq(3).text(cnt3);		
			}
		}
	}

})(jQuery, window, document);
//sec3_counter.js