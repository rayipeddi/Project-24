class Dustbin
{
    constructor(x,y,width,height)
    {
        var options = 
        {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        push()
        rectMode(CENTER)
        translate(this.body.position.x, this.body.position.y)
        strokeWeight(0)
        fill(255,255,0)
        rect(0,0,this.width,this.height)
        pop()
      }
    }