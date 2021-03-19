class Bob{
    constructor(x,y){
        var options={
            "restitution":1,
            "friction": 0,
            "density": 0.8,
            "isStatic" : false 
        }
        
        this.body= Matter.Bodies.circle(x,y,10,options)
    
       // this.image= loadImage("sprites/paper.png");
        World.add(world,this.body);

    }    
    display(){
        var pos= this.body.position
       
        push();
        translate(pos.x,pos.y);
      rectMode(CENTER)
       // strokeWeight(6)
       // stroke("white")
       fill("pink")
       
        ellipse(0,0,this.width,this.height);
        pop();
    }
    
    }