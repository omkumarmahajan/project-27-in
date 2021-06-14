class rope{
    constructor(a,r,offsetX,offsetY)
    {
    
      this.offsetX = offsetX
      this.offsetY = offsetY
     var options{
         bodyA:a,
         bodyB:r,
         pointB:{x: this.offsetX ,y: this.offsetY}
     }
      
      this.rope = Con.create(options)
      World.add(world,this.rope)
    }


    display(){

      }
}