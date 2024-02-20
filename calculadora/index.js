
var display = document.getElementById('display');

var power = document.getElementById('powerButton');

var calculadoraOff = true;

var buttons = document.querySelectorAll('button');

buttons.forEach(function(button){
    button.disabled = calculadoraOff;
})

function powerB(){
    calculadoraOff = !calculadoraOff;
    
    buttons.forEach(function(button){
        button.disabled = calculadoraOff;
    })

    if (calculadoraOff) {
        power.style.filter = "none";
        power.style.transform = "rotate(-360deg)";
        power.style.transition = "1s";
        clearDisplay();
        
        display.value = "Até mais!";
        display.style.fontSize = "25px";
        display.style.transition = "1s";
    
        setTimeout(function () {
            display.value = '';
            display.style.fontSize = "35px";
        }, 1500);
    } else {
        power.style.filter = "drop-shadow(1px 1px 3px lightblue)";
        power.style.transform = "rotate(360deg)";
        power.style.transition = "1s";
    
        display.value = "Olá, bem vindo!";
        display.style.fontSize = "25px";
        display.style.transition = "1s";
    
        setTimeout(function () {
            display.value = '';
            display.style.fontSize = "35px";
        }, 1500);
    }

}

function exibirDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function calcularResultado() { 
    try{
    var result = math.evaluate(display.value);

    display.value = result;
    }
    catch(error){
        display.value = 'Erro!';
        setTimeout(function(){
        display.value = '';
        },1500)
    }
} 