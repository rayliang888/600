//GOTOP
$(document).ready(function(){

        $("#goTop").hide();//隱藏按鈕
		
		$(function (){
			$(window).scroll(function(){//捲動視窗時
				if ($(window).scrollTop()>450){//捲下移動多少px時
					$("#goTop").fadeIn(1000);//淡入動畫
				}
				else
					{
						$("#goTop").fadeOut(1000);//淡出動畫
					}
			});
			
			$("#goTop").click(function(){//click
				$('body,html').animate({scrollTop:0},0700);//捲至TOP170
			});
		});
    
    
});
