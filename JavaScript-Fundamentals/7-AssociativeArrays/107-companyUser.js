function companyUser(array) {
  let list = {};

  for (const line of array) {
    let [company, userID] = line.split(" -> ");

    if (!list.hasOwnProperty(company)) {
      list[company] = [];
    }

    if (!list[company].includes(userID)) {
      list[company].push(userID);
    }
  }

  let sorted = Object.keys(list).sort()

  sorted.forEach(company => {
    console.log(company);
    list[company].forEach(userID => console.log(`-- ${userID}`))
  })
}
companyUser([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345'
]
)
companyUser([
  'SoftUni -> AA12345',
  'SoftUni -> CC12344',
  'Lenovo -> XX23456',
  'SoftUni -> AA12345',
  'Movement -> DD11111'
]
)