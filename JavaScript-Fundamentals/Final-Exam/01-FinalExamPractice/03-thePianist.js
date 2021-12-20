function thePianist(input) {
  //object with available actions
  let actions = {
    Add: add,
    Remove: remove,
    ChangeKey: changeKey,
  }
  //put pieces into collection
  let collection = {}

  let n = Number(input.shift());
  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = input.shift().split('|');
    collection[piece] = {
      composer,
      key,
    }
  }
  //execute each action
  while (input[0] != 'Stop') {
    let [command, ...rest] = input.shift().split('|');
    actions[command](...rest);
  }

  let sortedCollection =
    Object.keys(collection)
      .sort((a, b) => {
        return a.localeCompare(b) || a.composer.localeCompare(b.composer);
      });
    
  //print sorted collection
  for (const piece of sortedCollection) {
    console.log(`${piece} -> Composer: ${collection[piece].composer}, Key: ${collection[piece].key}`);
  }    

  //functions
  function add(piece, composer, key) {
    if (collection[piece] == undefined) {

      collection[piece] = {
        composer,
        key,
      }
      console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    } else {
      console.log(`${piece} is already in the collection!`);
    }
  }

  function remove(piece) {
    if (collection[piece] == undefined) {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    } else {
      delete collection[piece];
      console.log(`Successfully removed ${piece}!`);
    }
  }

  function changeKey(piece, key) {
    if (collection[piece] == undefined) {
      console.log(`Invalid operation! ${piece} does not exist in the collection.`);
    } else {
      collection[piece].key = key;
      console.log(`Changed the key of ${piece} to ${key}!`);
    }
  }
}
thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
])
console.log('\n=========================================\n');
thePianist([
  '4',
  'Eine kleine Nachtmusik|Mozart|G Major',
  'La Campanella|Liszt|G# Minor',
  'The Marriage of Figaro|Mozart|G Major',
  'Hungarian Dance No.5|Brahms|G Minor',
  'Add|Spring|Vivaldi|E Major',
  'Remove|The Marriage of Figaro',
  'Remove|Turkish March',
  'ChangeKey|Spring|C Major',
  'Add|Nocturne|Chopin|C# Minor',
  'Stop'
])