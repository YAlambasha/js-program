//high order function
//first class finction-it's just conacept
//first clas function means that functions can be treated as values,assignes to variables and passed around as arguments.
 

///high order function: a fumction that takes one or more functions as argument or returns a function as a result


//call back function:a function passed as an argument to anthor function and executed after the completion of a task.

function processUserInput(name, callnack){
    console.log("received input:"+name);
    callback(name);
}
function greetUser(name){
    console.log(`hello!${name}`);
}
processUserInput("alam",greetUser);
//callback              'highorder'



const mathoperation=(a,b, operation)=>{
    return operation(a,b);
};

const add=(a,b)=>{
    return a+b;
};
const sub=(a,b)=>{
    return b-a;
};
           //higher order fun   callback
console.log(mathoperation(5,15,add));
console.log(mathoperation(5,15, sub));

