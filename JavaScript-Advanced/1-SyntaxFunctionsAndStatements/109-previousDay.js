function previousDay(y, m, d){
const today = new Date(y,m-1,d)
const yesterday = new Date(today)

yesterday.setDate(yesterday.getDate() - 1)

console.log(`${yesterday.getFullYear()}-${yesterday.getMonth()+1}-${yesterday.getDate()}`);
}
previousDay(2016, 3, 1);
previousDay(2016, 10, 3)