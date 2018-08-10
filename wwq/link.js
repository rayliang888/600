$(document).ready(function(){
//捲動視窗導覽列	
    
    function aa(){
        //導覽列
        if($(window).scrollTop()>$(window).height()-200 && $(window).width()>900 ) {//捲下移動多少px時
				$("#linkNav").fadeIn();	
                
        }else{
				$("#linkNav").fadeOut();
        } 
      
    }
    
    aa();
    $(window).scroll(function(){//捲動視窗時
        aa();
    });
    $(window).resize(function(){
        aa();
    });
        
    
     
    /*微調參數*/
    var ReviseTopdesk = 0;
    var RevisePhone = -40 ;
    var FixReviseTopdesk = 0;
    var FixRevisePhone = 0 ;
    
   /* 
   demo
   $("#toA1").click(function(){
        if($(window).width()>900){
             $('html,body').animate({scrollTop:$('#a1').offset().top-ReviseTopdesk}, 500); 
        }else{
             $('html,body').animate({scrollTop:$('#a1').offset().top-RevisePhone}, 500); 
        }
        
    });  */  
    
    function scrollTopSet(goClick,goDiv){
            $(goClick).click(function(){
            if($(window).width()>900){
                    if($(window).scrollTop()<150){
                        $('html,body').animate({scrollTop:$(goDiv).offset().top-ReviseTopdesk}, 500); 
                    }else{
                        $('html,body').animate({scrollTop:$(goDiv).offset().top-ReviseTopdesk+FixReviseTopdesk}, 500); 
                    }
            }else{
                   if($(window).scrollTop()<150){
                        $('html,body').animate({scrollTop:$(goDiv).offset().top-RevisePhone}, 500); 
                    }else{
                         $('html,body').animate({scrollTop:$(goDiv).offset().top-RevisePhone+FixRevisePhone}, 500); 
                
                    }
            }

            });   
    }
    
    scrollTopSet("#toA1","#a1"); scrollTopSet("#toA1nav","#a1");
    scrollTopSet("#toA2","#a2"); scrollTopSet("#toA2nav","#a2");
    scrollTopSet("#toA3","#a3"); scrollTopSet("#toA3nav","#a3");
    scrollTopSet("#toA4","#a4"); scrollTopSet("#toA4nav","#a4");
    scrollTopSet("#toA5","#a5"); scrollTopSet("#toA5nav","#a5");
    scrollTopSet("#toA6","#a6"); scrollTopSet("#toA6nav","#a6");
    scrollTopSet("#toA7","#a7"); scrollTopSet("#toA7nav","#a7");
    
    /*********************/

    
    
//首頁頭導覽

            $("#peopleTalk").hide();//隱藏按鈕
    
			$(window).scroll(function(){ ww(); });
                $(window).resize(function(){ ww() ;});
    
		ww();
        function ww(){
                if ($(window).scrollTop()<50 && $(window).width()>700 && $(window).height()>500){
					$("#peopleTalk").show();
				}else{
					$("#peopleTalk").hide();
                    
				}    
        }
        $("#peopleTalk").click(function(){
            $(this).hide();
        });
    
    

    
    
});

