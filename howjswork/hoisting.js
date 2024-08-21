//hoisting is a js mechanism where variables and function declartions are moved to the top of their scope before code execution.this means that no matter where function and variables are declared.
//they are moved to the top of their scope regardless of wherther their scope is global or local


//const and let will not workin
console.log(myVar);
greet();

var myVar=10;
function greet(){
    console.log("welcome,if you are reading this");

}