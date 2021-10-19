function meetings(array) {

  let schedule = {};

  array.forEach(element => {
    let [day, name] = element.split(" ");
    if (schedule.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      console.log(`Scheduled for ${day}`);
      schedule[day] = name;
    }
  });

  for (const key in schedule) {
    console.log(`${key} -> ${schedule[key]}`);
  }
}
meetings(['Monday Peter',
  'Wednesday Bill',
  'Monday Tim',
  'Friday Tim']
)