function hospital(solve) {
  let days = Number(solve[0])

  let doctors = 7;
  let treatedpatients = 0;
  let untreatedPatients = 0;

  for (let i = 1; i <= days; i++) {

    let patients = Number(solve[i])

    if (i % 3 === 0) {
      if (untreatedPatients > treatedpatients) {
        doctors++;
      }
    }

    if (patients <= doctors) {
      treatedpatients += patients;
    } else {
      untreatedPatients = untreatedPatients + (patients - doctors);
      treatedpatients += doctors;
    }
  }

  console.log(`Treated patients: ${treatedpatients}.`);
  console.log(`Untreated patients: ${untreatedPatients}.`);
}
hospital(['4', '7', '27', '9', '1'])