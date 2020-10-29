class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          'isStatic':true,
          
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.image = loadImage("dustbingreen.png");
      this.width = width;
      this.height = height;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.x,this.y,this.width,this.height);
      pop();
    }
  }
  