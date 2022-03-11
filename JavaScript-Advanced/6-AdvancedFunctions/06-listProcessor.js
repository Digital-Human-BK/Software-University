function solve(input) {
  function listProcessor(){
    let collection = [];
  
    return {
      add,
      remove,
      print,
    }
  
    function add(str) {
      collection.push(str);
    }
  
    function remove(str) {
      const result = collection.filter(element => element != str);
      collection = result;
    }
  
    function print (){
      console.log(collection.join());
    }
  }
  
  let func = listProcessor();

  input.forEach(element => {
    let [command, str] = element.split(' ');
    func[command](str)
  });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);