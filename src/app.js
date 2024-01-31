<<<<<<< Updated upstream
=======

function distanceConversion(){
  var input = parseFloat(document.getElementById("input").value);
  var select = document.getElementById("select").value;
  var resultElement = document.getElementById("result");

  if(!isNaN(input))
  {
    if(select == "Kilometers to Miles"){
      result = input * 0.621371;
    }
    else if(select == "Miles to Kilometers"){
      result = input / 0.621371;
    }}
  else{
    result = "please enter valid input";
  }
  
  resultElement.value = result.toFixed(2);
}
>>>>>>> Stashed changes
