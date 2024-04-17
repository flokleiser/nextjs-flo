"use client";
import styles from "app/page.module.css";
import { useEffect } from "react";
import { Assistant } from 'next/font/google';  

const assistant = Assistant({ 
    subsets: ['latin'],
    weight:'400',

});

export default function TitleParticles() {


    
useEffect(() => {
var canvas = document.querySelector("#scene"),
ctx = canvas.getContext("2d"),
particles = [],
amount = 0,
mouse = {x:0,y:0},
radius = 0.5;
        
// const assistant = Assistant({ 
//     subsets: ['latin'],
//     weight:'400',
// });

//   var colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];
//   var colors = ["#A63C9F", "#850FA6", "#58088C", "#3E0973", "#3E0973", "#3E0973", "#58088C", "#850FA6", "#A63C9F"]
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
  var wh = canvas.height = window.innerHeight/5 * 4;
  
  function Particle(x,y){
    this.x = x
    this.y = y 
    this.dest = {
      x : x,
      y: y
    };
    // this.r = 4
    this.r = 2 
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
  
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
    ctx.fill();
  
    var a = this.x - mouse.x;
    var b = this.y - mouse.y;
  
    var distance = Math.sqrt( a*a + b*b );

    if(distance<(radius*70)){
        // this.accX = (this.x - mouse.x)/100;
        // this.accY = (this.y - mouse.y)/100;

        // this.accX = (this.x - mouse.x)/10;
        // this.accY = (this.y - mouse.y)/10;
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

    // if(distance>(radius*70)){
    //     this.accX = (this.x - mouse.x)/100;
    //     this.accY = (this.y - mouse.y)/100;
    //     this.vx += this.accX;
    //     this.vy += this.accY;
    //   }
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
  
    // ctx.font = "bold "+(ww/10)+"px sans-serif";
    ctx.font = `bold ${(ww / 10)}px ${assistant.style.fontFamily}`;

    ctx.textAlign = "center";
    ctx.fillText(displayText, ww/2, wh/4);
  
    var data  = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";
  
    particles = [];
    for(var i=0;i<ww;i+=Math.round(ww/200)){
      for(var j=0;j<wh;j+=Math.round(ww/200)){
        if(data[ ((i + j*ww)*4) + 3] > 200){
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
            width:'100vw', 
            height:'80vh', 
            position:'absolute',
            // background:'black'
            }} 
            id="scene">

                
            </canvas>
  );
}
