function filterEmployees(jsonInput, criteria) {
  const [key, value] = criteria.split('-');

  const employees = JSON.parse(jsonInput)
  const result = employees.filter(employee => {
    if (criteria === 'all') {
      return employee;
    } else {
      if (employee[key] == value) {
        return employee;
      }
    }
  });

  result.forEach((emp, i) => {
    console.log(`${i}. ${emp.first_name} ${emp.last_name} - ${emp.email}`);
  });
}

filterEmployees(`[{
  "id": "1",
  "first_name": "Kaylee",
  "last_name": "Johnson",
  "email": "k0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Johnson",
  "email": "kjost1@forbes.com",
  "gender": "Female"
}, {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}, {
  "id": "4",
  "first_name": "Evanne",
  "last_name": "Johnson",
  "email": "ev2@hostgator.com",
  "gender": "Male"
}]`,
  'last_name-Johnson'

);
console.log(`=================`);

filterEmployees(`[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`,
  'gender-Female'
)