const x = "1";
const y = "2";
console.log(x,y);
console.log();
// %s format variable to String
//%d format variable to integer
// console.log("I am %s and my age is %d","hemant",25);
// console.clear();
// console.count("i am hemant");
// console.count("i am hemant");
// console.count("i am sam");
// console.countReset("i am Hemant");
// console.count("I am hemant");

// const function1 =()=> console.trace();
// const function2 =()=>function1();

// function2()



// const sum = () => console.log(`the sum of 2 and 3 is :${2+3}`);
// const multilpy=()=>
//     console.log(`The multi is 2 and 3 is : ${2*3}`);

// const measureTime =()=>{
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("multilpy()");
//     multilpy();
//     console.timeEnd("multilpy()");
// }
// measureTime();


const ProgressBar = require("progress");

const Bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", 
    {total:20,

})
const timer = setInterval(()=>{
    Bar.tick();
    if(Bar.complete){

clearInterval(timer);

    }
},100);
const chalk = require("chalk")
console.log(chalk.blue("this is node js cource"));