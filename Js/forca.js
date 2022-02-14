var iniciar = document.getElementById("iniciar-jogo");

iniciar.addEventListener('click', function() {
    //sorteiaPalavra();
    //adicionaCampo();

});

var adicionarNovaPalavra = document.getElementById("nova-palavra");

adicionarNovaPalavra.addEventListener("click", function () {
    novoTexto = document.querySelector("#input-nova-palavra");
    listaDePalavras.push(novoTexto.value.toUpperCase());
    //Adicinar regex para filtar caracteres especiais
    alert("Sua palavra foi Adicionada com sucesso!")
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
        letrasSeparada = palavraSorteada.split('');
        criarCampo(palavraCerta, letrasSeparada);
    }
    return letrasSeparada
}

//botão iniciar
desenhaInicio();
sorteiaPalavra();
adicionaCampo();
console.log(letrasSeparada);//

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
function validarLetra(digito) {
    letrasSeparada.includes(digito);
    if (letrasSeparada.includes(digito)) {
        letrasCorretas.push(digito);
            indicePosicao.splice(0,14,);
                validaPosicao(digito);
                    desenhaLetraCorreta(digito);
                    console.log(letrasCorretas);//
    } else if (digito !== undefined && !letrasIncorretas.includes(digito)){
        letrasIncorretas.push(digito);
        console.log(letrasIncorretas);//
            desenhaLetraIncorreta(digito);
                desenhaJogo();
    }
};
//desenha letra incorreta
function desenhaLetraIncorreta(digito) {
    var palavraErrada = document.querySelector("#palavra-errada");
    palavraErrada.textContent += digito;
};
//desenha forca
function desenhaJogo() {
    for (let i = 0; i < letrasIncorretas.length; i++) {
        const erro = 0 + i;
        console.log(erro)//
        if (erro>=1) {
            desenhaCorda();
        };
        if (erro>=2) {
            desenhaCabeca();
        };
        if (erro>=3) {
            desenhaTronco();
        };
        if (erro>=4) {
            desenhaBracoE();
        };
        if (erro>=5) {
            desenhaBracoD();
        };
        if (erro>=6) {
            desenhaPernaE();
        };
        if (erro>=7) {
            desenhaPernaD();
            desenhaDerrota();
        };
    }
};
