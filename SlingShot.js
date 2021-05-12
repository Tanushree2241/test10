class SlingShot {
    constructor(bodyA,pointB) {
        var options = {
            bodyA : bodyA , 
            pointB : pointB ,
            length : 10,
            stiffness : 0.04 
        }
        
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world,this.sling);

    }

    fly  () {
        this.sling.bodyA = null;
    }

    display() {
        
         if(this.sling.bodyA) {

        var PointA = this.sling.bodyA.position;
        var PointB = this.pointB;
       
        strokeWeight(5);
        stroke(135,206,235);
        line(PointA.x , PointA.y , PointB.x , PointB.y );
       
    }
}
}