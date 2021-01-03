
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof1,bobObject1,bobObject2,bobObject3,bobObject4,
bobObject5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(400,100,300,20)
	bobObject1=new Ball(250,320,40)
	bobObject2=new Ball(290,320,40)
	bobObject3=new Ball(320,320,40)
	bobObject4=new Ball(360,320,40)
	bobObject5=new Ball(400,320,40)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	roof1.display()
	bobObject1.display()
	bobObject2.display()
	bobObject3.display()
	bobObject4.display()
	bobObject5.display()
	
	drawSprites();
 
}



