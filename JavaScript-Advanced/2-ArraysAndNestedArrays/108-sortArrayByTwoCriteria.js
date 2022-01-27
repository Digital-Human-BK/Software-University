function sortArray(array) {
  return array.sort(sortFunc).join('\n');

  function sortFunc(a, b) {
    return a.length - b.length || a.localeCompare(b);
  }
}
sortArray(['alpha',
  'beta',
  'gamma']
)
sortArray(['Isacc',
  'Theodor',
  'Jack',
  'Harrison',
  'George']
)
sortArray(['test',
  'Deny',
  'omen',
  'Default']
)