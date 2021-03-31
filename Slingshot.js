class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 1,
            stiffness: 0.04
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options)
        World.add(world,this.slingshot)
    }
    fly(){
        this.slingshot.bodyA = null
    }
    attach(body){
        this.slingshot.bodyA = body
    }
    display(){
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position
        var pointB = this.pointB
        push()
        stroke(48,22,8)
        strokeWeight(4)
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop()   
        


        }
    }
}