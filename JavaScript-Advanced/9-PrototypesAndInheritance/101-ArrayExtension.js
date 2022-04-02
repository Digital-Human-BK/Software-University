(function solve() {
  Array.prototype.last = function () {
    return this[this.length - 1];
  };

  Array.prototype.skip = function (n) {
    if (typeof n == 'number' && this[n] != undefined) {
      let result = [];
      for (let i = n; i < this.length; i++) {
        result.push(this[i]);
      }
      return result;

    } else {
      if (this[n] == undefined) {
        throw new RangeError('Index out of bound');
      }
      throw new TypeError('Argument is not a number!')
    }
  };

  Array.prototype.take = function (n) {
    if (typeof n == 'number' && this[n] != undefined) {
      let result = [];
      for (let i = 0; i < n; i++) {
        result.push(this[i]);
      }
      return result;

    } else {
      if (this[n] == undefined) {
        throw new RangeError('Index out of bound');
      }
      throw new TypeError('Argument is not a number!')
    }
  };

  Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i]
    }
    return sum;
  };

  Array.prototype.average = function(){
    return this.sum() / this.length;
  }
}
)();

let arr = [1,2,3,4];

console.log(arr.take());
