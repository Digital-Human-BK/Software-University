(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (typeof str == 'string') {
      if (this.startsWith(str)) {
        return this.toString();
      } else {
        return str + this;
      }
    } else {
      throw new TypeError('Invalid argument type!')
    }
  };

  String.prototype.ensureEnd = function (str) {
    if (typeof str == 'string') {
      if (this.endsWith(str)) {
        return this.toString();
      } else {
        return this + str;
      }
    } else {
      throw new TypeError('Invalid argument type!')
    }
  };

  String.prototype.isEmpty = function () {
    if (this.toString() == '') {
      return true;
    } else {
      return false;
    }
  };

  String.prototype.truncate = function (n) {
    if (typeof n != 'number') {
      throw new TypeError('Argument must be a number!');
    }
    let str = this.toString();

    if (str.length <= n) {
      return str;
    }

    if (str.includes(' ')) {
      let words = str.split(' ');
      do {
        words.pop();
      } while (words.join(' ').length + 3 > n);
      return `${words.join(' ')}...`
    }

    if (n > 3) {
      return `${str.slice(0, n - 3)}...`;
    } else {
      return `${'.'.repeat(n)}`
    }
  };

  String.format = function (str, ...params) {

    for (let i = 0; i < params.length; i++) {
      str = str.replace(`{${i}}`, params[i]);
    }
    return str;
  };

})();


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
'dog');
console.log(str);