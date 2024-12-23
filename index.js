let display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");
const sqrtBtn = document.querySelector('input[value="&#8730"]');
const expBtn = document.querySelector('input[value="e"]');
const sqrBtn = document.querySelector('input[value="x²"]');
const tanBtn = document.querySelector('input[value="Tan"');
const sinBtn = document.querySelector('input[value="Sin"');
const cosBtn = document.querySelector('input[value="Cos"');
const percentageBtn = document.querySelector('input[value="%"');
const clearBtn = document.querySelector('input[value="C"]');
const onOffBtn = document.querySelector('input[value="ON"]');
const backSpaceBtn = document.querySelector('input[value="←"]');
const evalBtn = document.querySelector('input[value="="]');
        
        


let calculatorOn = true;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn === onOffBtn){
            toggleCalculator();
        }
        else if (btn === sqrtBtn){
            squareRoot();
        } 
        else if (btn === sinBtn) {
            sin();
        }
        else if (btn === tanBtn){
            tan();
        }
        else if (btn === cosBtn){
            cos();
        }
        else if (btn === sqrBtn){
            square();
        }
        else if (btn === expBtn){
            exponential();
        }
        else if (btn === clearBtn){
            allClear();
        } 
        else if (btn === backSpaceBtn){
            backSpace();
        } 
        else if (btn === evalBtn){
            evaluate();
        }
        else{
            updateValue(btn.value);
        }  
    })
});

function toggleCalculator() {
    if (calculatorOn) {
        display.value = "";
        calculatorOn = false;
        onOffBtn.value = "ON";
    } 
    else {
        display.value = "0";
        calculatorOn = true;
        onOffBtn.value = "OFF";
    }
}

function backSpace() {
    str = display.value.slice(0, -1);
    display.value = str;
}

function allClear() {
    display.value = "0";
}

function evaluate() {
    let result = eval(display.value);
    display.value = result;
}


function updateValue(value) {
    display.value += value;
}

function squareRoot() {
    if (display.value > 0 ){
        display.value = Math.sqrt(display.value);
    } else {
        display.value = "syntax error";
    }
}

function sin() {
    display.value = Math.sin(display.value * Math.PI/180);
}

function tan() {
    display.value = Math.tan(display.value * Math.PI/180);
}

function cos() {
    display.value = Math.cos(display.value * Math.PI/180);
}

function exponential () {
    display.value = Math.exp(display.value);
}

function square() {
    display.value = display.value*display.value;
}



