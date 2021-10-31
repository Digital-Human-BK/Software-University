function bookShelf(input) {
  let shelf = {};

  for (const line of input) {
    if (line.includes('-> ')) {
      addShelf(line);
    } else {
      addBookToShelf(line);
    }
  }

  let sortedShelves = Object.keys(shelf).sort((a, b) => {
    return shelf[b].books.length - shelf[a].books.length;
  });

  sortedShelves.forEach(id => {
    console.log(`${id} ${shelf[id].genre}: ${shelf[id].books.length}`);
    let sortedBooks = shelf[id].books.sort((a,b) => a.localeCompare(b));
    sortedBooks.forEach(book => {
      console.log(book);
    })
  })

  function addShelf(line) {
    let [id, genre] = line.split(' -> ');
    if (shelf[id] == undefined) {
      shelf[id] = {
        genre,
        books: []
      }
    }
  }

  function addBookToShelf(line) {
    let [title, rest] = line.split(': ');
    let [author, genre] = rest.split(', ');
    let shelves = Object.keys(shelf);
    for (const id of shelves) {
      if (shelf[id].genre == genre) {
        let book = `--> ${title}: ${author}`
        shelf[id].books.push(book);
      }
    }
  }

}
bookShelf(['1 -> history',
  '1 -> action',
  'Death in Time: Criss Bell, mystery',
  '2 -> mystery',
  '3 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Hurting Secrets: Dustin Bolt, action',
  'Future of Dawn: Aiden Rose, sci-fi',
  'Lions and Rats: Gabe Roads, history',
  '2 -> romance',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi',
  'Pilots of Stone: Brook Jay, history'])