var iniciar = document.getElementById("iniciar-jogo");

iniciar.addEventListener('click', function(event) {
    event.preventDefault;
    desenhaInicio();
    sorteiaPalavra();
    adicionaCampo();
    console.log(letrasSeparada);//
    window.addEventListener('keyup', tecla);
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


listaDePalavras = ["BALEIA","CACHORRO","OVELHA","VACA","BODE","BALUGA","GOLFINHO","MARIPOSA","CAMUNDONGO","JARACAMBEVA","ENFERRUJADINHO"];

var palavraSorteada = sorteiaPalavra();

var letrasCorretas = [];
var indicePosicao = [];
var letrasIncorretas = [];
var letraAcertada = 1;

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
            desenhaCorda();
        };
        if (erro>=1) {
            desenhaCabeca();
        };
        if (erro>=2) {
            desenhaTronco();
        };
        if (erro>=3) {
            desenhaBracoE();
        };
        if (erro>=4) {
            desenhaBracoD();
        };
        if (erro>=5) {
            desenhaPernaE();
        };
        if (erro>=6) {
            desenhaPernaD();
            desenhaDerrota();

            window.removeEventListener('keyup', tecla);
        };
    }
};
// verifica vencedor
function vitoria(digito) { 
    if (letraAcertada >= palavraSorteada.length) {
        desenhaVitoria();

        window.removeEventListener('keyup', tecla);
    }
    
    for (let i = 0; i < indicePosicao.length; i++) {
        if (digito) {
            letraAcertada++
        }   
    }
    
     
    
};
