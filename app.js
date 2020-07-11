
var hr = 0;
 var min = 0 ;
 var sec = 0 ;
  
 var hrheading = document.getElementById("hr");
 var minheading = document.getElementById("min");
 var secheading = document.getElementById("sec");
 var interval;
 function timer(){
     sec ++
     secheading.innerHTML= sec;
     if (sec>=60){
         min++
         minheading.innerHTML = min
         sec = 0;

     }else if (min >= 60){
         hr++
         hrheading.innerHTML = hr
         min = 0;

     }

 }
 var strbtn = document.getElementById("startBtn");

 function start(){
    interval = setInterval(timer,1000);
    strbtn.setAttribute("disabled","");
    strbtn.style.pointerEvents ="none";
    
}
 
 function stop(){
     clearInterval(interval);
     strbtn.removeAttribute("disabled","");
    strbtn.style.pointerEvents ="visible";

 }
 function reset(){
     min = 0;
     sec = 0 ;
     hr = 0;
     minheading.innerHTML = min
     secheading.innerHTML = sec
     hrheading.innerHTML = hr
     stop()
    
 }

 
 

