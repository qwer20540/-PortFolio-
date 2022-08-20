;(function($, window, document, undefined){  //즉시 실행 함수

	var cnt0=0; //105
	var cnt1=0; //185
	var cnt2=0; //350
	var id0=0;
	var id1=0;
	var id2=0;
	var t=0;
	
	var count0Fn = function(){  //익명함수
		cnt0=0; //변수 초기화 함수 호출시
		
		id0 = setInterval(function(){
				cnt0++;
				if(cnt0<=105){
					$('.se9Num').eq(0).text( cnt0 );
				}
				else{ //105초과하면 중지
					clearInterval(id0);
				}
		}, 95.23809524);
	}
	var count1Fn = function(){
		cnt1=0; //변수 초기화 함수 호출시
		
		id1 = setInterval(function(){
				cnt1++;
				if(cnt1<=185){
					$('.se9Num').eq(1).text( cnt1 );
				}
				else{ //105초과하면 중지
					clearInterval(id1);
				}
		}, 54.05405405);
	}
	
	var count2Fn = function(){
		cnt2=0; //변수 초기화 함수 호출시
		
		id2 = setInterval(function(){
				cnt2++;
				if(cnt2<=350){
					$('.se9Num').eq(2).text( cnt2 );
				}
				else{ //105초과하면 중지
					clearInterval(id2);
				}
		}, 28.57142857);
	}

	

	$(window).scroll(function(){
		
		if( $(window).scrollTop() >= $('#section9').offset().top-500  && 
			$(window).scrollTop() < $('#section10').offset().top ){
			if( t===0 ){
				t=1;
				count0Fn();  //카운트0 1~105
				count1Fn();  //카운트0 1~185
				count2Fn();  //카운트0 1~350
			}
		}
		else if( $(window).scrollTop() < $('#section9').offset().top-500 || 
			$(window).scrollTop() >= $('#section10').offset().top ){
			t=0;
		}
		
		
	});
	
	
})(jQuery, window, document);
//sec9-count.js