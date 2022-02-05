var iniciar = document.getElementById("iniciar-jogo");

iniciar.addEventListener('click', function() {
    sorteiaPalavra();
    desenhaTracinhos();
});

var adicionarNovaPalavra = document.getElementById("nova-palavra");

adicionarNovaPalavra.addEventListener("click",function () {
    novoTexto = document.querySelector("#input-nova-palavra");
    listaDePalavras.push(novoTexto.value);
    novoTexto.value = "";
});

var adicionarSegredo = document.querySelector("#palavra-sorteada");

listaDePalavras = ["baleia","oraclo","paralelepipedo"];

function sorteiaPalavra (){
    var palavraEscolida = listaDePalavras[Math.floor(Math.random()*listaDePalavras.length)];
    return palavraEscolida
}
function desenhaTracinhos() {
    var palavraSorteada = sorteiaPalavra();
    for (let i = 0; i < palavraSorteada.length; i++) {
        tracinhos(i);
    }
}

var palavraSorteada = sorteiaPalavra();
var letrasCorretas = palavraSorteada.split("");
var letrasIncorretas = [];

console.log(letrasCorretas);

function adicionaJogo() {
    var li = document.createElement('li');
    palavraJogo = document.createTextNode(palavraSorteada);
    li.appendChild(palavraJogo);
    adicionarSegredo.appendChild(li);
}
adicionaJogo()
//console.log(listaDePalavras);