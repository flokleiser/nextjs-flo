"use client";
import styles from "app/page.module.css";
import { useEffect } from "react";
import { Assistant } from 'next/font/google';  

const assistant = Assistant({ 
    subsets: ['latin'],
    // weight:'600',
    // weight:'400',

});

export default function TestParticles() {


    
useEffect(() => {
var canvas = document.querySelector("#scene"),
ctx = canvas.getContext("2d"),
particles = [],
amount = 0,
mouse = {x:0,y:0},
radius = 0.5;


var textImage= new Image();
textImage.src = "/images/homepage/Florian Kleiser.png"
        
  var colors= ["#6b106a",
  "#670e6b",
  "#640d6b",
  "#600b6c",
  "#5b0a6d", 
  "#57096d",
  "#57096d",
  "#52096e",
  "#52096e",
  "#4e086f",
  "#480870",
  "#430970",
  "#3d0971"]
  var color = ["#ffffff"];

  // var displayText = "Flo"
  var displayText = "Florian Kleiser"
  
  var ww = canvas.width = window.innerWidth;
// var wh = canvas.height = window.innerHeight/3 * 2;
//   var wh = canvas.height = window.innerHeight/5 * 4;
  var wh = canvas.height = window.innerHeight;
  
  function Particle(x,y){
    this.x = x
    this.y = y 
    this.dest = {
      x : x,
      y: y
    };
    // this.r = 4

    // this.r = ww/300
    this.r = ww/600 

    // this.r = 2 
    this.vx = 0;
    this.vy = 0;

    this.accX = 0;
    this.accY = 0;
    // this.friction = Math.random()*0.05 + 0.94;
    // this.friction =  0.95
    // this.friction =  0.99
    this.friction = 0.7 

    this.color = color 
    // this.color = colors[Math.floor(Math.random()*6)];
 }
 
  
  Particle.prototype.render = function() {
  
  
    // this.accX = (this.dest.x - this.x)/1000;
    // this.accY = (this.dest.y - this.y)/1000;
    this.accX = (this.dest.x - this.x)/100;
    this.accY = (this.dest.y - this.y)/100;
    this.vx += this.accX;
    this.vy += this.accY;
    this.vx *= this.friction;
    this.vy *= this.friction;
  
    this.x += this.vx;
    this.y +=  this.vy;
  
    // ctx.drawImage(textImage,ww/2,wh/2, textImage.width, textImage.height)
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    // ctx.rect(this.x, this.y, 1.25*this.r,1.25*this.r, this.r);
    // ctx.roundRect(this.x, this.y, 1.5*this.r,1.5*this.r, this.r);

    ctx.fill();
  
    var a = this.x - mouse.x;
    var b = this.y - mouse.y;
  
    var distance = Math.sqrt( a*a + b*b );

    if(distance<(radius*60)){
        this.accX = (this.x - mouse.x);
        this.accY = (this.y - mouse.y);

        this.vx += this.accX;
        this.vy += this.accY;
    }
    if(distance>(radius*250)){
        this.accX = (this.dest.x - this.x)/10;
        this.accY = (this.dest.y - this.y)/10;
        this.vx += this.accX;
        this.vy += this.accY;
    }

  }
  
  function onMouseMove(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  /* Touch controls */
  function onTouchMove(e){
    if(e.touches.length > 0 ){
      mouse.x = e.touches[0].clientX;
      mouse.y = e.touches[0].clientY;
    }
  }
  function onTouchEnd(e){
  mouse.x = -9999;
  mouse.y = -9999;
  }
  
  function initScene(){
    ww = canvas.width = window.innerWidth;
    wh = canvas.height = window.innerHeight/5 * 4;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // ctx.font = `bold ${(ww / 10)}px ${assistant.style.fontFamily}`;
    ctx.font = `${(ww / 10)}px ${assistant.style.fontFamily}`;

    ctx.textAlign = "center";
    ctx.fillText(displayText, ww/2, wh/2.5);
  
    var data  = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";

    var divider = 250
  
    particles = [];
    // for(var i=0;i<ww;i+=Math.round(ww/250)){
    //   for(var j=0;j<wh;j+=Math.round(ww/250)){
    //     if(data[ ((i + j*ww)*4) + 3] >250){
    //       particles.push(new Particle(i,j));
    //     }
    //   }
    // }
    for(var i=0;i<ww;i+=Math.round(ww/divider)){
      for(var j=0;j<wh;j+=Math.round(ww/divider)){
        // if(data[ ((i + j*ww)*4) + 3] >divider){
        if(data[((i + j*ww)*4) + 3] >divider){
          particles.push(new Particle(i,j));
        }
      }
    }
    amount = particles.length;
  
  }

function onMouseDown() {
    radius = 2;
}
function onMouseUp() {
    radius = 0.5;
}
  
  function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
      particles[i].render();
    }
  };
  
  window.addEventListener("resize", initScene);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mouseup", onMouseUp);
  window.addEventListener("touchend", onTouchEnd);
  initScene();
  requestAnimationFrame(render);
  })

  return (
        <canvas style={{
          // paddingTop:'3rem',
            width:'100vw', 
            height:'80vh', 
            position:'absolute',
            }} 
            id="scene">


                
            </canvas>
  );
}
