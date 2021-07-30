
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(280,550,60);
	bob2 = new Bob(340,550,60);
	bob3 = new Bob(400,550,60);
	bob4 = new Bob(460,550,60);
	bob5 = new Bob(520,550,60);

	roof1 = new Roof(400,150);

	rope1 = new Rope(bob1.body,roof1.roof,-120,0);
	rope2 = new Rope(bob2.body,roof1.roof,-60,0);
	rope3 = new Rope(bob3.body,roof1.roof,0,0);
	rope4 = new Rope(bob4.body,roof1.roof,60,0);
	rope5 = new Rope(bob5.body,roof1.roof,120,0);


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
 
  drawSprites();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display(); 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-280,y:50})
	}
}

