window.addEventListener('keyup', function (event) {
    var regex = /[a-z]/;
    var digitado = regex.test(event.key);

    if (digitado) {
        var letradigitada = regex.exec(event.key);
        if (letradigitada.index === 0){
            var letra = event.key.toLocaleUpperCase();
            console.log(letra)
        }   
    }
    
    validarLetra(letra);
    
});