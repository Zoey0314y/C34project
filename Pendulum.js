class Pendulum{
    constructor(x,y,width,height,angle){
    
    var options =  {
        friction : 1.0,
        density : 0.2 
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  
  
    }
    display(){
    var pos = this.body.position;
    var angle  = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipse(RADIUS);
    noStroke();
    strokeWeight(3);
    fill("white");
    ellipse(0,0,this.width,this.height);
    pop();
    
    }
  }