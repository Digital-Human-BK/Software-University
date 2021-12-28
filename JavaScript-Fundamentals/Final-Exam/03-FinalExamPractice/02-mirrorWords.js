function mirrorWords([string]) {
  let pattern = /([@#])(?<one>[A-Za-z]{3,})\1{2}(?<two>[A-Za-z]{3,})\1/g
  let result = []
  let matchCount = 0;

  let match;
  while ((match = pattern.exec(string)) != null) {
    matchCount++;

    let reversed = match.groups.one
      .split("")
      .reverse()
      .join("")

    if (match.groups.two === reversed) {
      result.push(`${match.groups.one} <=> ${match.groups.two}`);
    }

  }

  if (matchCount === 0) {
    console.log('No word pairs found!');
  } else {
    console.log(`${matchCount} word pairs found!`);
  }

  if (result.length === 0) {
    console.log("No mirror words!");
  } else {
    console.log("The mirror words are:");
    console.log(result.join(", "));
  }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])