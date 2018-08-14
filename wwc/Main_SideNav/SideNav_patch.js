/**********/
//#frame1_navBox定位 與 高度
/***********/
function scrollTop1(){
	if($(window).scrollTop()<=50){
		$('#frame1_navBox').addClass('frame1_navBox_top100');
		$('#frame1_navBox').removeClass('frame1_navBox_top50');
	}else{
		$('#frame1_navBox').addClass('frame1_navBox_top50');
		$('#frame1_navBox').removeClass('frame1_navBox_top100');
	}
	
	//延遲動畫跑完才抓高度$('#TD_navBox').height()	
	 setTimeout(function(){
		 $('#frame1_navBox').height( $(window).height() - $('#TD_navBox').height());
	 },300);
	
	
}

$(document).ready(function(){
	scrollTop1();
});
	
$(window).scroll(function(){
	scrollTop1();
}).resize(function(){
	scrollTop1();
});






/***************/
//函式刷新
/**************/
	//原本檔案的此函式要註解掉
    function scrollTopSet(goClick,goDiv){
            $(goClick).click(function(){
				$('html,body').animate({scrollTop:$(goDiv).offset().top-49},800); 
				//alert($(goDiv).offset().top)
				//上列，幫助測試時觀察元素滾動的位置
            });   

		
    }
	
	for(i=1;i<=4;i++){
		scrollTopSet("#a"+i,"#f"+i);
	}

/**************/
//frame1_contentBox_item_content高度等於視窗高度$(window).height()
/**************/
$(document).ready(function(){
	autoHeight();
});	
$(window).resize(function(){
	autoHeight();
});

function autoHeight(){
	$('.frame1_contentBox_item_content').css('min-height',$(window).height() -150 );
	
}