class Ball{

    constructor(x,y,r){

        var options={
            restitution: 1,
            density: 1,
            frictionAir: 0.005
        }

        this.body = Bodies.circle(x,y,r,options)
        World.add(world, this.body);
        this.r=r
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill(30,0,170)
        ellipseMode(CENTER);
        ellipse(0,0,this.r*2,this.r*2);
        pop()
    }
}