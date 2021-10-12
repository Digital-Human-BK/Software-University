function convertToJson(name, lastName, hairColor){
 let obj = {}
 obj.name = name;
 obj["lastName"] = lastName;
 obj.hairColor = hairColor;
 console.log(JSON.stringify(obj));
}
convertToJson('George',
'Jones',
'Brown'
)