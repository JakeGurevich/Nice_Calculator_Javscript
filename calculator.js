console.log("working");
const calc = {
  num1: null,
  num2: null,
  result: 0,
  operation: "",
  resultClicked:false,
  operationClicked:false,
};

let output = document.getElementById("I1");
output.innerText = calc.result;

const getClick = (el) => {
  console.log(el.innerText);
  if (!calc.num1) {
    calc.num1 = Number(el.innerText);
  } else {
    calc.num2 = Number(el.innerText);
  }
  if (output.innerText === "0"||calc.resultClicked) {
    output.innerText = "";
  }
  output.innerText += el.innerText;
  calc.resultClicked=false;
};

const clearData = () => {
    calc.num1=null
    calc.num2=null
    calc.operationClicked=false
    calc.operation='0'
  console.log("data cleared");
  output.innerText = calc.result;
};
const getOperationClick = (el) => {
   if(calc.operationClicked){
       calc.num1=calculate(calc.operation,calc.num1,calc.num2)
   }
  const operation = el.innerText;
  console.log(operation);
  calc.operation = operation;
  output.innerText += el.innerText;
  calc.operationClicked=true
};

const getResult = () => {
  output.innerText = calculate(calc.operation, calc.num1, calc.num2);
  console.log(output);
  calc.resultClicked=true;
  calc.num1=null
  calc.num2=null
  calc.operationClicked=false
  calc.operation='0'
};

const calculate = (operation, num1, num2) => {
    console.log(operation)
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
};
