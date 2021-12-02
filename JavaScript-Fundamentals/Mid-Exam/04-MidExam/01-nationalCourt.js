function nationalCourt(input) {
  let [e1, e2, e3, ppl] = input.map(Number);
  let hour = 0;
  while (ppl > 0) {
    hour++;
    if (hour % 4 != 0) {
      ppl -= e1 + e2 + e3;
    }
  }
  console.log(`Time needed: ${hour}h.`);
}
nationalCourt(["5", "6", "4", "20"]);
nationalCourt(["1", "2", "3", "45"]);
nationalCourt(["3", "2", "5", "40"]);