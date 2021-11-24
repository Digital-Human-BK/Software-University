function softUniReception(array){
  let efficiency = Number(array[0]) + Number(array[1]) + Number(array[2]);
  let students = Number(array[3]);
  let time =0;

  while (students > 0 ){
    time++

    if (time % 4 !== 0) {
      students -=efficiency;
    }
  }
  console.log(`Time needed: ${time}h.`);
}
softUniReception([ '5', '6', '4', '20' ]);
softUniReception([ '1', '2', '3', '45' ]);
softUniReception([ '3', '2', '5', '40' ]);