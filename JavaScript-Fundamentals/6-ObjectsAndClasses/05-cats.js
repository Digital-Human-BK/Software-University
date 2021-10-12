function cats(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }

  }
  for (i = 0; i < array.length;i++){
    let [catName , catAge] = array[i].split(" ")
    let cat = new Cat(catName, catAge);
    cat.meow();
  }
}
cats(['Mellow 2', 'Tom 5'])