function passwordGenerator([first, second, third]) {
  let password = first + second;

  let index = 0;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
      password = password.replace(password[i], third[index].toUpperCase());
      index++
      if (index >= third.length) {
        index =0;
      }
    }
  }

  password = password.split("").reverse().join("")
  console.log(`Your generated password is ${password}`);
}
passwordGenerator([
  'ilovepizza', 'ihatevegetables',
  'orange'
]
);
passwordGenerator([
  'easymoneyeazylife', 'atleasttencharacters', 'absolute'
]
);
passwordGenerator([
  'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed'
]
);