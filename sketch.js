
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var object1,object2,object3,object4,object5
var ground
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;
object1= new Bob(520,400,5);
object2= new Bob(470,400,5);
object3= new Bob(420,400,5);
object4= new Bob(370,400,5);
object5= new Bob(320,400,5);

ground= new Roof(390,200,480,25);
rope1= new Rope(object1.body,{x:520,y:200});
rope2= new Rope(object2.body,{x:470,y:200});
rope3= new Rope(object3.body,{x:420,y:200});
rope4= new Rope(object4.body,{x:370,y:200});
rope5= new Rope(object5.body,{x:320,y:200});






	Engine.run(engine);
  
}


function draw() {
  background(0,225,0);
  rectMode(CENTER);

  object1.display();
  object2.display();
  object3.display();
  object4.display();
  object5.display();

  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //KeyPressed();
  
//keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW ){
  //body.setStatic(object1,false)
     Matter.Body.applyForce(object1.body, object1.body.position,{x:20,y:-20});
    
  }
  
}




