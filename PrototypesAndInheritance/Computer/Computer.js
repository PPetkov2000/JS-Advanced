function solve() {
  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }

  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error("Cannot instantiate directly!");
      }

      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      if (battery instanceof Battery === false) {
        throw new TypeError("Invalid data!");
      }

      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this._battery = battery;
    }

    get battery() {
      return this._battery;
    }

    set battery(x) {
      if (x instanceof Battery === false) {
        throw new TypeError("Invalid data!");
      }

      this._battery = x;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      if (keyboard instanceof Keyboard === false) {
        throw new TypeError("Invalid data!");
      }

      if (monitor instanceof Monitor === false) {
        throw new TypeError("Invalid data!");
      }

      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this._keyboard = keyboard;
      this._monitor = monitor;
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(x) {
      if (x instanceof Keyboard === false) {
        throw new TypeError("Invalid data!");
      }

      this._keyboard = x;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(x) {
      if (x instanceof Monitor === false) {
        throw new TypeError("Invalid data!");
      }

      this._monitor = x;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}

const classes = solve();

const battery = new classes.Battery("Manufacturer.bg", 3);
const keyboard = new classes.Keyboard("Manufacturer.bg", 2);
const monitor = new classes.Monitor("Manufacturer.bg", 40, 20);
const laptop = new classes.Laptop(
  "Manufacturer.bg",
  3,
  16,
  1,
  4,
  "black",
  battery
);
const desktop = new classes.Desktop(
  "Manufacturer.bg",
  3,
  16,
  1,
  keyboard,
  monitor
);

console.log(battery);
console.log(keyboard);
console.log(monitor);
console.log(laptop);
console.log(desktop);

// Points 100/100
