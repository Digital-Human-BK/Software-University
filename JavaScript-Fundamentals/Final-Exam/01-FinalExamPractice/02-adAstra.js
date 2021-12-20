function adStra([string]) {
  let pattern = /([\|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,4})\1/g

  let result = [];
  let days = 0;
  let cal = 0;

  let match;
  while ((match = pattern.exec(string)) != null) {
    let info = `Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.cal}`
    result.push(info);

    cal += Number(match.groups.cal);
  }

  days = Math.floor(cal / 2000);

  if (days == 0) {
    console.log('You have food to last you for: 0 days!');
  } else {
    console.log(`You have food to last you for: ${days} days!`);
    console.log(result.join('\n'));
  }
}
adStra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
adStra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])
adStra(['Hello|#Invalid food#19/03/20#450|$5*(@'])