function schoolGrades(array) {

  let students = new Map();

  for (const line of array) {
    let tokens = line.split(' ');
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (students.has(name)) {
      students.set(name, students.get(name).concat(grades));
    } else {
      students.set(name, grades);
    }
  }

  let sorted = [...students].sort((a, b) => average(a, b));

  for (const key of sorted) {
    console.log(`${key[0]}: ${key[1].join(", ")}`);
  }

  function average(a, b) {
    let aSum = 0;
    a[1].forEach(element => aSum += element);

    let bSum = 0;
    b[1].forEach(element => bSum += element);

    let aAverage = aSum / a[1].length;
    let bAverage = bSum / b[1].length;

    return aAverage - bAverage;
  }

}
schoolGrades(['Lilly 4 6 6 5',
  'Tim 5 6',
  'Tammy 2 4 3',
  'Tim 6 6']
)