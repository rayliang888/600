
    //JS請注意code順序，DOM建立>DOM操作
/*********************************************************************/
//宣告與資料處理
/*********************************************************************/      
   
  var totalCost = 0;
  var SelfCost = 0;
  var SubsidyCost = 0;
  var remainder = 0;
  var AccumulatedDepreciation = 0;
  var totalTimes = 0;
  var oldTimes = 0;
  var depreciation = 0;
    
  var totalCost_text = "";
  var SelfCost_text = ""; 
  var SubsidyCost_text = "";
  var remainder_text = "";    
  var totalTimes_text = "";
  var oldTimes_text = "";    
  var depreciation_text = "";   
    
    function myVariable(){
      totalCost_text = "";
      SelfCost_text = ""; 
      SubsidyCost_text = "";
      remainder_text = "";          
      AccumulatedDepreciation_text = "";  
      totalTimes_text = "";
      oldTimes_text = "";     
      depreciation_text = "";      
        
      totalCost = document.getElementById("totalCost").value;
      SelfCost = document.getElementById("SelfCost").value;   
      remainder = document.getElementById("remainder").value;  
      AccumulatedDepreciation = document.getElementById("AccumulatedDepreciation").value;      
      totalTimes = document.getElementById("totalTimes").value;  
      oldTimes = document.getElementById("oldTimes").value; 
      depreciation = document.getElementById("depreciation").value;  
        
      Number(totalCost);    
      Number(SelfCost);    
      Number(remainder);   
      Number(AccumulatedDepreciation);   
      Number(oldTimes);   
      Number(depreciation);   
        
    }
    
     function toFloat2(a){
         var b = Number(a).toFixed(2);
         return b;
     }
    
/*********************************************************************/
//驗證項目
/*********************************************************************/      
    
    function ZeroValue(){
      document.getElementById("totalCost").value = "";
      document.getElementById("SelfCost").value = "";   
      document.getElementById("remainder").value = "";  
      document.getElementById("AccumulatedDepreciation").value = "";      
      document.getElementById("totalTimes").value = "";  
      document.getElementById("oldTimes").value = "";  
      document.getElementById("depreciation").value = "";     
    }   
    
    
    function SubsidyCost_count(){
      SubsidyCost=accSub(totalCost,SelfCost);
      document.getElementById("SubsidyCost").innerHTML=SubsidyCost;   

    }  


    function checkNumber(input,output){
        if(isNaN(input)){
               output+="請輸入數字。"; 
               return output;
        }else{
               return output;
        }
    }

    function checkNull(input,output){
        if(input==""){
             output+="不可輸入空值。";  
             return output;
        }else{
             return output;
        }
    }
    
    function checkZero(input,output){
        if(input===0){
             output+="不可輸入數值零。";  
             return output;
        }else{
             return output;
        }
    }
    
    function checkNegative(input,output){
        if(input<0){
             output+="不可輸入負數。";  
             return output;
        }else{
             return output;
        }
    }
    
    function compare(input,output,message,compare){
        if(input-compare>0){
             output+=message+"。";  
             return output;
        }else{
             return output;
        }
    }
    
    function checkInteger(input,output){
        if(Math.floor(input) != input && input % 1 !== 0){
            return output+="不可輸入小數。";
        }else{
            return output;    
        }
    }
    function checkFloat2(input,output){//是否為小數二位數內
        if(!isNaN(input)){//是數字
            var sp= input.split("."); 
            if(sp[1]!=undefined){//數字切割'.'後，小數點後面的數字若為undefined(沒有值)就代表是整數
                if(sp[1].length>=3){//數字切割'.'後，小數點後面的數字的長度，即為小數是幾位數
                    output+="小數位不可大於二位。";
                    return output;
                }else{
                    return output;
                }
            }else{
                return output;
            }
        }else{
            return output;  
        }    
    } 

/*********************************************************************/
//加減乘除、格式化
/*********************************************************************/ 
//format  
function number_format(number, decimals, dec_point, thousands_sep,roundtag) {
    /*
    * 参数说明：
    * number：要格式化的数字
    * decimals：保留几位小数
    * dec_point：小数点符号
    * thousands_sep：千分位符号
    * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
    * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    roundtag = roundtag || "ceil"; //"ceil","floor","round"
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
 
            var k = Math.pow(10, prec);
            console.log();
 
            return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec*2))).toFixed(prec*2)) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }
 
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}    
    
function fmoney(s, n){
    /*
     * 参数说明：
     * s：要格式化的数字
     * n：保留几位小数
     * */
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
    var l = s.split(".")[0].split("").reverse(),
        r = s.split(".")[1];
    t = "";
    for (i = 0; i < l.length; i++) {
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
    }
    return t.split("").reverse().join("") + "." + r;
}
    
function fmoney2(a){
    var b = number_format(a,2,'.',',',"round");
    return b;
}
    

 // 兩個浮點數相減
    function accSub(num1,num2){
       var r1,r2,m;
       try{
           r1 = num1.toString().split('.')[1].length;
       }catch(e){
           r1 = 0;
       }
       try{
           r2=num2.toString().split(".")[1].length;
       }catch(e){
           r2 = 0;
       }
       m=Math.pow(10,Math.max(r1,r2));
       n=(r1>=r2)?r1:r2;
       return (Math.round(num1*m-num2*m)/m).toFixed(n);
    }    
    
    
 // 兩數相除
    function accDiv(num1,num2){
       var t1,t2,r1,r2;
       try{
           t1 = num1.toString().split('.')[1].length;
       }catch(e){
           t1 = 0;
       }
       try{
           t2=num2.toString().split(".")[1].length;
       }catch(e){
           t2=0;
       }
       r1=Number(num1.toString().replace(".",""));
       r2=Number(num2.toString().replace(".",""));
       return (r1/r2)*Math.pow(10,t2-t1);
    }
/*
    function accMul(num1,num2){
           var m=0,s1=num1.toString(),s2=num2.toString(); 
        try{m+=s1.split(".")[1].length}catch(e){};
        try{m+=s2.split(".")[1].length}catch(e){};
        return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
    }
        
*/
 //兩個浮點數求和
    function accAdd(num1,num2){
       var r1,r2,m;
       try{
           r1 = num1.toString().split('.')[1].length;
       }catch(e){
           r1 = 0;
       }
       try{
           r2=num2.toString().split(".")[1].length;
       }catch(e){
           r2=0;
       }
       m=Math.pow(10,Math.max(r1,r2));
       // return (num1*m+num2*m)/m;
       return Math.round(num1*m+num2*m)/m;
    }    
    
/*********************************************************************/
//click
/*********************************************************************/      
//output()
    function output(){
        output1();
        output2();
    }
 
    
//execute    
  x=0;
  countSecond();
  function countSecond(){
      
      myVariable();
      
      //總金額totalCost
      totalCost_text = checkNumber(totalCost,totalCost_text);
      totalCost_text = checkNull(totalCost,totalCost_text);
      totalCost_text = checkZero(totalCost,totalCost_text);
      totalCost_text = checkNegative(totalCost,totalCost_text);   
      totalCost_text = checkFloat2(totalCost,totalCost_text);   
      
      //自行出資SelfCost
      SelfCost_text = checkNull(SelfCost,SelfCost_text);
      SelfCost_text = checkNumber(SelfCost,SelfCost_text);
      SelfCost_text = compare(SelfCost,SelfCost_text,"(自行出資金額)不得超過(總金額)",totalCost);
      SelfCost_text = checkNegative(SelfCost,SelfCost_text);
      SelfCost_text = checkFloat2(SelfCost,SelfCost_text); 
      
      //輔助金額SubsidyCost
      SubsidyCost_count();
      
      //殘值remainder
      remainder_text = checkNull(remainder,remainder_text);
      remainder_text = checkNumber(remainder,remainder_text);
      remainder_text = checkNegative(remainder,remainder_text);
      remainder_text = compare(remainder,remainder_text,"(殘值)不得超過(自行出資金額-累計折舊)",(SelfCost-AccumulatedDepreciation));
      remainder_text = checkFloat2(remainder,remainder_text);
      
      //累計折舊AccumulatedDepreciation
      AccumulatedDepreciation_text = checkNull(AccumulatedDepreciation,AccumulatedDepreciation_text);
      AccumulatedDepreciation_text = checkNumber(AccumulatedDepreciation,AccumulatedDepreciation_text);
      AccumulatedDepreciation_text = checkNegative(AccumulatedDepreciation,AccumulatedDepreciation_text);
      AccumulatedDepreciation_text = compare(AccumulatedDepreciation,AccumulatedDepreciation_text,"(累計折舊)不得超過(自行出資金額減殘值)",(SelfCost-remainder));
      AccumulatedDepreciation_text = checkFloat2(AccumulatedDepreciation,AccumulatedDepreciation_text);
      
      //每月折舊金額depreciation
      depreciation_text = checkNumber(depreciation,depreciation_text);
      depreciation_text = checkNull(depreciation,depreciation_text);
      depreciation_text = checkZero(depreciation,depreciation_text);
      depreciation_text = checkNegative(depreciation,depreciation_text);   
      depreciation_text = checkFloat2(depreciation,depreciation_text);  
      
      //攤提總次數totalTimes
      totalTimes_text = checkNumber(totalTimes,totalTimes_text);
      totalTimes_text = checkNegative(totalTimes,totalTimes_text);
      totalTimes_text = checkNull(totalTimes,totalTimes_text);
      totalTimes_text = checkZero(totalTimes,totalTimes_text);
      totalTimes_text = checkInteger(totalTimes,totalTimes_text);
     
      //已攤提次數oldTimes
      oldTimes_text = checkNull(oldTimes,oldTimes_text);
      oldTimes_text = checkNumber(oldTimes,oldTimes_text);
      oldTimes_text = checkNegative(oldTimes,oldTimes_text);      
      oldTimes_text = compare(oldTimes,oldTimes_text,"(已攤提次數)不得大於(攤提總次數)",totalTimes);
      oldTimes_text = checkInteger(oldTimes,oldTimes_text,"(已攤提次數)不得大於(攤提總次數)",totalTimes);
             
      
      //輸出錯誤
      document.getElementById("totalCost_check").innerHTML = totalCost_text;
      document.getElementById("SelfCost_check").innerHTML = SelfCost_text;
      document.getElementById("remainder_check").innerHTML = remainder_text;
      document.getElementById("AccumulatedDepreciation_check").innerHTML = AccumulatedDepreciation_text;
      document.getElementById("totalTimes_check").innerHTML = totalTimes_text;
      document.getElementById("oldTimes_check").innerHTML = oldTimes_text;
      document.getElementById("depreciation_check").innerHTML = depreciation_text;
     
      //run
      x=x+1;
      setTimeout("countSecond()",100);
  }
  
    
/*********************************************************************/
//output1
/*********************************************************************/    
    output1();
    function output1(){
        
        if(parseInt(totalTimes)==parseInt(oldTimes)){
            document.getElementById("myOutput1").innerHTML = "已攤提次數與攤提總次數一樣，不需檢驗";  
        }else if(parseInt(totalTimes)<parseInt(oldTimes)){ 
            document.getElementById("myOutput1").innerHTML = "次數不正確:"+parseInt(totalTimes)+"不可小於"+parseInt(oldTimes);  
        }else{     
            var myOutput1Content = "";
           // //table頭
            myOutput1Content +=    "<table class=\"table_output1\">";
            myOutput1Content +=        "<tr>";
            myOutput1Content +=            "<td>總攤提次數</td>";
            myOutput1Content +=            "<td>已攤提次數</td>";
            myOutput1Content +=            "<td>折舊出帳金額</td>";
            myOutput1Content +=            "<td>自行出資金額</td>";
            myOutput1Content +=            "<td>累計折舊</td>";
            myOutput1Content +=            "<td >殘值</td>";
            myOutput1Content +=        "</tr>";

            //第0期(填寫之參數)    
                myOutput1Content +=        "<tr>";
                myOutput1Content +=            "<td>第"+totalTimes+"期</td>";
                myOutput1Content +=            "<td>第"+oldTimes+"期</td>";
                myOutput1Content +=            "<td></td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(SelfCost)+"</td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(AccumulatedDepreciation)+"</td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(remainder)+"</td>";
                myOutput1Content +=        "</tr>";    

            //每期
            var j = AccumulatedDepreciation;//累計折舊
            for(var i =1+parseInt(oldTimes);i<totalTimes;i++){

                j = accAdd(j,depreciation);//累計折舊+每月攤提

                myOutput1Content +=        "<tr>";
                myOutput1Content +=            "<td>第"+totalTimes+"期</td>";
                myOutput1Content +=            "<td>第"+i+"期</td>";
                myOutput1Content +=            "<td class=\"text_dollar \">"+fmoney2(depreciation)+"</td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(SelfCost)+"</td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(j)+"</td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(remainder)+"</td>";
                myOutput1Content +=        "</tr>";

            }

            //最後一期
                var c = accSub(accSub(SelfCost,remainder),j);//最後一期折舊金額
                j = accAdd(j,c);//最後一期累計折舊金額

                myOutput1Content +=        "<tr>";
                myOutput1Content +=            "<td>第"+totalTimes+"期</td>";
                myOutput1Content +=            "<td>第"+totalTimes+"期</td>";
                myOutput1Content +=            "<td class=\"output2Color text_dollar\">"+fmoney2(c)+"</td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(SelfCost)+"</td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(j)+"</td>";
                myOutput1Content +=            "<td class=\"text_dollar\">"+fmoney2(remainder)+"</td>";
                myOutput1Content +=        "</tr>";
            //table尾
            myOutput1Content +=    "</table>";  

            document.getElementById("myOutput1").innerHTML = myOutput1Content;        

        }
    }
    
/*********************************************************************/
//output2
/*********************************************************************/   


    
    output2();
    function output2(){
        //未攤提次數=(自行出資-累折-殘值)/每月攤提金額
         CustomNewTimes  = accDiv(accSub(accSub(SelfCost,remainder),AccumulatedDepreciation),depreciation);

        //已攤提次數=總攤提次數-未攤提次數(四捨五入) ， 此值不可負數
         CustomOldTimes = parseInt(totalTimes)-Math.round(CustomNewTimes);
           
        
        if(CustomOldTimes<0){
            document.getElementById("myOutput2").innerHTML = "請提高每月攤提金額，或是增加攤提總次數，或是減少已攤提次數";  
        }else{
                    var myOutput2Content = "";
                    //table頭
                    myOutput2Content +=    "<table class=\"table_output1\">";
                    myOutput2Content +=        "<tr>";
                    myOutput2Content +=            "<td>總攤提次數</td>";
                    myOutput2Content +=            "<td>已攤提次數</td>";
                    myOutput2Content +=            "<td class=\"text_dollar\">折舊出帳金額</td>";
                    myOutput2Content +=            "<td class=\"text_dollar\">自行出資金額</td>";
                    myOutput2Content +=            "<td class=\"text_dollar\">累計折舊</td>";
                    myOutput2Content +=            "<td class=\"text_dollar\">殘值</td>";
                    myOutput2Content +=        "</tr>";

                    //第0期(填寫之參數)    
                        myOutput2Content +=        "<tr>";
                        myOutput2Content +=            "<td>第"+totalTimes+"期</td>";
                        myOutput2Content +=            "<td>第"+CustomOldTimes+"期</td>";
                        myOutput2Content +=            "<td></td>";
                        myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(SelfCost)+"</td>";
                        myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(AccumulatedDepreciation)+"</td>";
                        myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(remainder)+"</td>";
                        myOutput2Content +=        "</tr>";    

                    //每期
                    var j = AccumulatedDepreciation;//累計折舊
                    for(var i =1+parseInt(CustomOldTimes);i<totalTimes;i++){

                        j = accAdd(j,depreciation);//累計折舊+每月攤提

                        myOutput2Content +=        "<tr>";
                        myOutput2Content +=            "<td>第"+totalTimes+"期</td>";
                        myOutput2Content +=            "<td>第"+i+"期</td>";
                        myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(depreciation)+"</td>";
                        myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(SelfCost)+"</td>";
                        myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(j)+"</td>";
                        myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(remainder)+"</td>";
                        myOutput2Content +=        "</tr>";

                }

                //最後一期
                    var c = accSub(accSub(SelfCost,remainder),j);//最後一期折舊金額
                    j = accAdd(j,c);//最後一期累計折舊金額

                    myOutput2Content +=        "<tr>";
                    myOutput2Content +=            "<td>第"+totalTimes+"期</td>";
                    myOutput2Content +=            "<td>第"+totalTimes+"期</td>";
                    myOutput2Content +=            "<td class=\"text_dollar output2Color\">"+fmoney2(c)+"</td>";
                    myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(SelfCost)+"</td>";
                    myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(j)+"</td>";
                    myOutput2Content +=            "<td class=\"text_dollar\">"+fmoney2(remainder)+"</td>";
                    myOutput2Content +=        "</tr>";

                //table尾
                myOutput2Content +=    "</table>";  

                document.getElementById("myOutput2").innerHTML = myOutput2Content;        
            
        }
        
        
    }