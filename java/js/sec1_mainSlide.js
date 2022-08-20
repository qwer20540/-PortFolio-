;(function($, window, document, undefined){
	var fRat = 0.052548607;  //글자크기의 비율(Rate) = 글자크기 / 창너비
	var yRat = 0.004203889;  //밑줄장식 비율(Rate) = 박스크기 / 창너비
	var sRat = 0.007882291;  //작은타이틀 비율(Rate) = 글자크기 / 창너비

	var winW = winH = titH = titT = fonS = linH = smlS = 0;
	var cnt = setId = tCnt = setId2 = 0;

		resizeFn();
		setTimeout(resizeFn,100);

		function resizeFn(){   //반응형 함수
			winW = $(window).innerWidth();		
			winH = $(window).innerHeight();		
			titH = $('.slide-title-wrap').innerHeight();
			titT = (winH-titH)/2-10;  	//텍스트박스 탑값: 293
			fonS = winW * fRat;  	//포트 사이즈 = 창너비 * 글자크기비율		
			linH = winW * yRat;  	//밑줄박스 높이 = 창너비 * 밑줄박스크기비율
			smlS = winW * sRat;

			if( winW > 1024 ){
				fonS = fonS * 1;   	// fonS *=1
				smlS = smlS * 1;
			}
			else if( winW > 760 ){ 	// 범위 761 ~ 1024
				fonS = fonS * 1.3;  
				smlS = smlS * 1.3;
			}
			else if( winW > 500 ){ 	// 범위 501 ~ 760
				fonS = fonS * 1.4;  
				smlS = smlS * 1.4;
			}
			else{					// 범위 0 ~ 500
				fonS = fonS * 1.7;  
				smlS = smlS * 1.3;	
			}
			
			$('.slide-wrap').css({ height: winH }); //섹션1 슬라이드박스 높이 설정
			$('.slide').css({ width: winW });  //슬라이드 너비 설정 창너비로
			$('.slide-title-wrap').css({ top: titT }); //타이틀 박스 탑값 설정
			$('.slide-title-wrap h2').css({ fontSize: fonS }); //타이틀 h2 폰트사이즈
			$('.slide-title-wrap h2 i').css({ height: linH }); //밑줄박스 높이
			$('.slide-title-wrap h4').css({ fontSize: smlS }); //작은 타이틀 폰트사이즈
			
			//슬라이드 메인슬라이드 함수 호출 반응형 적용
			mainSlideFn();
			
		} //반응형 함수 END

		$(window).resize(function(){ //창크기 변경될 때 마다 반복 실행
			resizeFn();
		});
		
		/////////////////////////////////////////////////////
		//슬라이드 구현 /////////////////////////////////////////
		autoPlayFn();
		//자동 실행 슬라이드 함수
		function autoPlayFn(){
			setId = setInterval(nextCountFn, 4000 );
		}
		
		//타이머 콘트롤 함수
		//클릭한 후 또는 터치한 후 카운트
		//5초동안 터치또는 클릭을 안하면 자동타이머를 호출 실행
		function timeControlFn(){
			tCnt=0;                 //초기화 반드시
			clearInterval(setId2);	//초기화 반드시	
			
			setId2 = setInterval( function(){
				tCnt++;
				if( tCnt > 5 ){
					nextCountFn(); //다음 슬라이드
					autoPlayFn();  //자동타이머 실행
					clearInterval(setId2);
				}
			} ,1000);
		}
		
		
		//페이지버튼(번호:인덱스번호) each()
		//$('.pageBt').eq(0) $('.pageBt').eq(1) $('.pageBt').eq(2) 
		//클릭 이벤트 마우스로 클릭하면 자동 슬라이드가 정지되고  clearInterval(setId);
		//클릭한 슬라이드 번호로 이동하여 구현한다.
		$('.pageBt').each(function(index){
			$(this).on({ //클릭한 버튼 인덱스번호 호출
				click:	function(){
					clearInterval(setId);  	//자동타이머를 일시중지하고
					cnt = index;  			//현재 슬라이드를 클릭한 인덱스번호로 변경
					mainSlideFn();			//에니메이션 슬라이드이동 : 메인슬라이드
					
					//클릭 후 5초 동안 클릭을 안하면 
					//다음 슬라이드 카운트하도록 자동타이머를 실행하는 timeControlFn() 함수를 제작
					timeControlFn();
					
				}
			});
		});
		
		
		
		//페이지버튼 이벤트 함수
		function pageBtEventFn(){
			$('.pageBt').removeClass('addClassPage');
			$('.pageBt').eq(cnt>2?cnt=0:cnt).addClass('addClassPage');
		}
		
		
		
		
		
		//슬라이드 전체박스 view박스를 터치슬라이드(swipe())
		$('.slide-view').swipe({
			swipeLeft:	function(){
				//애니메이션이 진행중일때는 터치 안되게 해야함
				if( !$('.slide-wrap').is(':animated') ){
					clearInterval(setId);
					nextCountFn();  //다음 카운트
					
					//터치 후 5초 동안 클릭을 안하면 
					//다음 슬라이드 카운트하도록 자동타이머를 실행하는 timeControlFn() 함수를 제작
					timeControlFn();
				}
			
			},
			swipeRight:	function(){
				if( !$('.slide-wrap').is(':animated') ){
					clearInterval(setId);
					prevCountFn();  //이전 카운트
					
					//터치 후 5초 동안 클릭을 안하면 
					//다음 슬라이드 카운트하도록 자동타이머를 실행하는 timeControlFn() 함수를 제작
					timeControlFn();
				}
			}
		});
		
		
		
		function nextCountFn(){
			cnt++;
			mainSlideFn();
		}
		function prevCountFn(){
			cnt--
			mainSlideFn();
		}
				
		//메인슬라이드 함수
		function mainSlideFn(){
			$('.slide-wrap').stop().animate({left:(-100*cnt)+'%'},400,'easeInOutSine', function(){
				if( cnt>2 ){
					cnt=0;
				}
				if( cnt<0 ){
					cnt=2;
				}
				$('.slide-wrap').stop().animate({left:(-100*cnt)+'%'},0);
			});
			pageBtEventFn();  //페이지버튼 이벤트 함수 호출
		}
		
			
			

})(jQuery, window, document);
//sec1_mainSlide.js