function time(){
var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
var dn="am";
if(h==12)
dn="pm";
if(h==0){
    h=12;

}else if(h>12){
    h=h-12;
    dn="pm"
}else{
    h=h;
}
h=(h<10)?"0"+h:h;
m=(m<10)?"0"+m:m;
s=(s<10)?"0"+s:s;
document.getElementById("digitalclock").innerHTML=h+":"+m+":"+s+" "+dn;
setTimeout(time,1000);}
time();