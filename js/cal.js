function calculate(p,q,r)
{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");
    result.innerHTML = "The interest is " + (p*n*r/100);
}


      
$(document).ready(function(){
    $("#button").click(function(){
  $("#result").empty();
 
    });
});
