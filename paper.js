class Paper {
    constructor() {
      var options = {
          'isStatic':true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(100,200,35, options);
      this.image = loadImage("paper.png");
      
      this.radius = 35;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     
      imageMode(CENTER);
      image(this.x,this.y,this.radius);
      pop();
    }
  }
  