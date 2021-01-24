class BallClass{
    constructor(x, y, radius)
{
    var options = {
restitution:0.3,
density:1.5,
friction:1.2
}
this.body = Bodies.circle(x, y, radius, options);
this.width = radius;
this.height = radius;
World.add(world, this.body);
}
display(){
push();
translate(this.body.position.x, this.body.position.y);
ellipseMode(CENTER); 
ellipse(0, 0, this.width, this.height);
pop();    
}
}
