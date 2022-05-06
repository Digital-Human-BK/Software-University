/*
The commented out code in this module is from v1.0.0
where as database was used just a simple .json
and core FS module to read the file.
Replaced with mongoDB collection.
*/


// const fs = require('fs/promises');

// const filePath = './services/data.json';

// async function read() {
//   try {
//     const file = await fs.readFile(filePath);
//     return JSON.parse(file);
//   } catch (error) {
//     console.error('Database read error');
//     console.log(error);
//     process.exit(1);
//   }

// }

// async function write(data) {
//   try {
//     await fs.writeFile(filePath, JSON.stringify(data, null, 2));

//   } catch (error) {
//     console.error('Database write error');
//     console.log(error);
//     process.exit(1);
//   }
// }

// function nextId() {
//   return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
// }

const Car = require('../models/Car');

const { carViewModel } = require('./util');

async function getAll(query) {
  const options = {
    isDeleted: false
  }

  if (query.search) {
    options.name = new RegExp(query.search, 'i');
  }

  if (query.from) {
    options.price = { $gte: Number(query.from) }
  }

  if (query.to) {
    if (options.price == undefined) {
      options.price = {};
    }
    options.price.$lte = Number(query.to);
  }
  const cars = await Car.find(options);
  return cars.map(carViewModel);

  // const data = await read();

  // let cars =  Object
  //   .entries(data)
  //   .map(([id, value]) => Object.assign({}, value, { id }));

  // if(query.search) {
  //   cars = cars.filter(c => c.name.toLocaleLowerCase().includes(query.search.toLocaleLowerCase()));
  // }
  // if(query.from) {
  //   cars = cars.filter(c => c.price >= Number(query.from));
  // }
  // if(query.to) {
  //   cars = cars.filter(c => c.price <= Number(query.to));
  // }

  // return cars;  
}

async function getCarById(id) {
  const car = await Car.findById(id).where({ isDeleted: false }).populate('accessories');

  if (car) {
    return carViewModel(car);
  } else {
    return undefined;
  }
  // const data = await read();
  // const car = data[id];

  // if (car) {
  //   return Object.assign({}, { id }, car);
  // } else {
  //   return undefined;
  // }
}

async function createCar(car) {
  const result = new Car(car);
  await result.save();

  // const cars = await read();

  // let id;

  // do {
  //   id = nextId();
  // } while (cars.hasOwnProperty(id));

  // cars[id] = car;

  // await write(cars);  
}

async function deleteCarById(id, ownerId) {

  // await Car.findByIdAndDelete(id);

  const existing = await Car.findById(id).where({ isDeleted: false });

  if (existing.owner != ownerId) {
    return false;
  }

  await Car.findByIdAndUpdate(id, { isDeleted: true });
  return true;

  // const cars = await read();

  // if(cars.hasOwnProperty(id)){
  //   delete cars[id];
  //   await write(cars);
  // } else {
  //   throw new ReferenceError('No such ID in database');
  // }
}

async function updateCarById(id, car, ownerId) {
  const existing = await Car.findById(id).where({ isDeleted: false });

  if (existing.owner != ownerId) {
    return false;
  }
  
  existing.name = car.name;
  existing.description = car.description;
  existing.imageUrl = car.imageUrl;
  existing.price = car.price;
  existing.accessories = car.accessories;

  await existing.save();
  return true;

  // const cars = await read();

  // if (cars.hasOwnProperty(id)) {
  //   cars[id] = car;
  //   await write(cars);
  // } else {
  //   throw new ReferenceError('No such ID in database');
  // }
}

async function attachAccessory(carId, accessoryId, ownerId) {
  const existing = await Car.findById(carId);

  if (existing.owner != ownerId) {
    return false;
  }

  existing.accessories.push(accessoryId);
  await existing.save();

  return true;
}

module.exports = () => (req, res, next) => {
  req.storage = {
    getAll,
    getCarById,
    createCar,
    deleteCarById,
    updateCarById,
    attachAccessory
  }
  next();
}

