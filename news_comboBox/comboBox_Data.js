/**********/
//DOMcreate
/**********/
//document.getElementById("c1").innerHTML = strCombo ;

/*
	<div class="ComboBox">
		<div id="ComboBox_item1" class="ComboBox_item">
			<div  class="ComboBox_title">
				<div class="ComboBox_title_number">
						<div class="ComboBox_title_number_seat">
							1.
						</div>	
				</div>
				問題問題問題問題問題問題問題問題問題問題問題問題問題問題問題問題問
				<div class="ComboBox_title_flagBox">
					<div class="ComboBox_title_flagBox_seat">
						<div  class="ComboBox_title_flagBox_flag ComboBox_title_flagBox_flag_open"></div>
					</div>
				</div>
			</div>
			<div  class="ComboBox_content">
			回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答回答	
			</div>
		</div>
   </div>
*/
ComboBoxDom('c5',501,504);
function ComboBoxDom(domArea,intStartItemNo,intEndItemNo){
	//domArea 
	//intStartItemNo: ComboBox_item開始id
	//intEndItemNo: ComboBox_item結束id
	var strCombo='';
	var intNo=1;
		strCombo+='	<div class="ComboBox">';
	for(i=intStartItemNo;i<=intEndItemNo;i++){
		strCombo+='		<div id="ComboBox_item'+i+'" class="ComboBox_item">';
		strCombo+='			<div  class="ComboBox_title">';
		strCombo+='				<div class="ComboBox_title_number">';
		strCombo+='						<div class="ComboBox_title_number_seat">Q'+intNo;
		strCombo+='						</div>	';
		strCombo+='				</div>';
		strCombo+='				<div class="ComboBox_title_flagBox">';
		strCombo+='					<div class="ComboBox_title_flagBox_seat">';
		strCombo+='						<div class="ComboBox_title_flagBox_flag\"></div>';
		strCombo+='					</div>';
		strCombo+='				</div>';
		strCombo+='			</div>';
		strCombo+='			<div  class="ComboBox_content">';
		strCombo+='			</div>';
		strCombo+='		</div>';
		intNo++;	
	}
		strCombo+=' </div>';
	document.getElementById(domArea).innerHTML += strCombo ;
}









/**********/
//DataBinding
/**********/


//<div id="c1" class="frame1_contentBox_item_content"></div>  DataBinding
var txtCombo = new Array();
/*陣列規格:[c1(dom:id)] [no] [txt]*/
	txtCombo[5] =
	[
	[],	
	["1",
	 "我能夠使用這個驗算工具嗎?",
	 "此驗算功能限有上線固定資產的農漁會使用，並協助A6500、A6600驗算。"],
	["2",
	 "如果固定資產沒有與共用系統一同上線，那可以再將來補上線嗎？",
	 "可以。請聯絡02-23802732陳先生，討論上線事宜"],
	["3",
	 "如果固定資產上線後，攤提方式不適用，可以下線嗎？",
	 "可以。請聯絡02-23802732陳先生，討論下線事宜"],
	["4",
	 "如果試算的結果與現行不同，要寫需求單嗎？",
	 "不用。使用A6600交易修改即可"],	
	];



 //document.getElementById("a"+no).innerHTML = title[no];

function DataBinding2(d1,d2,No){
/*參數function DataBinding2(txtCombo[???][][] , txtCombo[][???][] , #ComboBox_itemNo)**/
	$('#ComboBox_item'+No).children('.ComboBox_title').append(txtCombo[d1][d2][1]);
	$('#ComboBox_item'+No).children('.ComboBox_content').append(txtCombo[d1][d2][2]);
}

DataBinding2(5,1,501);
DataBinding2(5,2,502);
DataBinding2(5,3,503);
DataBinding2(5,4,504);






















