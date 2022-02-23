var iniciar = document.getElementById("iniciar-jogo");

iniciar.addEventListener('click', function() {
    
    desenhaInicio();
    
    palavraCerta.innerHTML = "";
    adicionaCampo();
    
    console.log(letrasSeparada);//
    window.addEventListener('keyup', tecla);
});

var adicionarNovaPalavra = document.getElementById("nova-palavra");

adicionarNovaPalavra.addEventListener("click", function () {
    novaPalavra = document.querySelector("#input-nova-palavra");
    
    var regex = /[0-9áâãàäéèêëíìîïóòôõöúùûü@#$%&*-\s]+/;
    var regexdois = /\w{11}/;
    var palavraTeste = regex.test(novaPalavra.value);
    var palavraTesteDois = regexdois.test(novaPalavra.value);
    
    if (palavraTeste) {        
        alert("Digite apenas letras sem acento, e sem espaço entre elas.");
    }else if (palavraTesteDois){
        alert("Digite palavas no máximo até 10 letras.");
    }else{
        console.log('dentro')
        listaDePalavras.push(novaPalavra.value.toUpperCase());
        alert("Sua palavra foi Adicionada com sucesso!");
    }
    
    novaPalavra.value = "";
});

var reiniciar = document.getElementById("reiniciar-jogo");

reiniciar.addEventListener("click", function () {
    location.reload();
})

var palavraCerta = document.querySelector("#palavra-certa");


listaDePalavras = ["BALEIA","CACHORRO","OVELHA","VACA","BODE","BALUGA","GOLFINHO","MARIPOSA","CAMUNDONGO","PEIXE","JACARE"];

var palavraSorteada = sorteiaPalavra();

var letrasCorretas = [];
var indicePosicao = [];
var letrasIncorretas = [];
var letraAcertada = 0;

function sorteiaPalavra (){
    var palavra = listaDePalavras[Math.floor(Math.random()*listaDePalavras.length)];
    return palavra;
};
function criarCampo(pai,letra) {
    var letra = document.createElement('div');
    pai.appendChild(letra);
    letra.setAttribute("id","letra");
};
function adicionaCampo() {
    sorteiaPalavra();
    for (let i = 0; i < palavraSorteada.length; i++) {
        letrasSeparada = palavraSorteada.split('');
        criarCampo(palavraCerta, letrasSeparada);
    };
};

//  ===  funções escuta keypress
//verifica posição letra
function validaPosicao(digito) {
    var posicao = letrasSeparada.indexOf(digito);
    while (posicao != -1) {
        indicePosicao.push(posicao);
        posicao = letrasSeparada.indexOf(digito, posicao + 1);
    }
    return indicePosicao
};
//desenha letra correta
function desenhaLetraCorreta(digito) {
    var mostra = document.querySelectorAll("#letra");
    for (let i = 0; i < indicePosicao.length; i++) {
        var posicaoLetra = indicePosicao[i];    
        var mostraLetra = mostra[posicaoLetra];
        mostraLetra.textContent = digito;
        console.log(mostraLetra);
        
    }
};

//desenha letra incorreta
function desenhaLetraIncorreta(digito) {
    var palavraErrada = document.querySelector("#letra-errada");
    palavraErrada.textContent += digito;
};
//desenha forca
function derrota() {
    for (let i = 0; i < letrasIncorretas.length; i++) {
        const erro = 0 + i;
        //console.log(erro)//
        if (erro>=0) {
            desenhaCorda(y);
        };
        if (erro>=1) {
            desenhaCabeca(y);
        };
        if (erro>=2) {
            desenhaTronco(y);
        };
        if (erro>=3) {
            desenhaBracoE(y);
        };
        if (erro>=4) {
            desenhaBracoD(y);
        };
        if (erro>=5) {
            desenhaPernaE(y);
        };
        if (erro>=6) {
            desenhaPernaD(y);
            desenhaDerrota(y);
            //A palavra era:
            window.removeEventListener('keyup', tecla);
        };
    }
};
//conta Acertos
function contaAcertos() {
    for (let i = 0; i < indicePosicao.length; i++){
        letraAcertada++
    }
    return letraAcertada
}
// verifica vencedor
function vitoria() { 
    if (letraAcertada >= palavraSorteada.length) {
        desenhaVitoria(y);

        window.removeEventListener('keyup', tecla);
    }
     
};
