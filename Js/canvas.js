var desenho = document.querySelector ('#forca');
var pincel = desenho.getContext('2d');
/*
pincel.fillStyle = 'lightgrey';
pincel.fillRect(0,0,400,600);
*/
var y = 125;
function desenhaBase(y) {
    pincel.fillStyle = 'rgb(212, 139, 56)';
    pincel.fillRect(0,550-y,350,15);
    pincel.fillStyle = 'rgb(212, 139, 56)';
    pincel.beginPath();
    pincel.moveTo(100,500-y);
    pincel.lineTo(50,550-y);
    pincel.lineTo(150,550-y);
    pincel.fill();
}
function desenhaForca(y) {
    pincel.fillStyle = 'rgb(134, 75, 7)';
    pincel.fillRect(95,150-y,10,355);
    pincel.fillStyle = 'rgb(134, 75, 7)';
    pincel.fillRect(95,150-y,258,10);
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'rgb(134, 75, 7)';
    pincel.beginPath();
    pincel.moveTo(195,150-y);
    pincel.lineTo(95,280-y);
    pincel.stroke()

}
//clicar iniciar jogo
function desenhaInicio() {
    desenhaBase(y);
    desenhaForca(y);
}
//erro = 1
function desenhaCorda(y) {
    pincel.fillStyle = 'rgb(233, 79, 18)';
    pincel.fillRect(343,150-y,5,70);
    pincel.fillStyle = 'rgb(233, 79, 18)';
    pincel.beginPath();
    pincel.arc(345,240-y,20,0,2*3.14);
    pincel.fill();
    pincel.fillStyle = 'lightgrey';
    pincel.beginPath();
    pincel.arc(345,241-y,17,0,2*3.14);
    pincel.fill();
}
//erro = 2
function desenhaCabeca(y) {
    pincel.fillStyle = 'darkblue';
    pincel.beginPath();
    pincel.arc(345,245-y,25,0,2*3.14);
    pincel.fill();    
}
//erro = 3
function desenhaTronco(y) {
    pincel.fillStyle = 'darkblue';
    pincel.fillRect(330,270-y,30,90);   
}
//erro = 4
function desenhaBracoE(y) {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(335,273-y);
    pincel.lineTo(305,320-y);
    pincel.stroke()  
}
//erro = 5
function desenhaBracoD(y) {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(355,273-y);
    pincel.lineTo(385,320-y);
    pincel.stroke()
}
//erro = 6
function desenhaPernaE(y) {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(335,355-y);
    pincel.lineTo(305,420-y);
    pincel.stroke()
}
//erro = 7 (fim do jogo)
function desenhaPernaD(y) {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(355,355-y);
    pincel.lineTo(385,420-y);
    pincel.stroke()
}
//função desenhaVitoria
function desenhaVitoria(y) {
    pincel.fillStyle = 'green';
    pincel.fillRect(150,300-y,250,100);
    
    pincel.fillStyle = 'yellow';
    pincel.font = 'bold 20px Inter';
    pincel.fillText('Você Venceu, Parabéns!!!', 150, 360-y);
}
//função desenhaDerrota
function desenhaDerrota(y) {
    pincel.fillStyle = 'red';
    pincel.fillRect(150,300-y,250,100);
    
    pincel.fillStyle = 'black';
    pincel.font = 'bold 28px Inter';
    pincel.fillText(' Fim de jogo! :(', 180, 360-y);    
}
