class List {
  constructor() {
    this.list = []
    this.size = 0;
  }
  add(value) {
    this.list.push(value);
    this.size = this.list.length;
    this.list.sort((a, b) => a - b);
  };
  remove(index) {
    if (index < 0 || index >= this.list.length) {
      throw new RangeError('Index out of bound!');
    } else {
      this.list.splice(index, 1);
      this.list.sort((a, b) => a - b);
      this.size = this.list.length;
    }
  };
  get(index) {
    if (index < 0 || index >= this.list.length) {
      throw new RangeError('Index out of bound!')
    } else {
      return this.list[index];
    }
  };
}
let list = new List();
list.add(5);
list.add(7);
list.add(6);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
console.log(list.list);