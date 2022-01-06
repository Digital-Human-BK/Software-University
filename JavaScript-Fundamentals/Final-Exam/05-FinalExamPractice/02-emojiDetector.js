function emojiDetector([input]) {
  //calculate treshold
  let coolTreshold = input
    .match(/\d/g)
    .map(Number)
    .reduce((a, b) => a * b)

  //match valid emoji
  let pattern = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/g;
  let validEmojis = input.match(pattern)

  //filter cool ones
  let coolEmojis = validEmojis.filter(emoji => {

    let coolness = emoji
      .slice(2, -2)
      .split('')
      .reduce((a, b) => a + b.charCodeAt(), 0);

    return coolness > coolTreshold ? emoji : false;    
  })

  //print output
  console.log(`Cool threshold: ${coolTreshold}`);
  console.log(`${validEmojis.length} emojis found in the text. The cool ones are:`);
  console.log(coolEmojis.join("\n"));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
console.log("================");
emojiDetector(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])
console.log("================");
emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])