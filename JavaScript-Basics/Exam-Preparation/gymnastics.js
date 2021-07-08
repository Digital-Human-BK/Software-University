function gymnastics(input) {
  let country = input[0];
  let type = input[1];

  let difficulty = 0;
  let playStyle = 0;

  switch (country) {
    case "Russia":
      switch (type) {
        case "ribbon": difficulty = 9.1; playStyle = 9.4; break;
        case "hoop": difficulty = 9.3; playStyle = 9.8; break;
        case "rope": difficulty = 9.6; playStyle = 9; break;
      }
      break;
    case "Bulgaria":
      switch (type) {
        case "ribbon": difficulty = 9.6; playStyle = 9.4; break;
        case "hoop": difficulty = 9.55; playStyle = 9.75; break;
        case "rope": difficulty = 9.5; playStyle = 9.4; break;
      }
      break;
    case "Italy":
      switch (type) {
        case "ribbon": difficulty = 9.2; playStyle = 9.5; break;
        case "hoop": difficulty = 9.45; playStyle = 9.35; break;
        case "rope": difficulty = 9.7; playStyle = 9.15; break;
      }
      break;        
  }
  let finalScore = difficulty + playStyle;
  let pointsTo = 20 - finalScore;

  console.log(`The team of ${country} get ${finalScore.toFixed(3)} on ${type}.`);
  console.log(`${((pointsTo / 20) * 100).toFixed(2)}%`);
}

gymnastics(["Italy", "hoop"])