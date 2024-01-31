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
