function createFormatter(separator, symbol, symbolFirst, outerFunc) {
  let formatter = function (value) {
    return outerFunc(separator, symbol, symbolFirst, value);
  }
  return formatter;
}
//alternative solution;
//(sep, sym, sym1, func) => val => func(sep, sym, sym1, val);

function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + ' ' + result;
  else return result + ' ' + symbol;
}


let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
