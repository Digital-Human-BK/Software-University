function weekday(day) {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  if (day >= 1 && day <=7) {
    day = day -1;
    console.log(days[day]);
  } else {
    console.log("Invalid day!");
  }  
}
weekday(2)