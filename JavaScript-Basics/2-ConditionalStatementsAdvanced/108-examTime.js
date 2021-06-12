function examTime(solve) {
  let examHour = Number(solve[0]);
  let examMinutes = Number(solve[1]);
  let arrivalHour = Number(solve[2]);
  let arrivalMinutes = Number(solve[3]);

  let hour = 0;
  let minutes = 0;

  let examTimeInMinutes = (examHour * 60) + examMinutes;
  let arrivalTimeInMinutes = (arrivalHour * 60) + arrivalMinutes;

  let lateDifference = arrivalTimeInMinutes - examTimeInMinutes;
  let earlyDifference = examTimeInMinutes - arrivalTimeInMinutes;

  if (examTimeInMinutes === arrivalTimeInMinutes) {
    console.log('On time');
  } else if (earlyDifference <= 30 && earlyDifference > 0) {
    console.log('On time');
    console.log(`${earlyDifference} minutes before the start`);
  } else if (earlyDifference > 30) {
    if (earlyDifference < 60) {
      console.log('Early');
      console.log(`${earlyDifference} minutes before the start`);
    } else if (earlyDifference >= 60) {
      hour = Math.floor(earlyDifference / 60);
      minutes = earlyDifference % 60;
      if (minutes < 10) {
        console.log('Early');
        console.log(`${hour}:0${minutes} hours before the start`);
      } else {
        console.log('Early');
        console.log(`${hour}:${minutes} hours before the start`);
      }
    }
  } else {
    if (lateDifference < 60) {
      console.log('Late');
      console.log(`${lateDifference} minutes after the start`);
    } else if (lateDifference >= 60) {
      hour = Math.floor(lateDifference / 60);
      minutes = lateDifference % 60;
      if (minutes < 10) {
        console.log('Late');
        console.log(`${hour}:0${minutes} hours after the start`);
      } else {
        console.log('Late');
        console.log(`${hour}:${minutes} hours after the start`);
      }
    }  
  }
}
examTime(["11", "30", "12", "29"])







