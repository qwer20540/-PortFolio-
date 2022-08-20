;(function($, window, document, undefined){
	
	// 서브밋버튼 클릭 이벤트
	// 데이터 전송 하고 결과를 확인 하는 AJAX - PHP 서버사이드 파일에 전송 결과를 다시 받아서
	// P태그로 출력
	$('.submitBt').on({
		click:	function(event){			
			event.preventDefault(); // 버튼이 새로고침을 안되게 
			
			var txtirum       = $('#irum').val();
			var txtemail      = $('#email').val();
			var txtinterested = $('#interested').val();
			var txtmessage    = $('#message').val();
				
				//유효성 검사
				//입력상자 체크 값이 비어 잇으면 반드시 입력
				//이름상자체크
				if( txtirum === '' ){
					$('.error').eq(0).addClass('error-message');
					$('#irum').focus();
					return false;
				}else{
					$('.error').eq(0).removeClass('error-message');
				}
				//이메일상자체크
				if( txtemail === '' ){
					$('.error').eq(1).addClass('error-message');
					$('#email').focus();
					return false;
				}else{
					$('.error').eq(1).removeClass('error-message');
				}
				//메시지상자체크
				if( txtmessage === '' ){
					$('.error').eq(2).addClass('error-message');
					$('#message').focus();
					return false;
				}else{
					$('.error').eq(2).removeClass('error-message');
				}
				
				//전송준비 완료
				// 로딩 애니메이션
				$('.ajax-loader').addClass('submit');
				// ajax전송
				$.ajax({
					url:'./member.php',
					type:'POST',
					data:{
						irum : 		 txtirum,
						email :		 txtemail,
						interested : txtinterested,
						message : 	 txtmessage
					},
					success: function( data ){
						
						setTimeout(function(){
							//성공하면 로딩애니메이션 사라지고
							$('.ajax-loader').removeClass('submit');
							//성공메시지 박스 나타나고
							$('.success-text').addClass('success-message');	
							//전송된 데이터 내용 출력된다.
							$('.success-text div').append( data );								
						}, 2000);
						
						$('#irum').val('');
						$('#email').val('');
						$('#interested').val('');
						$('#message').val('');
						
						$('#irum').focus();
						
					},
					error:	 function(){
						alert('AJAX 오류!!!');
					}
				});
				
				
			
		}
	});
	
	
		
	
	
})(jQuery, window, document);
//sec13-FormAjax.js