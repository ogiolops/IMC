var peso;
var altura;
var imc;
var resultado;

function calcular(){
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso/(altura * altura);

    if (imc < 17) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + "<h3> Cuidado, Voce esta muito abaixo do peso.</h3>";
        document.getElementById('peso').value = "";
        document.getElementById('altura').value = "";
        return false;
    }else if (imc > 17 && imc < 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + "<h3>Voce esta abaixo do peso.</h3>";
        document.getElementById('peso').value = "";
        document.getElementById('altura').value = "";
        return false;  
    }else if (imc > 18.05 && imc < 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + "<h3>O seu peso está normal!</h3>";
        document.getElementById('peso').value = "";
        document.getElementById('altura').value = "";
        return false; 
    }else if (imc > 25 && imc < 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + "<h3>Atenção! Voce esta acima do peso!</h3>";
        document.getElementById('peso').value = "";
        document.getElementById('altura').value = "";
        return false;
    }else{
        return false;
    }


}