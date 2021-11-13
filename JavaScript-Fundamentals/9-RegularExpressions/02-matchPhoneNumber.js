function matchPhoneNumber([text]){
  let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

  let matches = text.match(regex);
  console.log(matches.join(", "));
}
matchPhoneNumber(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]);