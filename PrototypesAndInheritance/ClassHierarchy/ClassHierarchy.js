function classes() {
  class Figure {
    units = {
      m: 0.01,
      cm: 1,
      mm: 10,
    };
    defaultUnit;

    constructor(unit = "cm") {
      if (this.constructor === "Figure") {
        throw new Error("This cannot be instantiated directly!");
      }
      this.defaultUnit = unit;
    }

    get area() {
      return NaN;
    }

    changeUnits(x) {
      this.defaultUnit = x;
    }

    calcWithUnit(x) {
      return x * this.units[this.defaultUnit];
    }

    toString() {
      return `Figures units: ${this.defaultUnit} Area: ${this.area}`;
    }
  }

  class Circle extends Figure {
    radius = 0;
    constructor(r, ...rest) {
      super(...rest);
      this.radius = r;
    }

    get area() {
      return Math.PI * Math.pow(this.calcWithUnit(this.radius), 2);
    }

    toString() {
      return `${super.toString()} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    width = 0;
    height = 0;
    constructor(w, h, ...rest) {
      super(...rest);
      this.width = w;
      this.height = h;
    }

    get w() {
      return this.calcWithUnit(this.width);
    }

    get h() {
      return this.calcWithUnit(this.height);
    }

    get area() {
      return this.w * this.h;
    }

    toString() {
      return `${super.toString()} - width: ${this.w}, height: ${this.h}`;
    }
  }

  return { Figure, Circle, Rectangle };
}

const Circle = classes().Circle;
const Rectangle = classes().Rectangle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
let r = new Rectangle(3, 4, "mm");
console.log(r.area); // 1200
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits("cm");
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
