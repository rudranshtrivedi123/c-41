
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){
  forestOffier = loadAnimation("image/100.png","image/200.png","image/300.png","image/400.png","image/500.png","image/600.png","image/700.png","image/800.png","image/900.png","image/1000.png","image/1100.png")
  backgroundImg = loadImage("image/park.jpg");
}


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

   
	//engine = Engine.create();
	//world = engine.world;
	 background1 = createSprite(400,300);
     background1.addAnimation(backgroundImg)
	 background1.velocityX = -3
	//Engine.run(engine);
	
}


function draw() {
  
  background(0);
  
  drawSprite();
}






