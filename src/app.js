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
      else{
        result.push("Invalid")
      }
    }
  } else if (select == "Miles to Kilometers") {
    for (var value of arr) {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = (numValue / 0.621371).toFixed(2);
        result.push(answer);
      }
      else{
        result.push("Invalid")
      }
    }
  }
  resultElement.value = result.join(", ");
}

function tempConversion() {
  var input = document.getElementById("input").value;
  var select = document.getElementById("select").value;
  var resultElement = document.getElementById("result");
  var result = [];

  var arr = input.split(",");

  if (select == "Celcius to Fahrenheit") {
    for (var value of arr) {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = ((numValue * 9 / 5) + 32).toFixed(2);
        result.push(answer);
      }
      else{
        result.push("Invalid")
      }
    }
  } else if (select == "Fahrenheit to Celcius") {
    for (var value of arr) {
      var numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        var answer = ((numValue - 32) * 5 / 9).toFixed(2);
        result.push(answer);
      }
      else{
        result.push("Invalid")
      }
    }
  }
  resultElement.value = result.join(", ");
}

function weightConversion() {

  var input = document.getElementById("input").value;
  var select = document.getElementById("select").value;
  var resultElement = document.getElementById("result");
  var result = [];

  var arr = input.split(",");

  if (select == "Kilograms to Pounds")
    for (var value of arr) {
      {
        var numValue = parseFloat(value);
        if (!isNaN(numValue)) {
          var answer = ((numValue * 2.205).toFixed(2));
          result.push(answer);
        }
        else{
          result.push("Invalid")
        }
      }
    } else if (select == "Pounds to Kilograms") {
      for (var value of arr) {
        var numValue = parseFloat(value);
        if (!isNaN(numValue)) {
          var answer = ((numValue * 2.205).toFixed(2));
          result.push(answer);
        }
        else{
          result.push("Invalid")
        }
      }
    }
  resultElement.value = result.join(", ");
}