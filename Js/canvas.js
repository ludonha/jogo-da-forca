var desenho = document.querySelector ('#forca');
var pincel = desenho.getContext('2d');

pincel.fillStyle = 'lightgrey';
pincel.fillRect(0,0,400,600);

function desenhaBase() {
    pincel.fillStyle = 'rgb(212, 139, 56)';
    pincel.fillRect(0,550,350,15);
    pincel.fillStyle = 'rgb(212, 139, 56)';
    pincel.beginPath();
    pincel.moveTo(100,500);
    pincel.lineTo(50,550);
    pincel.lineTo(150,550);
    pincel.fill();
}
function desenhaForca() {
    pincel.fillStyle = 'rgb(134, 75, 7)';
    pincel.fillRect(95,150,10,355);
    pincel.fillStyle = 'rgb(134, 75, 7)';
    pincel.fillRect(95,150,258,10);
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'rgb(134, 75, 7)';
    pincel.beginPath();
    pincel.moveTo(195,150);
    pincel.lineTo(95,280);
    pincel.stroke()

}
//clicar iniciar jogo
function desenhaInicio() {
    desenhaBase();
    desenhaForca();
}
//erro = 1
function desenhaCorda() {
    pincel.fillStyle = 'rgb(233, 79, 18)';
    pincel.fillRect(343,150,5,70);
    pincel.fillStyle = 'rgb(233, 79, 18)';
    pincel.beginPath();
    pincel.arc(345,240,20,0,2*3.14);
    pincel.fill();
    pincel.fillStyle = 'lightgrey';
    pincel.beginPath();
    pincel.arc(345,241,17,0,2*3.14);
    pincel.fill();
}
//erro = 2
function desenhaCabeca() {
    pincel.fillStyle = 'darkblue';
    pincel.beginPath();
    pincel.arc(345,245,25,0,2*3.14);
    pincel.fill();    
}
//erro = 3
function desenhaTronco() {
    pincel.fillStyle = 'darkblue';
    pincel.fillRect(330,270,30,90);   
}
//erro = 4
function desenhaBracoE() {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(335,273);
    pincel.lineTo(305,320);
    pincel.stroke()  
}
//erro = 5
function desenhaBracoD() {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(355,273);
    pincel.lineTo(385,320);
    pincel.stroke()
}
//erro = 6
function desenhaPernaE() {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(335,355);
    pincel.lineTo(305,420);
    pincel.stroke()
}
//erro = 7 (fim do jogo)
function desenhaPernaD() {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(355,355);
    pincel.lineTo(385,420);
    pincel.stroke()
}
//função desenhaVitoria
function desenhaVitoria() {
    pincel.fillStyle = 'green';
    pincel.fillRect(150,300,250,100);
    
    pincel.fillStyle = 'yellow';
    pincel.font = 'bold 20px Inter';
    pincel.fillText('Você Venceu, Parabéns!!!', 150, 360);
}
//função desenhaDerrota
function desenhaDerrota() {
    pincel.fillStyle = 'red';
    pincel.fillRect(150,300,250,100);
    
    pincel.fillStyle = 'black';
    pincel.font = 'bold 28px Inter';
    pincel.fillText(' Fim de jogo! :(', 180, 360);    
}
