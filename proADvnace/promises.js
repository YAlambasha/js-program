//A promise is like a placeholder for the result of an asynchronous operation.

//promise--------------->pending------------->settled
                                    //[resolved     Rejected]
                
/**
 * a promise in js is an object that represents the eventual completion or failur
 *  of an synchromous opertion.it allow you to handle asynchronous operations are easily and cleanly by providing a way to write 
 * asynchromous code that looks sysnchrous */ 


//in simple term,a promise is like a placeholder for the result of an asynchronous operation.or a container for the 
//future result or value.

//it can be in one of three states:

//pending:initial state,neither fulfilled nor rejected.
//fulfilled(resolved):the operation completed successfully.
//rejected:the operation failed or encountered an error.


//using the promise constructor(class):

/*you can create a promise using the promise constructor.this invokves creating a new instance of the promise
*class,which takes a function as an argument.this function,often referred to as the executor function,"takes two parameters:
resolve and rejects you call resolve when the asynchronous operation is succesful and 
reject when it encounters an error.
 */                                   


const promise=new Promise(function(resolve,reject){
setTimeout(()=>{
    resolve("hiii");
},2000);
});

promise.then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
console.log("its ok")
});


// const promise=new Promise(function(resolve,react){
//     setTimeout(()=>{
//         reject("hiii");
//     },2000);
//     });
    
//     promise.then((res)=>{
//         console.log(res);
//     }).catch((error)=>{
//         console.log(error);
//     }).finally(()=>{
//     console.log("its ok")
//     });

//promise.all is used when you want to wait for all promises to complete successfully .reject state will throw error
//if 100 99 will complete if 1 will miss all will be reject
//promise.allsettled is used when you want to wait for all promises to complete,regardless of suces or failure and get infromation 
//about their outcomes
//promise.race is used when you are interested in the result of the first promise that completes,regradless of suces of falire


