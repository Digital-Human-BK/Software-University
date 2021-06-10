function workingHours(input) {
  let hour = Number(input[0]);
  let day = input[1];

  // if ( hour >= 10 && hour < 18) {
  //   switch (day) {
  //     case 'Monday':
  //     case 'Tuesday':
  //     case 'Wednesday':
  //     case 'Thursday':
  //     case 'Friday':
  //     case 'Saturday':
  //       console.log('open'); break;
  //       default: console.log('closed'); break;
  //   }
  // } else {
  //   console.log('closed')
  // }

  if ( hour < 10 || hour >18 || day == 'Sunday') {
    console.log('closed');
  } else {
    console.log('open');
  }
}
workingHours(["12", "Monday"])