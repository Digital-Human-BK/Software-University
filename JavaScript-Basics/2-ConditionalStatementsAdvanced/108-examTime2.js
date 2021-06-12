function examTime(solve) {
  let examHour = Number(solve[0]);
  let examMinutes = Number(solve[1]);
  let arrivalHour = Number(solve[2]);
  let arrivalMinutes = Number(solve[3]);

  let hour = 0;
  let minutes = 0;

  //Conver everything to minutes
  let examTimeInMinutes = (examHour * 60) + examMinutes;
  let arrivalTimeInMinutes = (arrivalHour * 60) + arrivalMinutes;

  let earlyDifference = examTimeInMinutes - arrivalTimeInMinutes;
  let lateDifference = arrivalTimeInMinutes - examTimeInMinutes; 

  //Late
  if (examTimeInMinutes < arrivalTimeInMinutes) {
    if (examHour === arrivalHour) {
      minutes = arrivalTimeInMinutes - examTimeInMinutes;
      if (minutes >= 60) {
        minutes = minutes - 60;
        console.log('Late');
        console.log(`${minutes} minutes after the start`);
      } else {
        console.log('Late');
        console.log(`${minutes} minutes after the start`);
      }
    } else {
      hour = arrivalHour - examHour;
      minutes = arrivalTimeInMinutes - examTimeInMinutes;
      if ( minutes >= 60) {
        hour = hour + 1;
        minutes = minutes - 60;
        if (minutes < 10) {
          console.log('Late');
          console.log(`${hour}:0${minutes} hours after the start`);
        } else {
          console.log('Late');
          console.log(`${hour}:${minutes} hours after the start`);
        }
      } else {
        if (minutes < 10) {
          console.log('Late');
          console.log(`${hour}:0${minutes} hours after the start`);
        } else {
          console.log('Late');
          console.log(`${hour}:${minutes} hours after the start`);
        }
      }
    }
  } else if ((examTimeInMinutes - arrivalTimeInMinutes) > 30) {
    if (examHour === arrivalHour) {
      minutes = examTimeInMinutes - arrivalTimeInMinutes;
      console.log('Early');
      console.log(`${minutes} minutes before the start`)
    } else {
      hour = examHour - arrivalHour;
      minutes = examTimeInMinutes - arrivalTimeInMinutes;
      if ( minutes >= 60) {
        hour = hour + 1
        minutes = minutes - 60
        if (minutes <10) {
          console.log('Early');
          console.log(`${hour}:0${minutes} hours before the start`);
        } else {
          console.log('Early');
          console.log(`${hour}:${minutes} hours before the start`);
        }
      }
    }
  } else {
    if ( examTimeInMinutes === arrivalTimeInMinutes) {
      console.log('On time');
    } else {
      minutes = (examTimeInMinutes - arrivalTimeInMinutes) / 60;
      console.log('On time');
      console.log(`${minutes} minutes before the start`)
    }
  }
}
examTime(["16",
"00",
"15",
"00"])






