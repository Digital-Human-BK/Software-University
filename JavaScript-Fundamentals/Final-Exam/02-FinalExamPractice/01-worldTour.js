function worldTour(input) {
  let actions = {
    'Add Stop': addStop,
    'Remove Stop': removeStop,
    'Switch': switchAll,
  }


  let stops = input.shift();

  let line;
  while ((line = input.shift()) != 'Travel') {
    let [command, ...rest] = line.split(':');
    actions[command](...rest);
    console.log(stops);
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);

  function addStop(index, string) {
    index = Number(index);
    if (validate(index)) {
      stops = stops.substring(0, index) + string + stops.substring(index);
    }
  }

  function removeStop(startIndex, endIndex) {
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);

    if (validate(startIndex) && validate(endIndex)) {
      stops = stops.replace(stops.substring(startIndex, endIndex + 1), '');
    }
  }

  function switchAll(oldStr, newStr) {
    if (stops.includes(oldStr)) {
      stops = stops.split(oldStr).join(newStr);
    }
  }

  function validate(index){
    return (index >= 0) && (index < stops.length);
  }

}
worldTour(["Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel"])