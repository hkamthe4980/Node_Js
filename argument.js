const minimist = require("minimist");
// console.log(process.argv.slice(2)[0]);
// process.argv.forEach((val,index)=>{
//     console.log(`${index}:${val}`);
// })

const argv = minimist(process.argv.slice(2));
console.log(argv.name);
