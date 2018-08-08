//js有DOM的關係，程式要寫在HTML的下面

/*變數宣告區*/
var Html_AF_item="";
var AFindex=1;//農漁會索引
var AF_length = 136; //此變數為 mySelect.html使用  農漁會家數  

function sortAFindex(){
    //sort[農漁會編號]的欄位
var sortAF=new Array();
        for(var i=1;i<=AF_length;i++){
            sortAF.push(af[i][0][0]);   
        }
        sortAF.sort();
var sortAFindex=new Array();
    //將[農漁會編號]翻譯為index
        for(var i=0;i<=AF_length-1;i++){
            for(var j=1;j<=AF_length;j++){
                if(sortAF[i]==af[j][0][0]){
                    sortAFindex.push(j);
                    break;
                }
            }
        }
        //alert(sortAFindex);
    return sortAFindex;
}

/**************************************************************************************/
/*************************網頁一打開就先執行一次*******************************************/
/**************************************************************************************/
                    Html_AF_item_all();
                    updateAF();


/**************************************************************************************/
/**************************************************************************************/
/****DEMO************DEMO*******DEMO**********DEMO*********DEMO*******
                            <button class="AF_input_content_item" value="919" name="AF_item" onclick="AF_GO()">
                                <div class="AF_input_content_item-Area-1">
                                    <div class="AF_input_content_item-Area-2">
                                    </div>
                                    <div class="AF_input_content_item-Area-3">
                                        919三義鄉農會
                                    </div>
                                </div>
                            </button>
*********************************************************/
/**************************************************************************************/
/****************function Html_AF_item_all()    全部農漁會*******************************/
/**************************************************************************************/
function Html_AF_item_all(){
    
    
     Html_AF_item="";
    
    var SAI=sortAFindex();
     
    //input
    for(var i=0;i<=AF_length-1;i++){
    Html_AF_item+=                      
                            "<button class=\"AF_input_content_item\" value=\""+SAI[i]+"\"    id=\""+af[SAI[i]][0][0]+"\"    >"+
                                "<div class=\"AF_input_content_item-Area-1\">"+
                                    "<div class=\"AF_input_content_item-Area-2\">"+
                                    "</div>"+
                                    "<div class=\"AF_input_content_item-Area-3\">"+
                                    "</div>"+
                                    "<div class=\"AF_input_content_item-Area-4\">"+
                                        af[SAI[i]][0][0]+af[SAI[i]][0][2]+af[SAI[i]][0][3]+
                                    "</div>"+
                                "</div>"+
                            "</button>";
  
    }
    document.getElementById("AF_input_content").innerHTML =Html_AF_item;//DOM建立出來後才可以使用功能
    for(var ii=1;ii<=AF_length;ii++){
        document.getElementById(af[ii][0][0]).onclick = function(){AFindex=$(this).attr("value");updateAF();ScrollResult();}
    }
    
    document.getElementById("F_record").innerHTML ="共"+AF_length+"筆資料";
}


/**************************************************************************************/
/**********************Html_AF_item_custom(AF_3array,str)******************************/
/**************************************************************************************/
function Html_AF_item_custom(AF_3array,str){
    
    var totle =0;
    Html_AF_item="";
    for(var ii=1;ii<=AF_length;ii++){
        if(af[ii][0][AF_3array]==str){
                Html_AF_item+=                      
                            "<button class=\"AF_input_content_item\" value=\""+ii+"\"    id=\""+af[ii][0][0]+"\"    >"+
                                "<div class=\"AF_input_content_item-Area-1\">"+
                                    "<div class=\"AF_input_content_item-Area-2\">"+
                                    "</div>"+
                                    "<div class=\"AF_input_content_item-Area-3\">"+
                                    "</div>"+
                                    "<div class=\"AF_input_content_item-Area-4\">"+
                                        af[ii][0][0]+af[ii][0][2]+af[ii][0][3]+
                                    "</div>"+
                                "</div>"+
                            "</button>";
                totle+=1;
  
        }
    }
    
    document.getElementById("AF_input_content").innerHTML =Html_AF_item;//DOM建立出來後才可以使用功能
    
    for(var ii=1;ii<=AF_length;ii++){
            if(af[ii][0][AF_3array]==str){
               document.getElementById(af[ii][0][0]).onclick = function(){AFindex=$(this).attr("value");updateAF();ScrollResult();}
            }
    }
    document.getElementById("F_record").innerHTML ="共"+totle+"筆資料";
}



/**************************************************************************************/
/**********************Html_AF_input()************************************************/
/**************************************************************************************/
    var Html_AF_input_content=
         
        "<div class=\"input-group  CustomButton2 \">"+
                "<span class=\"  input-group-addon CustomButton2_label \"><i class=\"glyphicon glyphicon-pencil\"></i>搜尋條件</span>"+
                "<input  type=\"text\" id=\"input\"  class=\" form-control CustomButton2_label\" >"+
        "</div>"+
        
        "<button class=\"CustomButton  \" data-toggle=\"modal\" data-target=\"#UsingModal\"><i class=\"glyphicon glyphicon-sunglasses\"></i>&nbsp;使用說明</button> "+
        "<button class=\"CustomButton  \" onclick=\"Search_1()\">代號搜尋&nbsp;<i class=\"glyphicon glyphicon-search\"></i></button> "+
        "<button class=\"CustomButton  \" onclick=\"Search_2()\">名稱搜尋&nbsp;<i class=\"glyphicon glyphicon-search\"></i></button> "+
        "<button class=\"CustomButton  \" onclick=\"Search_4()\">上線日搜尋&nbsp;<i class=\"glyphicon glyphicon-search\"></i></button> "+
        "<button class=\"CustomButton  \" onclick=\"Search_5()\">地區搜尋&nbsp;<i class=\"glyphicon glyphicon-search\"></i></button> "+
        "<button class=\"CustomButton  \" onclick=\"Search_3()\">資料搜尋&nbsp;<i class=\"glyphicon glyphicon-search\"></i></button> "+
        "<button class=\"CustomButton  \" onclick=\"Search_all()\">綜合搜尋&nbsp;<i class=\"glyphicon glyphicon-search\"></i></button> "+
        "<hr>";
    
    function Html_AF_input(){
        
        Html_AF_item= Html_AF_input_content ;
        document.getElementById("AF_input_content").innerHTML =Html_AF_item;
        document.getElementById("F_record").innerHTML ="";
    }

    var intInputResult1,intInputResult2,intInputResult3,intInputResult4;
    var intInputResultArray=new Array();//存放結果
    var inputValue;//input

    function Search_all(){
            Html_AF_item= Html_AF_input_content ;
            inputValue = document.getElementById("input").value;
        
            for(var ii=1;ii<=AF_length;ii++){
                // intInputResult1 
                         intInputResult1 = af[ii][0][0].indexOf(inputValue);//農漁會代號
                // intInputResult2 
                     var intInputResult2_content=af[ii][0][2]+af[ii][0][3];//農漁會全名
                         intInputResult2 = intInputResult2_content.indexOf(inputValue);
                // intInputResult3  
                     var intInputResult3_length = af[ii].length;//此變數為農漁會的分會數量+1
                     var intInputResult3_content="";
                     for(var i=1;i<intInputResult3_length;i++){//加上"_"區隔不同欄位免得視為
                        intInputResult3_content+=af[ii][i][0]+"_";
                        intInputResult3_content+=af[ii][i][1]+"_";
                        intInputResult3_content+=af[ii][i][2]+"_";
                        intInputResult3_content+=af[ii][i][3]+"_";
                     }
                        intInputResult3 = intInputResult3_content.indexOf(inputValue);
                // intInputResult4  上線日
                    var intInputResult4_content=af[ii][0][5]+af[ii][0][6]+af[ii][0][7];//農漁會上線日
                        intInputResult4 = intInputResult4_content.indexOf(inputValue);
              
                // intInputResult5  地區別
                    var intInputResult5_content=af[ii][0][4];//地區
                        intInputResult5 = intInputResult5_content.indexOf(inputValue);
                //intInputResultArray[]
                        if(intInputResult1!=-1||intInputResult2!=-1||intInputResult3!=-1||intInputResult4!=-1||intInputResult5!=-1){//-1代表沒找到，不等於-1代表有找到
                            intInputResultArray[ii]=1;
                        }else{
                            intInputResultArray[ii]=0;
                        }
            }
        goSearch();
    }


    function Search_1(){
            Html_AF_item= Html_AF_input_content ;
            inputValue = document.getElementById("input").value;
        
            for(var ii=1;ii<=AF_length;ii++){
                // intInputResult1   三碼農漁會代碼
                         intInputResult1 = af[ii][0][0].indexOf(inputValue);
                //intInputResultArray[]
                        if(intInputResult1!=-1){//-1代表沒找到，不等於-1代表有找到
                            intInputResultArray[ii]=1;
                        }else{
                            intInputResultArray[ii]=0;
                        }
            }
        goSearch();
    }

    function Search_2(){
            Html_AF_item= Html_AF_input_content ;
            inputValue = document.getElementById("input").value;
        
            for(var ii=1;ii<=AF_length;ii++){
            // intInputResult2     農漁會中文名稱
                     var intInputResult2_content=af[ii][0][2]+af[ii][0][3];//農漁會全名
                         intInputResult2 = intInputResult2_content.indexOf(inputValue);
                
            //intInputResultArray[]
                        if(intInputResult2!=-1){//-1代表沒找到，不等於-1代表有找到
                            intInputResultArray[ii]=1;
                        }else{
                            intInputResultArray[ii]=0;
                        }
            }
        goSearch();
    }
    function Search_3(){
            Html_AF_item= Html_AF_input_content ;
            inputValue = document.getElementById("input").value;
        
            for(var ii=1;ii<=AF_length;ii++){
                // intInputResult3  綜合資料
                     var intInputResult3_length = af[ii].length;//此變數為農漁會的分會數量+1
                     var intInputResult3_content="";
                     for(var i=1;i<intInputResult3_length;i++){//加上"_"區隔不同欄位免得視為
                        intInputResult3_content+=af[ii][i][0]+"_";
                        intInputResult3_content+=af[ii][i][1]+"_";
                        intInputResult3_content+=af[ii][i][2]+"_";
                        intInputResult3_content+=af[ii][i][3]+"_";
                     }
                        intInputResult3 = intInputResult3_content.indexOf(inputValue);
                
                //intInputResultArray[]
            
                        if(intInputResult3!=-1){//-1代表沒找到，不等於-1代表有找到
                            intInputResultArray[ii]=1;
                        }else{
                            intInputResultArray[ii]=0;
                        }
            }
        goSearch();
    }
    function Search_4(){
            Html_AF_item= Html_AF_input_content ;
            inputValue = document.getElementById("input").value;
        
            for(var ii=1;ii<=AF_length;ii++){
               
                // intInputResult4    上線日期
                    var intInputResult4_content=af[ii][0][5]+af[ii][0][6]+af[ii][0][7];//農漁會上線日
                        intInputResult4 = intInputResult4_content.indexOf(inputValue);
                //intInputResultArray[]
                        if(intInputResult4!=-1){//-1代表沒找到，不等於-1代表有找到
                            intInputResultArray[ii]=1;
                        }else{
                            intInputResultArray[ii]=0;
                        }
            }
        goSearch();
    }
    function Search_5(){
            Html_AF_item= Html_AF_input_content ;
            inputValue = document.getElementById("input").value;
        
            for(var ii=1;ii<=AF_length;ii++){
               
                // intInputResult5  縣市別
                    var intInputResult5_content=af[ii][0][1];
                        intInputResult5 = intInputResult5_content.indexOf(inputValue);

                //intInputResultArray[]
                        if(intInputResult5!=-1){//-1代表沒找到，不等於-1代表有找到
                            intInputResultArray[ii]=1;
                        }else{
                            intInputResultArray[ii]=0;
                        }
            }
        goSearch();
    }
    function goSearch(){
                    /*檢核一*/
                    /*如果查詢空值就跳出function*/
                    if(inputValue==""){
                        $('#NullModal').modal('show')
                        return;//跳出function
                    }
        
                    /*檢核二*/
                    /*如果查詢無結果就跳出function*/
                    var SearchTotal=0;
                    for(var ii=1;ii<=AF_length;ii++){
                        if(intInputResultArray[ii]==1){//有查到
                            break;//跳出迴圈
                        }else{//沒查到
                            SearchTotal+=1;   
                        }
                    }
                    if(SearchTotal==AF_length){//所有農會都沒查到
                        $('#ErrorModal').modal('show');
                        document.getElementById("AF_input_content").innerHTML = Html_AF_input_content;//清空
                        document.getElementById("F_record").innerHTML ="";
                        return;//跳出function
                    }
        
        
                    /*匯入農漁會item*/
                    var totle=0; 
                    for(var ii=1;ii<=AF_length;ii++){
                        if(intInputResultArray[ii]==1){
                            totle+=1;
                            Html_AF_item+=     
                                "<button class=\"AF_input_content_item\" value=\""+ii+"\"    id=\""+af[ii][0][0]+"\"    >"+
                                    "<div class=\"AF_input_content_item-Area-1\">"+
                                        "<div class=\"AF_input_content_item-Area-2\">"+
                                        "</div>"+
                                        "<div class=\"AF_input_content_item-Area-3\">"+
                                        "</div>"+
                                        "<div class=\"AF_input_content_item-Area-4\">"+
                                            af[ii][0][0]+af[ii][0][2]+af[ii][0][3]+
                                        "</div>"+
                                    "</div>"+
                                "</button>";
                        }
                    }
                    document.getElementById("AF_input_content").innerHTML =Html_AF_item; 
                    document.getElementById("F_record").innerHTML ="共"+totle+"筆資料";
                    for(var ii=1;ii<=AF_length;ii++){
                        if(intInputResultArray[ii]==1){
                          document.getElementById(af[ii][0][0]).onclick = function(){AFindex=$(this).attr("value");updateAF();ScrollResult();}
                         }
                    }
    }




/**************************************************************************************/
/*******************************************combolbox**********************************/
/**************************************************************************************/
/*當下拉選被選*/
function getSelectMode(){
    /*讀下拉選*/
    var SelectMode = F.SelectMode.value;
                switch (SelectMode) {
                case "0"://input
                    Html_AF_input();
                    break;        
                case "1"://全部
                    Html_AF_item_all();
                    break;
                case "2"://105年度
                    Html_AF_item_custom('5','105');
                    break;
                case "3"://106年度
                    Html_AF_item_custom('5','106');
                    break;
                case "4"://彰化縣
                    Html_AF_item_custom('1','彰化縣');
                    break;
                case "5"://苗栗縣
                    Html_AF_item_custom('1','苗栗縣');
                    break;
                case "6"://台中市
                    Html_AF_item_custom('1','台中市');
                    break;
                case "7"://台南市
                    Html_AF_item_custom('1','台南市');
                    break;
                case "8"://南投縣
                    Html_AF_item_custom('1','南投縣');
                    break;                       
                case "9"://農會
                    Html_AF_item_custom('3','農會');
                    break;                        
                case "10"://漁會
                    Html_AF_item_custom("3","漁會");
                    break;    
                case "11"://雲林縣
                    Html_AF_item_custom("1","雲林縣");
                    break;  
                case "12"://嘉義縣
                    Html_AF_item_custom("1","嘉義縣");
                    break; 
                case "13"://MICR票據-台北總所轄區
                    Html_AF_item_custom("12","1");
                    break;  
                case "14"://MICR票據-台中市分所轄區
                    Html_AF_item_custom("12","2");
                    break;  
                case "15"://MICR票據-高雄市分所轄區
                    Html_AF_item_custom("12","3");
                    break;  
                case "16"://非MICR票據交換單位
                    Html_AF_item_custom("12","4");
                    break;  
                case "17"://未參加交換
                    Html_AF_item_custom("12","5");
                    break;   
                case "18"://新北市
                    Html_AF_item_custom("1","新北市");
                    break;   
                case "19"://花蓮
                    Html_AF_item_custom("1","花蓮縣");
                    break;                           
                case "20"://107年度
                    Html_AF_item_custom('5','107');  
                    break;     
                case "21"://宜蘭
                    Html_AF_item_custom("1","宜蘭縣");
                    break;     
                case "22"://中農
                    Html_AF_item_custom("11","1");
                    break;    
                case "23"://北農
                    Html_AF_item_custom("11","2");
                    break;    
                case "24"://自營
                    Html_AF_item_custom("11","9");
                    break;         
                case "25"://新竹
                    Html_AF_item_custom("1","新竹縣");
                    break;  
                case "26"://台北
                    Html_AF_item_custom("1","台北市");
                    break;                          
                        
            }
    
}





        

/**************************************************************************************/
/*********************************點擊農漁會按鈕*****************************************/
/**************************************************************************************/

            function ScrollResult(){
                $('body,html').animate({scrollTop:585},0600);//0600是速度
            }

            function updateAF(){
            var x = af[AFindex].length; //x==TR要幾個==某農會有幾個單位 
            var e=0;
            var TableContext="";
            
            for(i=1;i<x;i++){//i代表有幾個單位,i=0是全農漁會資訊
                TableContext+="<tr>";
                    for(j=0;j<=4;j++){//j代表有幾筆資料，如農漁會代號	農漁會名稱	通匯代號	電話	地址
                         if(j!=4&&j!=3){
                            TableContext+="<td>";
                            TableContext+=af[AFindex][i][j];
                            TableContext+="</td>";
                        }else if(j==4){//J==4時，地址套用CSS:TableContextAddress(靠左對齊)
                            TableContext+="<td  class=\"  TableContextHyperlinks    \" >";
                            TableContext+="<a  class=\"  TableContextHyperlinksText   \"  target=\"_blank\"  href=\" https://www.google.com.tw/maps?q="+af[AFindex][i][j]+"\">  <span class=\"glyphicon glyphicon-map-marker\" aria-hidden=\"true\"></span> "+af[AFindex][i][j]+"</a>";
                            TableContext+="</td>";
                        }else if(j==3){//J==3時，電話強迫換行
                            TableContext+="<td>";
                            TableContext+= "<div   class=\"  mySelectList_Phone    \" >"+af[AFindex][i][j]+"</div>";
                            TableContext+="</td>";
                        }
                        
                    }
                TableContext+="</tr>";
                e+=1;
                
            }
            
            /**************************************************/
            document.getElementById("AF_Table").innerHTML = 


            "<table id=\"mySelectList\">"+
                    "<tr>"+
                        "<td>"+
                            "單位"+
                        "</td>"+
                        "<td>"+
                            "名稱"+
                        "</td>"+
                        "<td>"+
                            "通匯代號"+
                        "</td>"+
                        "<td>"+
                            "電話"+
                        "</td>"+
                        "<td>"+
                            "地址"+
                        "</td>"+
                    "</tr>"+
               TableContext +
            "</table>";
            /***********************************************/
            document.getElementById("AF_ID_content").innerHTML = af[AFindex][0][0];
            document.getElementById("AF_name_content").innerHTML = "<a target=\"_blank\" id=\"AF_name_content_a\" href=\""+af[AFindex][0][10]+"\">"+af[AFindex][0][1]+af[AFindex][0][2]+af[AFindex][0][3]+"</a>";
            //document.getElementById("AF_address_content").innerHTML = af[AFindex][0][4];
            document.getElementById("AF_onlineDay_content").innerHTML = af[AFindex][0][5]+"年"+af[AFindex][0][6]+"月"+af[AFindex][0][7]+"日";
            if(af[AFindex][0][8]!=""){
                document.getElementById("AF_product_title").innerHTML = "產品：";
            }else{
                document.getElementById("AF_product_title").innerHTML = "";
            }    
                
            document.getElementById("AF_product_content").innerHTML = af[AFindex][0][8];
                
            if(af[AFindex][0][11]=="1"){
                document.getElementById("AF_oldSystem_content").innerHTML = "農漁會中區資訊中心";
            }else if(af[AFindex][0][11]=="2"){
                document.getElementById("AF_oldSystem_content").innerHTML = "北區農會電腦共同利用中心";
            }else if(af[AFindex][0][11]=="9"){
                document.getElementById("AF_oldSystem_content").innerHTML = "自營";
            }else{
                document.getElementById("AF_oldSystem_content").innerHTML = af[AFindex][0][11];
            }        
                
            document.getElementById("AF_check_content").innerHTML = af[AFindex][0][14];
            document.getElementById("AF_areaCode_content").innerHTML = af[AFindex][0][13];
              
           /* if(af[AFindex][0][16]=="1"){
                document.getElementById("AF_switchUnit_content").innerHTML = "農漁會中區資訊中心";
            }else if(af[AFindex][0][11]=="9"){
                document.getElementById("AF_switchUnit_content").innerHTML = "自營";
            }else{
                document.getElementById("AF_switchUnit_content").innerHTML = af[AFindex][0][11];
            }  */
                
            switch(af[AFindex][0][12]) {
                case "1":
                    document.getElementById("AF_switchUnit_content").innerHTML = "MICR票據-台北總所轄區";
                    break;
                case "2":
                    document.getElementById("AF_switchUnit_content").innerHTML = "MICR票據-台中市分所轄區";
                    break;
                case "3":
                    document.getElementById("AF_switchUnit_content").innerHTML = "MICR票據-高雄市分所轄區";
                    break;
                case "4":
                    document.getElementById("AF_switchUnit_content").innerHTML = "非MICR票據交換單位";
                     break;
                case "5":
                    document.getElementById("AF_switchUnit_content").innerHTML = "未參加交換";
                     break;            
                default:
                    document.getElementById("AF_switchUnit_content").innerHTML = af[AFindex][0][12];
            } 
                
                
            document.getElementById("AF_web_content").innerHTML = "<a target=\"_blank\"   class=\"  TableContextHyperlinksText   \"  id=\"AF_web_content_a\"  href=\""+af[AFindex][0][10]+"\">"+"連結"+"</a>";
            document.getElementById("AF_Map").innerHTML ="<iframe id=\"AF_Map_iframe\" src=\""+af[AFindex][0][9]+"\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0\"   allowfullscreen></iframe>";
            

        }
        
