	

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
	
	for(i=1;i<=4;i++){
		DOMcreate(i);
	}
	
	document.getElementById("frame1_contentBox").innerHTML = Dstring;
	document.getElementById("frame1_navBox").innerHTML = Dstring2;

/************/
//滑鼠滾動
/************/	
    function scrollTopSet(goClick,goDiv){
            $(goClick).click(function(){
                  $('html,body').animate({scrollTop:$(goDiv).offset().top}, 500); 
            });   
    }
	
	for(i=1;i<=4;i++){
		//scrollTopSet("#a"+i,"#f"+i);
	}
		
/**************/
//DOM-教育訓練講義
/**************/


var strTea='';
strTea+='<div class="signature_box">';
strTea+='	<div class="signature_area zoomIn animated">';
strTea+='		<div class="signature_title_text">';
strTea+='			存款教育訓練';
strTea+='		</div>';
strTea+='		<a href="../download/教育訓練－存款講義.zip">';
strTea+='			<div class="signature_body">';
strTea+='				<div class="signature_word">';
strTea+='					<ol>';
strTea+='						<li>';
strTea+='							公庫講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							匯兌講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							代理代收講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							代收票據講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							存摺存款講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							定期存款講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							支票存款講義';
strTea+='						</li>';
strTea+='					</ol>';
strTea+='				</div>';
strTea+='				<p class="signature_date">';
strTea+='					最後異動日：2018/07/18';
strTea+='				</p>';
strTea+='			</div>';
strTea+='		</a>';
strTea+='		<div class="signature_body_bottom">';
strTea+='		</div>';
strTea+='		<div class="signature_round">';
strTea+='			<div class="signature_img signature_img1">';
strTea+='			</div>';
strTea+='		</div>';
strTea+='		<div class="signature_title">';
strTea+='		</div>';
strTea+='		<div class="signature_title_bottom">';
strTea+='		</div>';
strTea+='	</div>';
strTea+='	<div class="signature_area zoomIn animated">';
strTea+='		<div class="signature_title_text">';
strTea+='			放款教育訓練';
strTea+='		</div>';
strTea+='		<a href="../download/教育訓練－放款講義.zip">';
strTea+='			<div class="signature_body">';
strTea+='				<div class="signature_word">';
strTea+='					<ol>';
strTea+='						<li>';
strTea+='							撥貸作業';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							聯貸、專案計劃及專案農貸撥款';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							放款業務補充簡報';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							前置協商交易作業說明';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							放款會計結帳流程說明';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							擔保品查詢方式';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							放款案例簡報、實測';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							消債清理業務概述';
strTea+='						</li>';
strTea+='					</ol>';
strTea+='				</div>';
strTea+='				<p class="signature_date">';
strTea+='					最後異動日：2017/12/14';
strTea+='				</p>';
strTea+='			</div>';
strTea+='		</a>';
strTea+='		<div class="signature_body_bottom">';
strTea+='		</div>';
strTea+='		<div class="signature_round">';
strTea+='			<div class="signature_img signature_img2">';
strTea+='			</div>';
strTea+='		</div>';
strTea+='		<div class="signature_title">';
strTea+='		</div>';
strTea+='		<div class="signature_title_bottom">';
strTea+='		</div>';
strTea+='	</div>';
strTea+='	<div class="signature_area zoomIn animated">';
strTea+='		<div class="signature_title_text">';
strTea+='			會計教育訓練';
strTea+='		</div>';
strTea+='		<a href="../download/教育訓練－會計講義.zip">';
strTea+='			<div class="signature_body">';
strTea+='				<div class="signature_word">';
strTea+='					<ol>';
strTea+='						<li>';
strTea+='							全會會計講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							全會會計-出納講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							存放行庫講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							有價證券講義';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							簡易外匯講義';
strTea+='						</li>';
strTea+='					</ol>';
strTea+='				</div>';
strTea+='				<p class="signature_date">';
strTea+='					最後異動日：2018/07/18';
strTea+='				</p>';
strTea+='			</div>';
strTea+='		</a>';
strTea+='		<div class="signature_body_bottom">';
strTea+='		</div>';
strTea+='		<div class="signature_round">';
strTea+='			<div class="signature_img signature_img3">';
strTea+='			</div>';
strTea+='		</div>';
strTea+='		<div class="signature_title">';
strTea+='		</div>';
strTea+='		<div class="signature_title_bottom">';
strTea+='		</div>';
strTea+='	</div>';
strTea+='	<div class="signature_area zoomIn animated">';
strTea+='		<div class="signature_title_text">';
strTea+='			會籍教育訓練';
strTea+='		</div>';
strTea+='		<a href="../download/教育訓練－會籍講義20180315.zip">';
strTea+='			<div class="signature_body">';
strTea+='				<div class="signature_word">';
strTea+='					<ol>';
strTea+='						<li>';
strTea+='							控制類 (C)';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							管理類 (G)';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							顧客管理系統 (F)';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							會籍管理系統 (M)';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							行業別代碼表';
strTea+='						</li>';
strTea+='						<li>';
strTea+='							報表管理系統';
strTea+='						</li>';
strTea+='					</ol>';
strTea+='				</div>';
strTea+='				<p class="signature_date">';
strTea+='					最後異動日：2018/03/15';
strTea+='				</p>';
strTea+='			</div>';
strTea+='		</a>';
strTea+='		<div class="signature_body_bottom">';
strTea+='		</div>';
strTea+='		<div class="signature_round">';
strTea+='			<div class="signature_img signature_img4">';
strTea+='			</div>';
strTea+='		</div>';
strTea+='		<div class="signature_title">';
strTea+='		</div>';
strTea+='		<div class="signature_title_bottom">';
strTea+='		</div>';
strTea+='	</div>';
strTea+='</div>';

/**************/
//DOM-download框架創建共用方法
/**************/
function ArrayToStr(strDom0_array,strDom0,intStart,intEnd,strDir){
	strDom0+='<div class="downloan_box downloan_box1">';

	for(i=intStart;i<=intEnd;i++){
		if(i<intEnd){
			j="0"+i;
		   }else{
			j=i;
		   }
	strDom0+='<a href="download/'+strDir+strDom0_array[i]+'" class="downloan_a">';
	strDom0+='	<div class="downloan_boxItem downloan_boxItem1">';
	strDom0+=       strDom0_array[i];		
	strDom0+='		<div class="downloan_numbeBox downloan_numberBox1">';
	strDom0+='			<span class="downloan_number">'+j+'</span>';
	strDom0+='		</div>';	
	strDom0+='	</div>';
	strDom0+='</a>';	
	}

	strDom0+='</div>';
	return strDom0;
}
/**************/
//DOM-農漁會常用文件
/**************/
var strDom1='';
var strDom1_array = new Array();
strDom1_array =[
	"",
	"每日報表印製明細(新舊系統報表對照表)1051209.zip",
	"會計師查帳報表名稱.docx",
	"報表名稱與出表週期明細表v1.zip",
	"新版『授信行業別與報送央行「放款對象別」代號對照表』.zip",
	"國別代碼表.pdf",
	"固定資產耐用年數表.pdf",
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

strDom1+='<div class="downloan_box downloan_box1">';

for(i=1;i<=10;i++){
	if(i<10){
	   	j="0"+i;
	   }else{
		j=i;
	   }
strDom1+='<a href="download/'+strDom1_array[i]+'" class="downloan_a">';
strDom1+='	<div class="downloan_boxItem downloan_boxItem1">';
strDom1+=       strDom1_array[i];		
strDom1+='		<div class="downloan_numbeBox downloan_numberBox1">';
strDom1+='			<span class="downloan_number">'+j+'</span>';
strDom1+='		</div>';	
strDom1+='	</div>';
strDom1+='</a>';	
}

strDom1+='</div>';



/**************/
//DOM-資訊共用常用秘笈
/**************/
var strDom2='';
var strDom2_array = new Array();
strDom2_array =[
	"",
	"每日報表印製明細(新舊系統報表對照表)1051209.zip",
	"會計師查帳報表名稱.docx",
	"報表名稱與出表週期明細表v1.zip",
	"新版『授信行業別與報送央行「放款對象別」代號對照表』.zip",
	"國別代碼表.pdf",
	"固定資產耐用年數表.pdf",
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

var strDom2 = ArrayToStr(strDom2_array,strDom2,1,10,"");

 
/**************/
//DOM-櫃員交易手冊
/**************/
var strDom3='';
var strDom3_array = new Array();
strDom3_array =[
	"",
	"櫃員交易手冊.zip",
	"會計師查帳報表名稱.docx",
	"報表名稱與出表週期明細表v1.zip",
	"新版『授信行業別與報送央行「放款對象別」代號對照表』.zip",
	"國別代碼表.pdf",
	"固定資產耐用年數表.pdf",
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
var strDom3 = ArrayToStr(strDom3_array,strDom3,1,10,"book/");


/*************/
//function DataBinding(no)
/*************/    
    var title = ["",
                 "教育訓練手冊下載",
                 "農漁會常用文件",
                 "資訊共用常用秘笈",
                 "櫃員交易手冊"
                ];
    var content = ["",
				   "",
				   "",
				   "",
				   ""
                   ];
	

		content[1] = strTea;
		content[2] = strDom1;
		content[3] = strDom2;
		content[4] = strDom3;
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
	for(i=1;i<=4;i++){
		DataBinding(i);
	}
