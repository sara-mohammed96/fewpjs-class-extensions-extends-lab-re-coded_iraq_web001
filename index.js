  
class Polygon {
  constructor(array){
    this.sides = array;
  }
  get countSides() {
    return this.sides.length
  }
  
 get perimeter(){
  let summation =this.sides.reduce((sum, side) => sum = sum+side, 0)
  return summation
  }
}

class Triangle extends Polygon{
  isValid(){
    let valid=true;
   
      if(this.sides[0]+this.sides[1]<=this.sides[2])
    return  valid=false;
      else
    return  valid=true;
   
    
  }
  
}