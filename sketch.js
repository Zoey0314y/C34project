
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;


function setup() {
	createCanvas(1000, 600);
   

	engine = Engine.create();
	world = engine.world;

	pendulum1 = new Pendulum(500,200,120,120);
	pendulum2 = new Pendulum(400,200,120,120);
	pendulum3 = new Pendulum(300,200,120,120);
	pendulum4 = new Pendulum(200,200,120,120);
	pendulum5 = new Pendulum(600,200,120,120);


	sling1 = new Sling(pendulum1.body,{x : 500, y : 50});
	sling2 = new Sling(pendulum2.body,{x : 500, y : 50});
	sling3 = new Sling(pendulum3.body,{x : 500, y : 50});
	sling4 = new Sling(pendulum4.body,{x : 500, y : 50});
	sling5 = new Sling(pendulum5.body,{x : 500, y : 50});


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  






  drawSprites();
 
}



