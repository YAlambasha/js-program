//callback hell
/**
 *callback hell,also knwon as the pyramid of dom,refers to a situtaion in asynchronous js programmming
  where multiple nested callbacks are used to handle asynchronous operations.this often results in
   code that is difficult to read,understand and maintain 
due to its deeply nested structure

 */

const getStudentData=()=>{
setTimeout(()=>{
console.log("hi my name is alam");
setTimeout(()=>{
    console.log("hi ajks");
    setTimeout(()=>{
        console.log("hi del kald;as");
        setTimeout(()=>{
            console.log("hi asasd");
        },1000);
    },1000);
},1000);
},1000)
};
getStudentData();