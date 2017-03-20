import './index.css'
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awsome course!`);

var graph = document.getElementById("canvas");

window.onload=function(){
 var canvas = document.getElementById("canvas"),
     context= canvas.getContext("2d"),
     width = canvas.width = 600,//window.innerWidth,
     height = canvas.height = 600;// window.innerHeight;   

     //context.fillRect(0,0,width,height);
     var drawPoint = function(x,y){
        context.beginPath();
        context.moveTo(x+300,y+300);
        context.lineTo(x+1+300,y+1+300);
        context.stroke();
     }

    var drawLine = function(x1,y1,x2,y2){
        context.beginPath();
        context.moveTo(x1+300,y1+300);
        context.lineTo(x2-1+300,y2-1+300);
        context.stroke();
     }

     console.clear();

     for(var i=0 ;i<100;i++){
         drawLine(Math.random() * 300,Math.random() *300,Math.random() * 300,Math.random() *300);
     }

     context.clearRect(0, 0, canvas.width, canvas.height);


    context.beginPath();
    context.moveTo(300,300);
    context.lineTo(301,301);
    context.stroke();
};
