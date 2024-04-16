"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function particlesTest() {

  useEffect(() => {
    document.title = "Particles";
  }, []);

  useEffect(() => {
    var canvas = document.querySelector("#scene"),
    ctx = canvas.getContext("2d"),
    particles = [],
    amount = 0,
    mouse = {x:0,y:0},
    radius = 1;
  
//   var colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];
  var color = ["#ffffff"];

  var displayText = "Flo"
  
//   var copy = document.querySelector("#copy");
  
  var ww = canvas.width = window.innerWidth;
  var wh = canvas.height = window.innerHeight;
  
  function Particle(x,y){
    this.x =  Math.random()*ww;
    this.y =  Math.random()*wh;
    this.dest = {
      x : x,
      y: y
    };
    // this.r =  Math.random()*5 + 2;
    this.r =  2
    this.vx = (Math.random()-0.5)*20;
    this.vy = (Math.random()-0.5)*20;

    this.accX = 0;
    this.accY = 0;
    // this.friction = Math.random()*0.05 + 0.94;
    this.friction =  0.95

    // this.color = colors[Math.floor(Math.random()*6)];
    this.color = color 
 }
  
  Particle.prototype.render = function() {
  
  
    // this.accX = (this.dest.x - this.x)/1000;
    // this.accY = (this.dest.y - this.y)/1000;
    this.accX = (this.dest.x - this.x)/200;
    this.accY = (this.dest.y - this.y)/200;
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
      this.accX = (this.x - mouse.x)/100;
      this.accY = (this.y - mouse.y)/100;
      this.vx += this.accX;
      this.vy += this.accY;
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
    wh = canvas.height = window.innerHeight;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // ctx.font = "bold "+(ww/3)+"px sans-serif";
    ctx.font = "bold "+(ww/3)+"px sans-serif";
    ctx.textAlign = "center";
    // ctx.fillText(copy.value, ww/2, wh/2);
    ctx.fillText(displayText, ww/2, wh/2);
  
    var data  = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";
  
    particles = [];
    for(var i=0;i<ww;i+=Math.round(ww/150)){
      for(var j=0;j<wh;j+=Math.round(ww/150)){
        if(data[ ((i + j*ww)*4) + 3] > 150){
          particles.push(new Particle(i,j));
        }
      }
    }
    amount = particles.length;
  
  }
  
  function onMouseClick(){
    radius++;
    if(radius ===5){
      radius = 0;
    }
  }
  
  function render(a) {
    requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < amount; i++) {
      particles[i].render();
    }
  };
  
//   copy.addEventListener("keyup", initScene);
  window.addEventListener("resize", initScene);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onTouchMove);
  window.addEventListener("click", onMouseClick);
  window.addEventListener("touchend", onTouchEnd);
  initScene();
  requestAnimationFrame(render);
  })

  return (
    <main className={styles.main}>
          <div
    className="relative 
flex 
place-items-center 
before:absolute 
before:h-[300px] 
before:w-[480px] 
before:-translate-x-1/2 
before:rounded-full 
before:bg-gradient-radial 
before:from-white 
before:to-transparent 
before:blur-2xl 
before:content-[''] 
after:absolute 
after:-z-20 
after:h-[180px] 
after:w-[240px] 
after:translate-x-1/3 
after:bg-gradient-conic 
after:from-sky-200 
after:via-blue-200 
after:blur-2xl 
after:content-[''] 
before:dark:bg-gradient-to-br 
before:dark:from-transparent 
before:dark:to-blue-700 
before:dark:opacity-10 
after:dark:from-sky-900 
after:dark:via-[#0141ff] 
after:dark:opacity-40 
before:lg:h-[360px] 
z-[-1]"
  ></div>

        <canvas style={{
            // width:'70vw', 
            // height:'70vh', 
            width:'100vw', 
            height:'100vh', 
            // background:'black'
            }} 
            id="scene">

                
            </canvas>
    </main>
  );
}
