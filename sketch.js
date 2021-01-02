var paper;
var ground;
var dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload() {
 
  //Nothing to put in.
}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();                 
  world = engine.world;

  //Create the Bodies Here.
  paper = new Paper(200, 655, 70);
	
  ground = new Ground(width/2, 675, width, 20);

  dustbin = new Dustbin(1200, 660);

   var render = Render.create({
   element: document.body,
   engine: engine,
   options: {
	 width: 1600,
	 height: 700,
	 wireframes: false
   }
 })

  Engine.run(engine);
  Render.run(render);
}

function draw() {
  rectMode(CENTER);
  background("turquoise");

  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 97, y: -240});
  }
}