//scope in js refers to the contect in which variables are declared and accessed.it defines the visibilty and lifetime of variable..
//when var is declared it is bounde to sepecfic scope.

///we have a global scope,function scope and block scope


//lexical scope:act like manager

var a =5;
var b=10;


//scope chaining when looking for the value of a variable checks the current scope and then looks in the outer scopes
// until it finds the varibale or reaches the gloal scope.



//closure
//a closure is created when an innner function has acess to the variables of its outer function,even after the 
//outer function has finished executing


function outerFunction(){
    var outerVariable="i'm from outer";

    function innerFunction(){
        console.log(outervariable);
    }
    return innerFunction;
}

var closureFunction=outerFunction();
closureFunction();
console.dir(closureFunction);


function multiplier(factor){
    return function(number){
        console.log(number,factor);
        return number*factor;
    };
}

const double=multiplier(2);
console.log(double(5));