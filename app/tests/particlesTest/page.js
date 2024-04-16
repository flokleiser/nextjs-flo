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
    // radius = 0.75;
    radius = 1;
  
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

  var displayText = "Flo"
  
  var ww = canvas.width = window.innerWidth;
  var wh = canvas.height = window.innerHeight;
  
  function Particle(x,y){
    this.x = x
    this.y = y 
    this.dest = {
      x : x,
      y: y
    };
    this.r = 4
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
    wh = canvas.height = window.innerHeight;
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    ctx.font = "bold "+(ww/3)+"px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(displayText, ww/2, wh/2);
  
    var data  = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";
  
    particles = [];
    // for(var i=0;i<ww;i+=Math.round(ww/150)){
    //   for(var j=0;j<wh;j+=Math.round(ww/150)){
    //     if(data[ ((i + j*ww)*4) + 3] > 150){
    //       particles.push(new Particle(i,j));
    //     }
    //   }
    // }

    for(var i=0;i<ww;i+=Math.round(ww/100)){
        for(var j=0;j<wh;j+=Math.round(ww/100)){
          if(data[ ((i + j*ww)*4) + 3] > 100){
            particles.push(new Particle(i,j));
          }
        }
      }

    amount = particles.length;
  
  }

function onMouseDown() {
    radius = 2;
    // radius = -2;
}
function onMouseUp() {
    // radius = 1;
    radius = 0.75;
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
