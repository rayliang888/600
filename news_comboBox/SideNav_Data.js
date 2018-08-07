	

/***********/
//DOM創建
/***********/
/*
demo(Dstring):
		<div id="f1" class="frame1_contentBox_item">
			<div class="frame1_contentBox_item_title">
				<span id="t1" class="frame1_contentBox_item_title_text"></span>
			</div>
			<div id="c1" class="frame1_contentBox_item_content"></div>
		</div>	
		
demo(Dstring2):
		<div id="a1" class="frame1_navBox_item"></div>

*/
	var Dstring="";
	var Dstring2="";
	function DOMcreate(no){
		Dstring+=
		"<div id=\"f"+no+"\" class=\"frame1_contentBox_item\">"+
			"<div class=\"frame1_contentBox_item_title\">"+
				"<span id=\"t"+no+"\" class=\"frame1_contentBox_item_title_text\"></span>"+
			"</div>"+
			"<div id=\"c"+no+"\" class=\"frame1_contentBox_item_content\"></div>"+
		"</div>";	
		Dstring2+=
			"<div id=\"a"+no+"\" class=\"frame1_navBox_item\"></div>";
	}
	
	for(i=1;i<=11;i++){
		DOMcreate(i);
	}
	
	document.getElementById("frame1_contentBox").innerHTML = Dstring;
	document.getElementById("frame1_navBox").innerHTML = Dstring2;
/*************/
//function DataBinding(no)
/*************/    
    var title = ["",
                 "存摺存款",
                 "定期存款",
                 "定期存款(櫃員操作)",
                 "支票存款",
                 "公庫存款",
                 "放款業務",
                 "金融卡暨ATM",
                 "電話語音業務",
                 "網路銀行",
                 "國內匯款及代收業務",
                 "代繳公用事業及其他費用"
                ];
    var content = ["",
				   "",
				   "",
				   "",
				   "",
				   "",
				   "",
				   "",
				   "",
				   "",
				   "",
				   ""
                   ];
	




	/*
	demo:
	document.getElementById("a1").innerHTML = title[1];
	document.getElementById("t1").innerHTML = title[1];
	document.getElementById("c1").innerHTML = content[1];
	*/
	function DataBinding(no){
		document.getElementById("a"+no).innerHTML = title[no];
		document.getElementById("t"+no).innerHTML = title[no];
		document.getElementById("c"+no).innerHTML = content[no];
	}
	for(i=1;i<=11;i++){
		DataBinding(i);
	}
/************/
//滑鼠滾動
/************/	
    function scrollTopSet(goClick,goDiv){
            $(goClick).click(function(){
                  $('html,body').animate({scrollTop:$(goDiv).offset().top}, 500); 
            });   
    }
	
	for(i=1;i<=14;i++){
		//scrollTopSet("#a"+i,"#f"+i);
	}
		

