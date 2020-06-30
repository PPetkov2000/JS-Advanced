function solve() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this.ribbonColor = ribbonColor;
      this.ribbonLength = ribbonLength;
      this._ribbon = {
        color: this.ribbonColor,
        length: this.ribbonLength,
      };
    }

    get ribbon() {
      return this._ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      super(color, gasWeight, ribbonColor, ribbonLength);
      this.text = text;
    }
  }

  return { Balloon, PartyBalloon, BirthdayBalloon };
}

// function solve() {
//   function Balloon(color, gasWeight) {
//     this.color = color;
//     this.gasWeight = gasWeight;
//   }

//   function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
//     Balloon.call(this, color, gasWeight);
//     this.ribbonColor = ribbonColor;
//     this.ribbonLength = ribbonLength;
//     this._ribbon = {
//       color: this.ribbonColor,
//       length: this.ribbonLength,
//     };

//     Object.defineProperty(this, "ribbon", {
//       get: function () {
//         return this._ribbon;
//       },
//     });
//   }

//   // PartyBalloon.prototype = Object.create(Balloon.prototype);
//   Object.setPrototypeOf(PartyBalloon, Balloon);
//   PartyBalloon.prototype.constructor = PartyBalloon;

//   function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLength, text) {
//     PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLength);
//     this.text = text;
//   }

//   // BirthdayBalloon.prototype = Object.create(PartyBalloon.prototype);
//   Object.setPrototypeOf(BirthdayBalloon, PartyBalloon);
//   BirthdayBalloon.prototype.constructor = BirthdayBalloon;

//   return { Balloon, PartyBalloon, BirthdayBalloon };
// }

const Balloon = solve().Balloon;
const PartyBalloon = solve().PartyBalloon;
const BirthdayBalloon = solve().BirthdayBalloon;

const balloon = new Balloon("red", 20);
const partyBalloon = new PartyBalloon("red", 20, "green", 5);
const birthdayBalloon = new BirthdayBalloon(
  "red",
  20,
  "green",
  5,
  "Happy Birthday"
);
console.log(balloon);
console.log(partyBalloon);
console.log(birthdayBalloon);

// Points 100/100
