class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = 10;
      this.image = loadImage("ground.jpg");
      World.add(world, this.body);
  }

  display(){
    image(this.image,this.x,y,200,390)
  }
}
