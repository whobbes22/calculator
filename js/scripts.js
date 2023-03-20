function add(number1, number2) {
  return number1 + number2;
}

function sub(num1,num2){
  return num1 - num2;
}
function multi(num1,num2) {
  return num1 * num2;
}

function divide(num1,num2){
  return num1 / num2;
}


//ui
const num1 = parseInt(prompt("num1?"));
const num2 = parseInt(prompt("num2?"));
window.alert("adding numbers... " + add(num1,num2)+" -- Subtracting numbers... " + sub(num1,num2)+" -- Multiplying numbers... " + multi(num1,num2) +" -- Dividing numbers... " + divide(num1,num2));