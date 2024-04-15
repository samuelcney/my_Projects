const password = document.getElementById("passwordInput")
const confirm = document.getElementById("passwordConfirm")
const button = document.getElementById("signup")
const inputs = document.querySelectorAll('input')
const divArea = document.getElementById('area')
const email = document.getElementById('email')
        
const defaultHTML = divArea.innerHTML
const tituloPag = document.getElementById('pagTitle')

let inv = false

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

button.addEventListener("click",() =>{
    let inputVazio = false
    let confirmacaoInvalida = false

    inputs.forEach(input => {
    if(input.value.trim() === ''){
        inputVazio = true  
    }
}) 
    if(inputVazio === true){
        alert('Preencha todos os campos!')
    }

    if (!validarEmail(email.value)) {
        alert('Por favor, insira um endereço de e-mail válido!');
        return;
    }

    if(password.value.length >= 8){
        if(password.value != confirm.value && inputVazio === false){
            confirmacaoInvalida = true
            alert("A confirmação de senha deve coincidir a senha.")
        }  
    }else{
        confirmacaoInvalida = true
        alert("A senha deve ter 8 dígitos ou mais!!!")
    }
    

    if(inputVazio === false && confirmacaoInvalida === false){
        divArea.innerHTML = `Carregando...`
        setTimeout(function() {
            divArea.innerHTML = 
            `<h1 class="title">Cadastro Feito Amigo!</h1>
            <img src="imgs/gato-joia.gif" class="imagem"/>`
    }, 1000)
}})

function loading(){
    divArea.innerHTML = `<img src="imgs/carregando.gif" class="imagem"/>`
}

function loginArea(){
    tituloPag.innerHTML = "Login"
    divArea.innerHTML = 
    `<form method="get">
    <div id="insert">
    <h1 class="title">Bem vindo de volta!</h1>
    <input type="email" placeholder="Email" name="email"/>
    <input type="password" id="passwordInput" placeholder="Senha" name="senha"/>
    </div>
    <a href="#" id="login" onclick="switchLoginSign()">Não possui uma conta? Clique aqui para fazer o cadastro!</a>
    <button type="submit" id="signup" name="submit">Login</button>
    </form>`
}

function loginEvent() {
    const button = document.getElementById("signup");
    const inputs = document.querySelectorAll('input');

    button.addEventListener("click", () => {
        let inputVazio = false;
    
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                inputVazio = true;
            }
        });

        if (inputVazio === true) {
            alert('Preencha todos os campos!');
        }

    
        if (inputVazio === false) {
            loading();
            setTimeout(function () {
                divArea.innerHTML =
                    `<h1 class="title">Login Feito Amigo!</h1>
                    <img src="imgs/gato-joia.gif" class="imagem"/>`;
            }, 1000);
        }
    });
}

function signEvent(){
    const password = document.getElementById("passwordInput")
    const confirm = document.getElementById("passwordConfirm")
    const button = document.getElementById("signup")
    const inputs = document.querySelectorAll('input')
    const email = document.getElementById('email')

    button.addEventListener("click",() =>{
        let inputVazio = false
        let confirmacaoInvalida = false
    
        inputs.forEach(input => {
        if(input.value.trim() === ''){
            inputVazio = true  
        }
    }) 
        if(inputVazio === true){
            alert('Preencha todos os campos!')
            return;
        }

        if (!validarEmail(email.value)) {
            alert('Por favor, insira um endereço de e-mail válido!');
            return;
        }
    
        if(password.value != confirm.value && inputVazio === false){
            confirmacaoInvalida = true
            alert("A confirmação de senha deve coincidir a senha.")
        }
    
        if(inputVazio === false && confirmacaoInvalida === false){
            loading()
            setTimeout(function() {
                divArea.innerHTML = 
                `<h1 id="title">Cadastro Feito Amigo!</h1>
                <img src="imgs/gato-joia.gif" class="imagem"/>`
        }, 1000)
    }})
}

function switchLoginSign(){
    inv = !inv
    if(inv){
        loading()
        setTimeout(function() {
            loginArea()
            loginEvent()
        }, 1000);
    }
    else{
        loading()
        setTimeout(function() {
        tituloPag.innerHTML = "Cadastro"
        divArea.innerHTML = defaultHTML
        signEvent()
    }, 1000)
}}

