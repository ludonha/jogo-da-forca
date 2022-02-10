var iniciar = document.getElementById("iniciar-jogo");

iniciar.addEventListener('click', function() {
    //sorteiaPalavra();
    //adicionaCampo();

});

var adicionarNovaPalavra = document.getElementById("nova-palavra");

adicionarNovaPalavra.addEventListener("click", function () {
    novoTexto = document.querySelector("#input-nova-palavra");
    listaDePalavras.push(novoTexto.value);
    novoTexto.value = "";
});

var reiniciar = document.getElementById("reiniciar-jogo");

reiniciar.addEventListener("click", function () {
        location.reload();
})

var palavraCerta = document.querySelector("#palavra-certa");


listaDePalavras = ["BODE","BALUGA","GOLFINHO","MARIPOSA","CAMUNDONGO","JARACAMBEVA","ENFERRUJADINHO"];

var palavraSorteada = sorteiaPalavra();

var letrasCorretas = [];
var indicePosicao = [];
var letrasIncorretas = [];

var erro = 0;



function sorteiaPalavra (){
    var palavra = listaDePalavras[Math.floor(Math.random()*listaDePalavras.length)];
    return palavra;
}
function criarCampo(pai,letra) {
    var letra = document.createElement('div');
    pai.appendChild(letra);
    letra.setAttribute("id","letra");
}
function adicionaCampo() {
    for (let i = 0; i < palavraSorteada.length; i++) {
        criarCampo(palavraCerta, palavraSorteada);
    }
    
}
//botão iniciar
sorteiaPalavra();
adicionaCampo();

//keypress (touppercase)
var digito = "A";
validarLetra();
validaPosicao();
function validarLetra() {
    palavraSorteada.includes(digito);
    if (palavraSorteada.includes(digito)) {
        letrasCorretas.push(digito);
    }else {
        letrasIncorretas.push(digito);
    }
}
//verifica posição letra
function validaPosicao() {
    var posicao = palavraSorteada.indexOf(digito);
    while (posicao != -1) {
        indicePosicao.push(posicao);
        posicao = palavraSorteada.indexOf(digito, posicao + 1);
    }
    return indicePosicao
}

console.log(palavraSorteada)
console.log(letrasCorretas)
console.log(letrasIncorretas)
console.log(indicePosicao)

//desenha letra correta
let mostra = "";
letrasSeparada = palavraSorteada.split('');
    
mostra = document.querySelectorAll("#letra");
for (let i = 0; i < mostra.length; i++) {
    var mostraLetra = letrasCorretas;
    mostra[indicePosicao] = mostraLetra;
    console.log(mostraLetra)
}
