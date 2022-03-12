function argumentInfo(...params) {
  let occurences = {};
  let result = []
  params.forEach(el => {
    let type = typeof el;
    result.push(`${type}: ${el}`);

    occurences[type] = occurences[type] !== undefined
      ? occurences[type] + 1
      : 1;
  });

  Object.keys(occurences)
    .sort((a, b) => occurences[b] - occurences[a])
    .forEach(key => result.push(`${key} = ${occurences[key]}`));

  console.log(result.join('\n'));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })