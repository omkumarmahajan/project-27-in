
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Con = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new roof(400,50,200,10)
     rope = new rope(bob1.body,roof.body,-bobDiameter*2,0)
	bob1 = new bob(270,500,30,30)
    bob2 = new bob(330,500,30,30) 
    bob3 = new bob(390,500,30,30)
	bob4 = new bob(450,500,30,30)
	bob5 = new bob(510,500,30,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rope.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



