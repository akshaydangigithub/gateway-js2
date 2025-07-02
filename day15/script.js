let input = document.querySelector("#input");
let fromUnit = document.querySelector("#fromUnit");
let toUnit = document.querySelector("#toUnit");
let button = document.querySelector("button");
let ans = document.querySelector("#ans");



button.addEventListener("click", function () {

  let inputValue = input.value
  let fromUnitValue = fromUnit.value
  let toUnitValue = toUnit.value;


  let result;

  
  if(fromUnitValue === "K" && toUnitValue === "C"){
    result = inputValue - 273.15    
    
  } else if(fromUnitValue === "K" && toUnitValue === "F"){

    result = (inputValue - 273.15) * 9/5 + 32

  }
  
  ans.innerHTML = result.toFixed(2) + "°" + toUnitValue
  
  


});
