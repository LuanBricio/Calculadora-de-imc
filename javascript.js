

function calcularimc(){

    function arredondar(n) {
        return (Math.round(n * 100) / 100).toFixed(2);
    }

    var altura = document.getElementById("altura").value / 100;
    var peso = document.getElementById("peso").value;
    console.log(altura);
    console.log(peso);

    var imc = peso / altura**2;
    document.getElementById("resultado").innerText='Seu imc é:'+ ' ' + arredondar(imc);
}



