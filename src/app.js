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
        result.push(`${answer}Mi`);
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
        result.push(`${answer}Km`);
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

  console.log(input);
  console.log(select);


  var arr = input.split(",");

  if (select == "Celsius to Fahrenheit") {
    for (var value of arr) {
      var numValue = parseFloat(value);
      console.log(numValue);
      if (!isNaN(numValue)) {
        var answer = ((numValue * 9 / 5) + 32).toFixed(2);
        result.push(`${answer}\u00B0F`);

        console.log(result);
      }
      else{
        result.push("Invalid")
        console.log(result);
      }
    }
  } else if (select == "Fahrenheit to Celsius") {
    for (var value of arr) {
      var numValue = parseFloat(value);

      console.log(numValue);
      if (!isNaN(numValue)) {
        var answer = ((numValue - 32) * 5 / 9).toFixed(2);
        result.push(`${answer}\u00B0C`);
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
          result.push(`${answer}Lbs`);
        }
        else{
          result.push("Invalid")
        }
      }
    } else if (select == "Pounds to Kilograms") {
      for (var value of arr) {
        var numValue = parseFloat(value);
        if (!isNaN(numValue)) {
          var answer = ((numValue / 2.205).toFixed(2));
          result.push(`${answer}Kg`);
        }
        else{
          result.push("Invalid")
        }
      }
    }
  resultElement.value = result.join(", ");
}