function rounding(n, precision) {
 if (precision > 15) {
   precision = 15;
 }
 n = parseFloat(n.toFixed(precision))
 console.log(n);

}
rounding(3.1415926535897932384626433832795, 2)