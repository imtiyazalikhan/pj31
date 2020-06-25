class Plinkos{
    constructor(x,y,r){
        var options={
            isStstic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.x=x;
        this.y=y;
        this.r=r
        for(varj=40;j<=innerWidth;j=j+50){
            plinkos.push(new Plinko(j,75));
        }
        for(var j = 15;j<=width-10,j=j+50){
            plinkos.push(new Plinko(j,175));
        }
    }
    display(){
        var pinkos=this.body.position;
        push()
        this.body=Bodies.circle(this.x,this.y,this.r,options),
        this.color=this.color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
        translate(pinkospos.x,pinkospos.y);
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r,this.r);
        pop()
        
    }
}