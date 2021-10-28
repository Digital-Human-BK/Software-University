function garage(array) {
  let garageObj = {};

  for (let line of array) {
    let temp = line.split(" - ");
    let num = temp.shift();
    let nextTemp = temp[0].split(", ");
    let car =[];

    nextTemp.forEach(element => {
      let kvp = element.split(": ");
      car.push(kvp);
    });

    if (garageObj.hasOwnProperty(num)){
      garageObj[num].push(car);
    } else {
      garageObj[num]=[];
      garageObj[num].push(car);
    }
  }

  for (const key of Object.keys(garageObj)) {
    console.log(`Garage № ${key}`);
    garageObj[key].forEach(element =>{
      let result = [];
      element.forEach(c => result.push(c.join(" - ")));
      console.log(`--- ${result.join(", ")}`);    
    })
  }
}
garage(['1 - color: blue, fuel type: diesel',
  '1 - color: red, manufacture: Audi',
  '2 - fuel type: petrol',
  '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])