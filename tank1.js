class tank1{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.8,
            length: 10
        }
        this.tank1 = loadImage("tank.png");
        this.turrent = loadImage("turrent2.jpg");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   //attach(body){
       // this.sling.bodyA = body;
    
    
    //fly(){
        //this.sling.bodyA = null;
    
    
    display(){
        image(this.tank,200,20);
        image(this.turrent,196,30);
        }
    }
    
