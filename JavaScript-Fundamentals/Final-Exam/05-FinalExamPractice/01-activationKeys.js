function activationKeys(input) {

  let actions = {
    Contains: (key, substr) => {
      if (key.includes(substr)) {
        console.log(`${key} contains ${substr}`);
      } else {
        console.log("Substring not found!");
      }
      return key;
    },

    Flip: (key, letterCase, start, end) => {
      let sub = key.substring(start, end);

      if (letterCase == "Upper") {
        key = key.replace(sub, sub.toLocaleUpperCase())
      } else {
        key = key.replace(sub, sub.toLocaleLowerCase());
      }
      console.log(key);
      return key;
    },

    Slice: (key, end, start) => {
      key = key.replace(key.substring(start, end), "");
      console.log(key);
      return key;
    }
  };

  let key = input.shift();
  let line = input.shift();

  while (line != "Generate") {
    let [command, ...rest] = line.split(">>>");
    key = actions[command](key, ...rest);

    line = input.shift();
  }

  console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate"])
activationKeys(["134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate"])