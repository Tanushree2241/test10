class Polygon {
    constructor() {
        
        this.polygon = Bodies.circle(50,200,20);
        World.add(world,this.polygon);

        slingShot = new SlingShot(this.polygon,{x:100,y:200});
    }

    display() {
       imageMode(CENTER)
       image(polygon_img , this.polygon.position.x , this.polygon.position.y , 40,40);
    }
}