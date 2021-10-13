function movies(array) {
  let movies =[];
  for (let line of array) {
    if (line.includes("addMovie") ) {
      let newMovie={};
      let name = line.substring(9);
      newMovie.name = name;
      movies.push(newMovie);
    } else if (line.includes("directedBy")){

      let [name, director] = line.split(" directedBy ");
      
      movies.forEach(m => {
        if (m.name == name){
          m.director = director;
        }
      })
    } else if (line.includes("onDate")){

      let [name, date] = line.split(" onDate ");

      movies.forEach(m => {
        if (m.name == name) {
          m.date = date;
        }
      })
    }
  }

  movies.forEach(m => {
    if (m.name && m.date && m.director) {
      console.log(JSON.stringify(m));
    }
  })
}
movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen'
])