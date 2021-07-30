class Roof{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.roof = Bodies.rectangle(x,y,420,20,options);
        this.width = 420;
        this.height = 20;
        World.add(world,this.roof);
    }

    display(){
        push();
        fill(255,0,0);
        rectMode(CENTER);
        rect(this.roof.position.x, this.roof.position.y, this.width, this.height);
        pop();
    }
}