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


// const { promises } = require('dns');
// const fileSystem = require('fs');
// const path = require('path');
// const FilePath = path.join(__dirname,'CRUD');
// const dirFileName = (`${FilePath}/crud.txt`)
// // fileSystem.writeFileSync(dirFileName,'This is the crud file');

// fileSystem.readFile(dirFileName,'utf-8',(err,item)=>{
//     console.log(item);

// })
// fileSystem.appendFile(dirFileName,'We need to append this msg into a file',(err)=>{
//     if(!err){
//         console.log('file is up to date ');
//     }

// });

// fileSystem.rename(dirFileName,`${FilePath}/newCrud.txt`,(err)=>{
//     if(!err){
//         console.log('file name is updated');
//     }

// })
// fileSystem.unlinkSync(dirFileName)

// var a = 10;
// var b = 20;

// let watingdata = new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//     resolve(30)

//  },2000)

// })
// watingdata.then((data)=>{
//     b =data;
//     console.log(a+data);

// })

// const express = require('express')
// const app = express()

// app.get("",(req,resp)=>{
//     resp.send(`<input type = "text" placeholder = "Enter a Name" value="${req.query.name}"/>`)
// });
// app.get("/page",(req,resp)=>{
//     resp.send("response send to page")
// })
// app.listen(4000)


// const express = require('express');

// const path = require('path');




// const app = express();
// app.set('view engine', 'ejs');
// const PublicPath = path.join(__dirname,'public');

// console.log(PublicPath);
// // app.use(express.static(PublicPath));

// app.set('views', path.join(__dirname,'views'))
// app.get('/profile',(_,resp)=>{
   
//     const user={
//         name:"hemant",
//         age:22

//     }
//     resp.render('profile',{user}) 
//     });
// app.get('/index',(_,resp)=>{
//     resp.sendFile(`${PublicPath}/index.html`) 
//     });
// app.get('*',(_,resp)=>{
//     resp.sendFile(`${PublicPath}/nopage.html`) 
//     });

// app.listen(5000)


const express = require('express');
const app = express();
const reqFilter=require('./middleware')
const route = express.Router();

 route.use(reqFilter);


app.get('/' ,(req,resp)=>{
    resp.send("Home page")
})
app.get('/users',reqFilter,(req,resp)=>{
    resp.send("Users Page");
})
route.get('/contact',(req,resp)=>{
    resp.send("Contact Page")
})
route.get('/detail',(req,resp)=>{
    resp.send("Detail Page");
})
app.use('/',route)

app.listen(4000);