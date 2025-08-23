document.body.style.backgroundColor="#ccffcc";

function datetimeshow(){
var datetime=new Date();

var year=datetime.getFullYear();
var month=datetime.getMonth()+1;
var day=datetime.getDate();
var hour=datetime.getHours();
var minute=datetime.getMinutes();

var datetimeview=year+"年"+month+"月"+day+"日"+hour+"時"+minute+"分";

var object=document.getElementById("datetime");
object.innerText=datetimeview;
}

var i=1;
function addForm(){
    var input_data=document.createElement('input');
    input_data.type='text';
    input_data.id='inputform_'+i;
    input_data.placeholder='フォーム-'+i;
    var parent=document.getElementById('form_area');
    parent.appendChild(input_data);

    var button_data=document.createElement('button');
    button_data.id=i;
    button_data.onclick=function(){deleteBtn(this);}
    button_data.innerHTML='削除';
    var input_area=document.getElementById(input_data.id);
    parent.appendChild(button_data);


    i++;
}

function deleteBtn(target){
    var target_id=target.id;
    var parent=document.getElementById('form_area');
    var ipt_id=document.getElementById('inputform_'+ target_id);
    var tgt_id=document.getElementById(target_id);
    parent.removeChild(ipt_id);
    parent.removeChild(tgt_id);
}

'use strict'
{
const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
btn.textContent='今日もお疲れ様！';
})
}

window.onload=function(){
    var $count=getCookie('sampleNumberofvisits');
    if (!$count){
        setCookie('sampleNumberofvisits',1,1);
    } else {
        setCookie('sampleNumberofvisits',++$count,1);
    }
    displayCookie('sampleNumberofvisits');
}

function setCookie($cookieName, $cookieValue, $days){
    var $dateObject=new Date();
    $dateObject.setTime($dateObject.getTime()+($days*24*60*60*1000));
    var $expires="expires="+$dateObject.toGMTString();
    document.cookie=$cookieName+"="+$cookieValue+"; "+$expires;
}

function getCookie($cookieName){
    var $cookies=document.cookie.split(';');
    for(var $i=0; $i<$cookies.length; $i++){
        var $cookie=$cookies[$i].trim().split('=');
        if ($cookie[0]==$cookieName){
            return $cookie[1];
        }
    }
    return"";
}

function displayCookie($cookieName){
    var $cookieValue=getCookie($cookieName);
    document.getElementById('sampleOutput').innerHTML=$cookieValue;
}