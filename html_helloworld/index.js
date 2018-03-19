function calculate() {
  //console.log("calculate");
  let number = parseInt(document.getElementById("number").value);
  let number2 = parseInt(document.getElementById("number2").value);
  let sumElement = document.getElementById("sum");
  if (isNaN(number)) {
    //console.log("not a number");
    sumElement.innerHTML = "That's not a number";
    return false;
  }
  if (isNaN(number2)) {
    //console.log("not a number");
    sumElement.innerHTML = "That's not a number";
    return false;
  }
  let sum = number + number2;
  sumElement.innerHTML = `The sum of ${number} + ${number2} = ${sum}`;
  return false;
}

