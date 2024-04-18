"use client";
import styles from "app/page.module.css";
import { useEffect, useRef } from "react";
import { Assistant } from 'next/font/google';  

const assistant = Assistant({ 
    subsets: ['latin'],

});


export default function TitleParticles() {


    
useEffect(() => {
var canvas = document.querySelector("#scene"),
ctx = canvas.getContext("2d", {willReadFrequently: true}),
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

  var displayText = "Florian Kleiser"
  
  var ww = canvas.width = window.innerWidth;
  var wh = canvas.height = window.innerHeight;
  
  class Particle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.dest = {
        x: x,
        y: y
      };

      this.r = ww / 600;

      this.vx = 0;
      this.vy = 0;

      this.accX = 0;
      this.accY = 0;
      this.friction = 0.7;

      this.color = color;
    }
    render() {


      this.accX = (this.dest.x - this.x) / 100;
      this.accY = (this.dest.y - this.y) / 100;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;

      this.x += this.vx;
      this.y += this.vy;

      ctx.fillStyle = this.color;
      ctx.beginPath();

      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);

      ctx.fill();

      var a = this.x - mouse.x;
      var b = this.y - mouse.y;

      var distance = Math.sqrt(a * a + b * b);

      if (distance < (radius * 60)) {
        this.accX = (this.x - mouse.x);
        this.accY = (this.y - mouse.y);

        this.vx += this.accX;
        this.vy += this.accY;
      }
      if (distance > (radius * 250)) {
        this.accX = (this.dest.x - this.x) / 10;
        this.accY = (this.dest.y - this.y) / 10;
        this.vx += this.accX;
        this.vy += this.accY;
      }

    }
  }
 
  
  
  function onMouseMove(e){
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

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
  
    ctx.font = `${(ww / 10)}px ${assistant.style.fontFamily}`;

    ctx.textAlign = "center";
    // ctx.fillText(displayText, ww/2, wh/2.5);
    ctx.fillText(displayText, ww/2, wh/3);
  
    var data  = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";

    var divider = 250
  
    particles = [];
    for(var i=0;i<ww;i+=Math.round(ww/divider)){
      for(var j=0;j<wh;j+=Math.round(ww/divider)){
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
  
  function render() {
    // frame.current = requestAnimationFrame(render);
    requestAnimationFrame(render)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
      particles[i].render();
    }
    // return () => cancelAnimationFrame(frame.current)
    // return () => cancelAnimationFrame(render)
  };
  
  window.addEventListener("resize", initScene);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mouseup", onMouseUp);
  window.addEventListener("touchend", onTouchEnd);
  initScene();
  requestAnimationFrame(render);
  }, []);

  return (
        <canvas style={{
            width:'100vw', 
            height:'80vh', 
            position:'absolute',
            }} 
            id="scene">
            </canvas>
  );
}
