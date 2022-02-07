var iniciar = document.getElementById("iniciar-jogo");

iniciar.addEventListener('click', function() {
    //sorteiaPalavra();
    //adicionaHtml();

});

var adicionarNovaPalavra = document.getElementById("nova-palavra");

adicionarNovaPalavra.addEventListener("click",function () {
    novoTexto = document.querySelector("#input-nova-palavra");
    listaDePalavras.push(novoTexto.value);
    novoTexto.value = "";
});

var palavraCerta = document.querySelector("#palavra-certa");

listaDePalavras = ["BODE","BALUGA","GOLFINHO","MARIPOSA","CAMUNDONGO","JARACAMBEVA","ENFERRUJADINHO"];

var palavraSorteada = sorteiaPalavra();
var letrasCorretas;
var letrasIncorretas;
var erro;

function adicionaLetra(pai,letra) {
    var letra = document.createElement('div');
    pai.appendChild(letra);
    letra.setAttribute("class","valor");
    return letra;
}
function sorteiaPalavra (){
    var palavra = listaDePalavras[Math.floor(Math.random()*listaDePalavras.length)];
    return palavra;
}
function adicionaHtml() {
    for (let i = 0; i < palavraSorteada.length; i++) {
        adicionaLetra(palavraCerta, palavraSorteada);
        letrasCorretas = palavraSorteada.split('');
    }
    return letrasCorretas;
}
sorteiaPalavra();
adicionaHtml();
console.log(letrasCorretas)

function validaLetra() {
    
}