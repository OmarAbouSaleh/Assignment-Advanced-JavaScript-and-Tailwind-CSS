
//Distance function
function distanceConversion() {
  var input = document.getElementById("input").value;
  var select = document.getElementById("select").value;
  var resultElement = document.getElementById("result");
  var result = [];

  var arr = input.split(",");

  if (select == "Kilometers to Miles") {
    for (var value of arr) {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = (numValue * 0.621371).toFixed(2);
        result.push(answer);
      }
    }
  } else if (select == "Miles to Kilometers") {
    for (var value of arr) {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = (numValue / 0.621371).toFixed(2);
        result.push(answer);
      }
    }
  }

  resultElement.value = result.join(", ");
}



// Temperature function
function temperatureConversion() {
  var input = document.getElementById("tempInput").value;
  var select = document.getElementById("tempSelect").value;
  var resultElement = document.getElementById("tempResult");
  var result = [];

  var arr = input.split(",");

  if (select == "Celsius to Fahrenheit") {
    arr.forEach(value => {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = ((numValue * 9/5) + 32).toFixed(2);
        result.push(answer);
      }
    });
  } else if (select == "Fahrenheit to Celsius") {
    arr.forEach(value => {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = ((numValue - 32) * 5/9).toFixed(2);
        result.push(answer);
      }
    });
  }

  resultElement.value = result.join(", ");
}


// Weight function
function weightConversion() {
  var input = document.getElementById("weightInput").value;
  var select = document.getElementById("weightSelect").value;
  var resultElement = document.getElementById("weightResult");
  var result = [];

  var arr = input.split(",");

  if (select == "Pounds to Kilograms") {
    arr.forEach(value => {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = (numValue * 0.453592).toFixed(2);
        result.push(answer);
      }
    });
  } else if (select == "Kilograms to Pounds") {
    arr.forEach(value => {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = (numValue / 0.453592).toFixed(2);
        result.push(answer);
      }
    });
  }

  resultElement.value = result.join(", ");
}