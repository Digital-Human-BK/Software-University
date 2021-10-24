function picollo(register) {
  let parkingLot = {};

  for (const vehicle of register) {
    let [direction , regNumber] = vehicle.split(", ");
    if (direction ==="IN") {
      parkingLot[regNumber] = null;
    } else {
      delete parkingLot[regNumber]
    }
  }
  
  let sorted = Object.keys(parkingLot).sort();
  sorted.length === 0 ? console.log(`Parking Lot is Empty`) : console.log(sorted.join("\n"));
}
picollo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
picollo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)