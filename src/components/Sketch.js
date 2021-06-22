import React from "react";
import Sketch from "react-p5";

	let x = 50;
	let y = 50;
  var w = window.innerWidth;
  var h = window.innerHeight;

  // console.log(w,h);
  
  let particleCount = 50;
  let minSpeed = 0.05;
  let maxSpeed  = 0.10;
  let maxDist = 80;
  let maxConnection = 6;
  let particles = [];
  
  function Sketch1() {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(w, h).parent(canvasParentRef);
    for(let i = 0; i < particleCount; i++){
      // console.log(i);
      let p = new particle();
      particles.push(p);
    }
	};

  // const windowResized = (p5) => {
  //   p5.resizeCanvas(w,h);
  // }

	const draw = (p5) => {
		p5.background(41,47,54);
    
    for(let i = 0; i < particles.length; i++){
      p5.noStroke();
      p5.fill(p5.color(127));
      x = particles[i].position_x;
      y = particles[i].position_y;
      // console.log(x,"--",y);
      p5.ellipse(x,y,2,2);
      particles[i].update();
    }

    for(let i = 0; i < particles.length; i++){
      let current = particles[i];
      let affected = [];

      for(let j = 0; j < particles.length; j++){
        if(particles[j] !== current){
          let distance_x = current.position_x - particles[j].position_x;
          let distance_y = current.position_y - particles[j].position_y;
          distance_x = Math.pow(distance_x, 2);
          distance_y = Math.pow(distance_y, 2);
          let d = Math.sqrt(distance_x + distance_y);
          if(d <= maxDist && affected.length <= maxConnection){
            affected.push({
              'particle' : particles[j],
              'dist' : d
            });
          }
        }
      }

      for(let a = 0; a < affected.length; a++){
        p5.stroke(255);
        p5.line(current.position_x,current.position_y,affected[a].particle.position_x,affected[a].particle.position_y);
      }
    }
    
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		
	};

  class particle {
    constructor(position_x,position_y,velocity_x,velocity_y){
    this.position_x = 0 + (Math.random() * (w - 0));
    this.position_y = 0 + (Math.random() * (h - 0));
    this.velocity_x = -1 + (Math.random() * (2));
    this.velocity_y = -1 + (Math.random() * (2));
    let mul = minSpeed + (Math.random() * (maxSpeed - minSpeed));
    velocity_x = velocity_x * mul;
    velocity_y = velocity_y * mul;
    // console.log(position_x, position_y , velocity_x, velocity_y);
    }
     update(){
      this.position_x = this.position_x + this.velocity_x;
      this.position_y = this.position_y + this.velocity_y;
      if(this.position_x < 0) this.position_x = w;
      if(this.position_y < 0) this.position_y = h;
      if(this.position_x > w) this.position_x = 0;
      if(this.position_y > h) this.position_y = 0;
      // console.log(" 1update", this.position_x, this.position_y);
    }
  }

	return <Sketch setup={setup} draw={draw} />;
};


export default Sketch1