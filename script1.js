const sideLength = +(prompt("Enter the size of the side of the cube:"));
const paragraph = document.querySelector("#paragraph")

class Cube {
    constructor(_sideLength) {
      this.sideLength = _sideLength;
    }
    getSurfaceArea() {
        return 6 * (this.sideLength ** 2);
      }
      
      getPerimeter() {
        return 12 * this.sideLength;
      }
  };
 
  
  const myCube = new Cube(sideLength);
  

  const area = myCube.getSurfaceArea();
  const perimeter = myCube.getPerimeter();
  
  paragraph.innerHTML = `A cube with sides of length ${sideLength} has an area of ${area} square units and a perimeter of ${perimeter} units.`
  console.log(`A cube with sides of length ${sideLength} has an area of ${area} square units and a perimeter of ${perimeter} units.`);
  