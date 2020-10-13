var boxside1, boxside2,boxbase;
var ball;
var ground;
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
	ball = new Paper(100,200,25,25)
	ground = new Ground(400,height,800,20)
	boxside1 = new Dustbin(550,653,15,75)
	boxside2 = new Dustbin(650,653,15,75)
	boxbase = new Dustbin(600,683,100,15)
	Engine.run(engine);
  if(ball.y < ground.y){
	  ball.setStatic = true
  }
}

function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ground.display()
  boxside1.display()
  boxside2.display()
  boxbase.display()
  drawSprites();
 
}
function keyPressed( ) {
  if (keyCode -UP_ARROW) {
  Matter . Body . applyForce(ball. body, ball. body . position, {x:35,y: -25});
  }
}
