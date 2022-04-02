function createComputerHierarchy() {
  class Component {
    constructor(manufacturer) {
      this.manufacturer = manufacturer;
      if (this.constructor === Component) {
        throw new Error('Cannot instansiate with abstract class');
      }
    }
  }


  class Keyboard extends Component {
    constructor(manufacturer, responseTime) {
      super(manufacturer);
      this.responseTime = responseTime;
    }
  }

  class Monitor extends Component {
    constructor(manufacturer, width, height) {
      super(manufacturer);
      this.width = width;
      this.height = height;
    }
  }

  class Battery extends Component{
    constructor(manufacturer, expectedLife) {
      super(manufacturer);
      this.expectedLife = expectedLife;
    }
  }

  class Computer extends Component {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      super(manufacturer);
      if (this.constructor === Component) {
        throw new Error('Cannot instansiate with abstract class');
      }
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Laptop extends Computer {
      constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
        super(manufacturer, processorSpeed, ram, hardDiskSpace);
        this.weight = weight;
        this.color = color;
        this.battery = battery;

      }
      get battery(){        
          return this._battery;
      }

      set battery(value){
        if(value instanceof Battery){
          this._battery = value;
        } else {
          throw new TypeError('value is not an instance of Battery')
        }
      }
  }

  class Desktop extends Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.keyboard = keyboard;
      this.monitor = monitor;
    }

    set keyboard(value){
      if(value instanceof Keyboard) {
        this._keyboard = value;
      } else {
        throw new TypeError('value is not an instance of Keyboard')
      }
    }

    get keyboard(){
      return this._keyboard;
    }

    set monitor(value){
      if(value instanceof Monitor){
        this._monitor = value;
      } else {
        throw new TypeError('value is not an instance of Monitor');
      }
    }

    get monitor(){
      return this._monitor;
    }
  }

  return {
    Component,
    Keyboard,
    Monitor,
    Battery,
    Computer,
    Laptop,
    Desktop
  }
}
let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
laptop.battery = new Battery('Logi', 5);
console.log(laptop.battery);
let monitor = new Monitor('Alien', 150, 100);
let keyboard = new Keyboard('Logitech', '0.01ms');
console.log(monitor);
console.log(keyboard);
let desktop = new Desktop('Alienware', 5.0, 32, 5, keyboard, 'Alien 32\" 165Hz')
console.log(desktop);