var display=document.getElementById("clock");
function clock(){
    var date = new Date();
    var [h, m, s] = [date.getHours(), date.getMinutes(), date.getSeconds()]; 
    var at="AM";
   if(h>12&&m>59&&s>59)
   {
    h=h-12;
    at="PM";
   }
    h=(h<10)? "0"+h:h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var result=h+":"+m+":"+s+" "+at;
    display.innerHTML=result;
  setInterval(clock,1000);
}
clock();
