function deserializeString(input) {
  let size = 0;
  for (const line of input) {
    if (line == 'end') {
      break;
    }
    let string = line.substring(2);
    string = string.split('/');
    size += string.length;
  }

  let result = [];
  result.length = size;

  for (const line of input) {
    if (line == 'end') {
      break;
    }
    let char = line[0];
    let string = line.substring(2);
    string = string.split('/');

    for (const n of string) {
      let index = Number(n);
      result[index] = char;
    }
  }
  console.log(result.join(''));
}
deserializeString(["a:0/2/4/6",
  "b:1/3/5",
  "end"]
)
deserializeString(["a:0/3/5/11",
  "v:1/4",
  "j:2",
  "m:6/9/15",
  "s:7/13",
  "d:8/14",
  "c:10",
  "l:12",
  "end"]
)