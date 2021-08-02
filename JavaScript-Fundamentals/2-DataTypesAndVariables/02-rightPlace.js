function rightPlace(string, char, stringToMatch) {
let res = string.replace("_", char);
let outcome = res ===stringToMatch ? "Matched" : "Not Matched";
console.log(outcome); 
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')