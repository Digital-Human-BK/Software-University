// const fs = require('fs');
const fsPromise = require('fs').promises;
// const fsPromise = require('fs/promises');


//sync version. To be used for learning purposes
// const text = fs.readFileSync('./index.html', 'utf-8');
// console.log(text);


//default async version
// fs.readFile('./index.html', 'utf-8', (err, data) => {
//   if(err){
//     throw new Error(err);
//   }
//   console.log(data);
// })
// console.log('END');


//using promises
// fsPromise.readFile('./index.html', 'utf-8')
// .then(text => {
//   console.log(text);
// }).catch(err => {
//   throw Error(err);
// });

//using async-await func

async function readFile(path){
  let data = await fsPromise.readFile(path, 'utf-8');
  console.log(data);
}
readFile('./index.html');

console.log('END');