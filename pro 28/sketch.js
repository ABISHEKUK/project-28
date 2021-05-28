const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree, stoneObj,groundObject, slingObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;


function preload(){
	boy=loadImage("boy.png");
  tree=loadImage("tree.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(235,420,30); 

	mango1=new Mango(1100,130,30);
  mango2=new Mango(1170,230,30);
	mango3=new Mango(1010,300,30);
	mango4=new Mango(1100,270,30);
	mango5=new Mango(1100,340,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,300,25);
	
  
  slingObject=new Sling(stoneObj.body,{x:235,y:420})
	 
	groundObject=new Ground(width/2,600,width,20);
	
 
	
	Engine.run(engine);

}

function draw() {

  background("blue");
  fill("black")
  textSize(25);
  text("Press Space to get a second Chance to Play!",50 ,50);
  
  image(boy ,200,340,200,300);
  image(tree,810,100,500,500)

 
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
 
  groundObject.display();
  slingObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
slingObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  slingObject.attach(stoneObj.body);
	}
  }

  function detectollision(stone,mango){
   mangoBodyPosition=mango.body.position
   stoneBodyPosition=stone.body.position
  
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

  	if(distance<=mango.r+stone.r)
   {

	  Matter.Body.setStatic(mango.body,false);
  }

 }