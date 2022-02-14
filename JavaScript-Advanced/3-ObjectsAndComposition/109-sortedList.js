function createSortedList() {
  let obj = {
    numbers: [],
    size: 0,

    add(n) {
      this.numbers.push(n);
      this.size++;
      this.numbers.sort((a, b) => a - b);
    },
    remove(i) {
      if (this.numbers[i] !== undefined) {
        this.numbers.splice(i, 1);
        this.size--;
      }
    },
    get(i) {
      if (this.numbers[i] !== undefined) {
        return this.numbers[i];
      }
    },
    
  };

  return obj;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
