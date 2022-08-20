(function($) {

    var SF_UI = {
        popup : function (){
            $('[data-role="open_popup"]').on({
                "click" : function(e){
                    var target = $("[data-receive='"+ ($(this).attr("data-send")) +"']");
                    
                    target.show();
                    e.preventDefault();
                }
            });
            
            $(".popup .btn_close").on({
                "click" : function(e){
                    $(this).parents(".popup").hide();
                    e.preventDefault();
                }
            });
        },
        
        alert : function(){
            
        },
        
        init : function(){
            this.popup();
        }
    }
    
    $(function(){
        SF_UI.init();
    });
    
    })(jQuery);
    
    
    
    function tallCalcOpen(){
        $(".popup_tall").show();
    }
    
    function tallCalcClose(){
        $(".popup_tall").hide();	
        $(".popup_tall .sex input[type='radio']").eq(0).prop("checked", true);
        $(".popup_tall input[type='text']").val("");
    }
    
    // 예상 키 계산 함수
    function tallCalc(){
        var result;
        var motherData = $("#motherTall").val();
        var fatherData = $("#fatherTall").val();
        
        if( ! isNumber(motherData) || motherData == "" || motherData == null ){
            alert("어머니 키를 정확히 입력해주시기 바랍니다.");
            $("#motherTall").val("").focus();
            return;
        }
        
        else if( ! isNumber(fatherData) || fatherData == "" || fatherData == null ){
            alert("아버지 키를 정확히 입력해주시기 바랍니다.");
            $("#fatherTall").val("").focus();
            return;
        } 
        
        if( $("#gender-men03").prop("checked") ){
            result = (parseFloat(motherData) + parseFloat(fatherData) + 13)/2;	
        } else {
            result = (parseFloat(motherData) + parseFloat(fatherData) - 13)/2;	
        }
        $("#total").val(result);
    }
    
    function isNumber(s) {
      s += ''; // 문자열로 변환
      s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
      if (s == '' || isNaN(s)) return false;
      return true;
    }