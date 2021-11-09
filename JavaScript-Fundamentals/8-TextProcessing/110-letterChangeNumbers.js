function letterChangeNumbers(str) {

  let array = str.split(' ').filter(x => x.length !=0);
  
  let result = 0;

  array.forEach(item => {
    let first = item[0];
    let last = item[item.length - 1];

    let num = Number(item.substring(1, item.length - 1));
    
    let firstPos = 0;
    let lastPos = 0;


    if (first.charCodeAt(0) >= 97 && first.charCodeAt(0) <= 122) {
      firstPos = first.charCodeAt(0) - 96;
      num *= firstPos;
    } else {
      firstPos = first.charCodeAt(0) - 64;
      num /= firstPos;
    }

    if (last.charCodeAt(0) >= 97 && last.charCodeAt(0) <= 122) {
      lastPos = last.charCodeAt(0) - 96;
      num += lastPos;
    } else {
      lastPos = last.charCodeAt(0) - 64;
      num -= lastPos;
    }

    result += num;
  });

  console.log(result.toFixed(2));

}
letterChangeNumbers('P34562Z q2576f   H456z')
letterChangeNumbers('a1A')
letterChangeNumbers('A12b s17G')