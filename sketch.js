
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800,800);


	engine = Engine.create();
	world = engine.world;


	paper = new Paper();
	dustbin1 = new Dustbin(200,200,50,0);
	dustbin2 = new Dustbin(140,150,20,100);
	dustbin3 = new Dustbin(240,250,20,100);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display(); 
  dustbin3.display();
  
  drawSprites();
 
}
function keyPressed(){
	if( keyCode === "up"){
		Matter.body.applyForce(paper.Body,paper.Body.position,{x:200,y:200});
	}


}



