var desenho = document.querySelector ('#forca');
var pincel = desenho.getContext('2d');

/*pincel.fillStyle = '';
pincel.fillRect(0,0,1000,600);*/

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
desenhaBase();

function desenhaForcaA() {
    pincel.fillStyle = 'rgb(134, 75, 7)';
    pincel.fillRect(95,150,10,355);    
}
function desenhaForcaB() {
    pincel.fillStyle = 'rgb(134, 75, 7)';
    pincel.fillRect(95,150,258,10);    
}
function desenhaCorda() {
    pincel.fillStyle = 'rgb(233, 79, 18)';
    pincel.fillRect(343,150,5,70);    
}
function desenhaCabeca() {
    pincel.fillStyle = 'darkblue';
    pincel.beginPath();
    pincel.arc(345,245,25,0,2*3.14);
    pincel.fill();    
}
function desenhaTronco() {
    pincel.fillStyle = 'darkblue';
    pincel.fillRect(330,270,30,90);   
}
function desenhaBracoE() {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(335,273);
    pincel.lineTo(305,320);
    pincel.stroke()  
}
function desenhaBracoD() {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(355,273);
    pincel.lineTo(385,320);
    pincel.stroke()
}
function desenhaPernaE() {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(335,355);
    pincel.lineTo(305,420);
    pincel.stroke()
}
function desenhaPernaD() {
    pincel.lineWidth = 10.0;
    pincel.strokeStyle = 'darkblue';
    pincel.beginPath();
    pincel.moveTo(355,355);
    pincel.lineTo(385,420);
    pincel.stroke()
}

function tracinhos(x) {
    pincel.fillStyle = 'black';
    pincel.fillRect(380+(60*x),500,40,5);
}