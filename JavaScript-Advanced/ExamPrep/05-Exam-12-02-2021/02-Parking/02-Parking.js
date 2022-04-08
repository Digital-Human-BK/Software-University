class Parking {
  constructor(capacity) {
    this.capacity = capacity;
    this.vehicles = [];
  }

  addCar(carModel, carNumber) {
    if (this.vehicles.length >= this.capacity) {
      throw new Error("Not enough parking space.");
    }
    this.vehicles.push({ carModel, carNumber, payed: false });
    return `The ${carModel}, with a registration number ${carNumber}, parked.`;
  }

  removeCar(carNumber) {
    
    const car = this.vehicles.find(c => c.carNumber === carNumber);
    if (car === undefined) {
      throw new Error("The car, you're looking for, is not found.");
    } else if (car.payed === false) {
      throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
    } else {
      let index = 0;
      for(let i = 0; i< this.vehicles.length; i++){
        if(this.vehicles[i].carNumber === carNumber){
          index = i;
        }
      }
      this.vehicles.splice(index, 1);
      return `${carNumber} left the parking lot.`;
    }
  }

  pay(carNumber) {
    const car = this.vehicles.find(c => c.carNumber === carNumber);
    if (car === undefined) {
      throw new Error(`${carNumber} is not in the parking lot.`);
    } else if (car.payed === true) {
      throw new Error(`${carNumber}'s driver has already payed his ticket.`);
    } else {
      car.payed = true;
      return `${carNumber}'s driver successfully payed for his stay.`;
    }
  }
  getStatistics(carNumber) {
    const result = [];
    if (carNumber === undefined) {
      result.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
      this.vehicles
        .sort((a, b) => a.carModel.localeCompare(b.carModel))
        .forEach(c => result.push(`${c.carModel} == ${c.carNumber} - ${c.payed ? 'Has payed' : 'Not payed'}`)
        )
    } else {
      const car = this.vehicles.find(c => c.carNumber === carNumber);
      result.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`);
    }
    return result.join('\n');
  }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

/*
The Volvo t600, with a registration number TX3691CA, parked.
The Parking Lot has 11 empty spots left.
Volvo t600 == TX3691CA - Not payed
TX3691CA's driver successfully payed for his stay.
TX3691CA left the parking lot.
*/