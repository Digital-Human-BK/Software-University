function cookingByNumbers(...args) {
  let n = Number(args.shift());

  let commands = {
    chop: () => n / 2,
    dice: () => Math.sqrt(n),
    spice: () => n += 1,
    bake: () => n *= 3,
    fillet: () => n -= (n * 0.2),
  }

  for (const action of args) {
    n = commands[action]()
    console.log(n);
  }
}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')