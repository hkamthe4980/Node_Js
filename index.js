// const data = require('./input');
// let arr=[1,2,3,4,5];

// console.log(data.demo());
// let result =arr.filter((item)=>{
//     return item>=2;

// })
// console.log(result);

// const fs = require('fs').writeFileSync;
// fs('code.txt',"Hemant kamthe");
// console.log(fs);
// const http = require("http");


// http.createServer((req,res)=>{
//     res.write("hello");
//     res.end();


// }).listen(4500)




// const colors = require('colors');
// console.log("package".green);


// console.warn("Hemant kamthe");


// const http = require('http');
// const data = require('./input')
// http.createServer((req,resp)=>{
//     resp.writeHead(201,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data))
//     resp.end();
// }).listen(5000);


// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("Invalid Input");
// }

// console.log(process.argv);

//Display files list from folder
// const fs = require('fs');
// const path = require('path');

// const dirpath = path.join(__dirname,'files');
// console.log(dirpath);

// for(let i=0;i<5;i++){
//     fs.writeFileSync(`${dirpath}/hello${i}.txt`,"Sample Files is Here");

// }

// fs.readdir(dirpath,(err,files)=>{
// files.forEach((item)=>{
//     console.log("File Name is:" ,item);

// })

// })

//create a file in specific folder


const fileSystem = require('fs');
const path = require('path');
const FilePath = path.join(__dirname,'CRUD');
const dirFileName = (`${FilePath}/crud.txt`)
// fileSystem.writeFileSync(dirFileName,'This is the crud file');

fileSystem.readFile(dirFileName,'utf-8',(err,item)=>{
    console.log(item);

})
fileSystem.appendFile(dirFileName,'We need to append this msg into a file',(err)=>{
    if(!err){
        console.log('file is up to date ');
    }

});

fileSystem.rename(dirFileName,`${FilePath}/newCrud.txt`,(err)=>{
    if(!err){
        console.log('file name is updated');
    }

})
fileSystem.unlinkSync(dirFileName)