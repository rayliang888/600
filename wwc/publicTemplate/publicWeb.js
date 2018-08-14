 //   var navItem = [[0,],[,],[,],[,],[,]];
 
    $(document).ready(function(){
 /***************/
 //$(window).scroll
 /***************/        
        $(window).scroll(function(){//捲動視窗時
                aa();
        }); 
        aa();
        function aa(){
            if($(window).scrollTop() > 50 ) {//捲下移動多少px時
                    $("#TD_navArea1").addClass('TD_navArea1_alive');
					cc();

            }else{
                    $("#TD_navArea1").removeClass('TD_navArea1_alive');
					cc();
            } 
        }
 /***************/
 //$(window).resize
 /***************/          
        bb();
		cc();
        $(window).resize(function(){
            bb();
			cc();
        });
        
        function bb(){
             if($(window).width() > 900 ) {
                    $("#TD_navBox").show();
                    $("#PH_navBox").hide();
				 	close_PH_navBox_iconBox();
             }else{
                    $("#TD_navBox").hide();
                    $("#PH_navBox").show();   
             }     
        }
		
		function cc(){
			if($(window).width() > 900 ){
					$("#mainBox_content").addClass("mainBox_content_100");
					$("#mainBox_content").removeClass("mainBox_content_50");
			}else{
                    $("#mainBox_content").addClass("mainBox_content_50");
                    $("#mainBox_content").removeClass("mainBox_content_100");
			}
		} 
        
/***************/
 //$('#PH_navBox_iconBox').click(function(){})
/***************/        
 
        $('#PH_navBox_iconBox').click(function(){//close
            if($('#PH_navArea').hasClass('PH_navArea_alive')){
					close_PH_navBox_iconBox();
            }else{//open
                $('#PH_navArea').addClass('PH_navArea_alive');
                $('#main_dark').addClass('main_dark_alive');
                setTimeout(function(){$('#main_dark').addClass('main_dark_alive2');},1);
                $('#PH_navBox_iconBox_line_1').addClass('PH_navBox_iconBox_line_1_alive');
                $('#PH_navBox_iconBox_line_2').addClass('PH_navBox_iconBox_line_2_alive');
                $('#PH_navBox_iconBox_line_3').addClass('PH_navBox_iconBox_line_3_alive');
            }
        });
		
		
	   function close_PH_navBox_iconBox(){//close
					$('#PH_navArea').removeClass('PH_navArea_alive');
					$('#main_dark').removeClass('main_dark_alive');
					$('#main_dark').removeClass('main_dark_alive2');
					$('#PH_navBox_iconBox_line_1').removeClass('PH_navBox_iconBox_line_1_alive');
					$('#PH_navBox_iconBox_line_2').removeClass('PH_navBox_iconBox_line_2_alive');
					$('#PH_navBox_iconBox_line_3').removeClass('PH_navBox_iconBox_line_3_alive');
		}
                     
/***************/
 //$('#PH_navBox_iconBox').click(function(){})
/***************/ 
        $('.PH_navItem').click(function(){
            if($(this).hasClass('PH_navItem_alive')){
                   $(this).removeClass('PH_navItem_alive');
                   $(this).children('.PH_navItem_title').children('.PH_navItem_flagBox').children('.PH_navItem_flag').removeClass('PH_navItem_flag_alive');
               }else{
                   $(this).addClass('PH_navItem_alive');
                   $(this).children('.PH_navItem_title').children('.PH_navItem_flagBox').children('.PH_navItem_flag').addClass('PH_navItem_flag_alive');
               }
        });
		
		
/***************/
 //$('#main_dark').click(function(){})
/***************/ 		
         $('#main_dark').click(function(){
			 close_PH_navBox_iconBox();
		});
        
    });