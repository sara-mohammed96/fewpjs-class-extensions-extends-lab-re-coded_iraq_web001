  
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
    get isValid(){
    let valid = true;
    
    for (let i = 0; i < 3; i++){
      if(this.sides[0] + this.sides[1] <= this.sides[2]){
        valid = false;
        break;
      }
      this.sides.unshift(this.sides.pop())
    }
    return valid
  }
}

class Square extends Polygon{
  area(){
    let area=this.sides[0]*this.sides[0]
    return area;
  }
  
  
}
    
