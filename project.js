console.log("Hello");
$(document).ready(function(){

    $surface = $('.surface');
    $car = $('.car');

    //button press event
 var flag=0;
 var totalSeconds = 0;
    document.getElementById("goldenbutton1").onclick = function() {click()};

    document.getElementById("goldenbutton2").onclick = function() {click_2()};

    document.getElementById("goldenbutton3").onclick = function() {click_3()};

    function click_3(){
        document.getElementById("goldist").innerHTML= "Golden Distance : " + totalSeconds*0.618 + " Km";
    }

    function click_2() {
        totalSeconds = 0;
    };

function click() {
   flag++;
  $($surface).toggleClass("moveRight");
  $($car).toggleClass("suspension");
      
    var secondsLabel = document.getElementById("seconds");
    
    setInterval(setTime, 1000);
   
    
    function setTime()
    {
        if(flag%2==1)
        {
        ++totalSeconds;
        secondsLabel.innerHTML = totalSeconds;
    
        }

        else{
            secondsLabel.innerHTML = totalSeconds;
        }
       
    };

    
    

   

}
});

