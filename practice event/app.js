function getValueInput(num) {
    let calc = document.getElementById("calc")
    calc.value+=num
}
function clearDisplay() {
    let calc = document.getElementById("calc")
    calc.value = "";
 
}

function deleteDisplay() {
    let calc = document.getElementById("calc")
    let currentValue = calc.value
    calc.value =currentValue.slice(0, -1);    
}


function equalsDisplay() {
    let calc = document.getElementById("calc")
    let currentValue = calc.value
   calc.value=eval(currentValue)
}