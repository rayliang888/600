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
ComboBoxDom('c1',101,103);
ComboBoxDom('c2',201,203);
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
	txtCombo[1] =
	[
	[],	
	["1",
	 "加入共用帳務系統，原農漁會分會名稱會變嗎?",
	 "不會更名。僅金融機構代號、通匯代號會重編。"],
	["2",
	 "加入共用帳務系統後，原農漁會的存摺還可以使用嗎？",
	 "不可以。因合併採行共用中心主機系統，請於正式上線日前儘速至原農漁會各本分會補登未登摺之資料。"],
	["3",
	 "加入共用帳務系統後，原農漁會的存款帳號有改變嗎？",
	 "有變更。共用帳務系統之存款帳號統一為14位，請向原開戶單位查明合併後之存款帳號。"]
	];

	txtCombo[2] =
	[
	[],
	["1",
	 "原農漁會定存單是否到期後才更換？利率會變更嗎？有續存寬緩期間嗎？",
	 "原農漁會定存單轉入共用帳務系統後，如原先已有約定進行展期，則仍會依原存單進行展期，無須辦理換單事宜。<br><br>轉入共用帳務系統後，採「固定」利率仍依當初約定之利率計息。採「機動」利率者，依存單存期間，如農漁會牌告利率有調整時，則依該存單期別所調整之各牌告利率分段計息計息。<br><br>存單有續存寬緩期(定存一個月、定儲二個月) 。"],
	["2",
	 "原農漁會存單須轉換？",
	 "原存單帳號會變更，但無須來行更換。"],
	["3",
	 "綜合存款轉定存之存續寬緩期間為何？",
	 "定存一個月、定儲二個月。"]
	];


 //document.getElementById("a"+no).innerHTML = title[no];

function DataBinding2(d1,d2,No){
/*參數function DataBinding2(txtCombo[???][][] , txtCombo[][???][] , #ComboBox_itemNo)**/
	$('#ComboBox_item'+No).children('.ComboBox_title').append(txtCombo[d1][d2][1]);
	$('#ComboBox_item'+No).children('.ComboBox_content').append(txtCombo[d1][d2][2]);
}

DataBinding2(1,1,101);
DataBinding2(1,2,102);
DataBinding2(1,3,103);

DataBinding2(2,1,201);
DataBinding2(2,2,202);
DataBinding2(2,3,203);

















