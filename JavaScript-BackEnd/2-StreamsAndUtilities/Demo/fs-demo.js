const fs = require('fs');
// const fs = require('fs').promises; used for the last example with async func


// bad practice as its blocking processes
// const data = fs.readFileSync('./file.txt', 'utf-8')
// console.log(data);


// async way of reading files
// fs.readFile('./file.txt', 'utf-8', (err, data) => {
//   console.log(data);
// })


// required ('fs').promises
// async function getData(){
//   const data = await fs.readFile('./file.txt', 'utf-8');
//   console.log(data);
// }
// getData();


// return array of items in the given dir
// const list = fs.readdir('./', 'utf-8', ((err, items)=> {
//   console.log(items);
// }));


// creates new dir
// fs.mkdir('./newDir', err => {
//   if(err){
//     throw new Error(err.message);
//   }
// });


//deletes dir
// fs.rmdir('./newDir', err => {
//   if(err){
//     throw new Error(err.message);
//   }
// });


//renames file ot dir, can also move file/dir if you provide diff path
// fs.rename('./file.txt', './demo.txt', err => {
//   if(err){
//     throw new Error(err.message);
//   }
// })


//create new file or overwrite existing files data
// fs.writeFile('./demo.txt', 'This is the new data', err => {
//   if (err) {
//     throw new Error(err.message);
//   }
// })

//delete files
// fs.unlink('./demo.txt', err => {
//   if (err) {
//     throw new Error(err.message);
//   }
// });