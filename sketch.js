
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(100,600,30);

	dustbinR=new Dustbin(670,620,20,100);
	dustbinL=new Dustbin(550,620,20,100);
	dustbinB=new Dustbin(610,660,100,20);

	ground=new Ground(400,680,800,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

paper.display();
ground.display();
dustbinL.display();
dustbinR.display();
dustbinB.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.positon,{x:140,y:-140})
	}

}

