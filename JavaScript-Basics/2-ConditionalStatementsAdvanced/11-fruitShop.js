function solve(input) {
  let fruit = input[0];
  let day = input[1];
  let quantity = Number(input[2]);
  let money = 0;

  if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
      switch (fruit) {
          case "banana":
              money = quantity * 2.50;
              break;
          case "apple":
              money = quantity * 1.20;
              break;
          case "orange":
              money = quantity * 0.85;
              break;
          case "grapefruit":
              money = quantity * 1.45;
              break;
          case "kiwi":
              money = quantity * 2.70;
              break;
          case "pineapple":
              money = quantity * 5.50;
              break;
          case "grapes":
              money = quantity * 3.85;
              break;
          default:
              console.log("error");
              return;

      }
      console.log(money.toFixed(2));

  } else if (day === "Saturday" || day === "Sunday") {
      switch (fruit) {
          case "banana":
              money = quantity * 2.70;
              break;
          case "apple":
              money = quantity * 1.25;
              break;
          case "orange":
              money = quantity * 0.90;
              break;
          case "grapefruit":
              money = quantity * 1.60;
              break;
          case "kiwi":
              money = quantity * 3;
              break;
          case "pineapple":
              money = quantity * 5.60;
              break;
          case "grapes":
              money = quantity * 4.20;
              break;
          default:
              console.log("error");
              return;

      }
      console.log(money.toFixed(2));

  } else {
      console.log("error");

  }
}
solve(["tomato", "Monday", "0.5"])
