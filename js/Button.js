class Button{
    constructor(x,y){
     var options={
         isStatic : true,
         friction : 0.5,
         density :1.2,
         restitution : 1
     }
     this.body= Bodies.circle(x,y,60,options);
     this.image = loadImage("images/button.png");
     this.radius = 60;
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,75,55);
        }
}