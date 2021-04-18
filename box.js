class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :1.01,
            isStatic:false
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.vis=255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<4){
          
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          this.vis=this.vis-5;
          tint(255,this.vis);
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        }
        else
        {
         World.remove(world,this.body);
       }
      }
}