class bob {
 constructor (x,y,r) {
     var position= {
         isStatic:false,
         restitution:1,
         density:0.8
     }
  this.x=x;
  this.y=y;
  this.r=r; 
  this.body=Bodies.circle(this.x,this.y,(this.r)/2,position)
  World.add(world,this.body)
 }
 display() {
     push()
     translate(this.body.position.x,this.body.position.y)
     ellipseMode(RADIUS)
     ellipse(0,0,this.r,this.r)
     pop()
 }
}