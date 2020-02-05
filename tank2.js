class tank1{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.8,
            length: 10
        }
        this.tank1 = loadImage("tank 2.png");
        this.turrent = loadImage("turrent.jpg");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   //attach(body){
       // this.sling.bodyA = body;
    
    
    //fly(){
        //this.sling.bodyA = null;
    
    
    display(){
        image(this.tank2,100,380);
        image(this.turrent,98,370);
        }
    }