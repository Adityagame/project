
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

roof1=createSprite(150,130,50,10);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  
  drawSprites();
 
}



