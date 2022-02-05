function calorieobject(products){
  const result = {};
  for (let i =0; i < products.length; i+=2) {
    let name = products[i];
    let cal = Number(products[i+1]);
    result[name] = cal;
  }
  console.log(result);
}
calorieobject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieobject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])