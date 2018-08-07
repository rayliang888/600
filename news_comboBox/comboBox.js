$(document).ready(function(){		
	//checkFlag('#ComboBox_item1');
	//checkFlag('#ComboBox_item2');
	//checkFlag('#ComboBox_item3');
	
	for(i=101;i<=103;i++){
		checkFlag('#ComboBox_item'+i);
	}
	for(i=201;i<=203;i++){
		checkFlag('#ComboBox_item'+i);
	}
		
});	
		
//初始設定		
function checkFlag(checkInput){
	if($(checkInput).children('.ComboBox_title').children().children().children().hasClass('ComboBox_title_flagBox_flag_open')){
		//初始是open
		$(checkInput).children('.ComboBox_title').css('border-bottom-left-radius','0px');
		$(checkInput).children('.ComboBox_title').css('border-bottom-right-radius','0px');
		$(checkInput).children('.ComboBox_title').children('ComboBox_title_flagBox').css('border-bottom-right-radius','0px');
		
	}else{
		//初始是close
		$(checkInput).children('.ComboBox_title').css('border-bottom-left-radius','5px');
		$(checkInput).children('.ComboBox_title').css('border-bottom-right-radius','5px');
		$(checkInput).children('.ComboBox_title').children('.ComboBox_title_flagBox').css('border-bottom-right-radius','5px');
		
		$(checkInput).children('.ComboBox_content').hide();
	}
}
/*以上原code如下
if($('#ComboBox_item2').children('.ComboBox_title').children().children().children().hasClass('ComboBox_title_flagBox_flag_open')){
}else{
		$('#ComboBox_item2').children('.ComboBox_content').hide();
}
 */
		
		
$('.ComboBox_title').click(function(){
	
	if($(this).children().children().children().hasClass('ComboBox_title_flagBox_flag_open')){
	//close
		/*css*/
		$(this).css('border-bottom-left-radius','5px');
		$(this).css('border-bottom-right-radius','5px');
		$(this).children('.ComboBox_title_flagBox').css('border-bottom-right-radius','5px');
		
		/*js*/
		$(this).parent().children('.ComboBox_content').slideUp();
		$(this).children().children().children().removeClass('ComboBox_title_flagBox_flag_open');
	}else{
	//open
		/*css*/
		$(this).css('border-bottom-left-radius','0px');
		$(this).css('border-bottom-right-radius','0px');
		$(this).children('.ComboBox_title_flagBox').css('border-bottom-right-radius','0px');
		
		
		/*js*/
		$(this).children().children().children().addClass('ComboBox_title_flagBox_flag_open');
		$(this).parent().children('.ComboBox_content').slideDown();
		
		//下兩行，為其他兄弟元素item關閉，可註解掉
		$(this).parent().siblings().children().children().children().children().removeClass('ComboBox_title_flagBox_flag_open');
		$(this).parent().siblings().children('.ComboBox_content').slideUp();
		
		
	}
			
});
	