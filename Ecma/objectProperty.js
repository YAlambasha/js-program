//object properties -modern js

const name="vinod";
const age=30;
//tradintional
const person={name:name,age:age};
//using shorthand
const persons={name,age};


//Destructuring Arrays:
/**destructuring is javascript expresssion that makes it possible to unpack values from arrays or properties from 
 * objects,into distinct variables.that is we can extract data from arrays and objects and assign them to variable
 */


const numbers=[10,20,30];
// const first=number[0]; tradintal way
// const [first,second, third]=numbers;

console.log(first);


//inginoring element
const [,, third]=numbers;

//swap two varianles withoout using 3rd

let a=10;
let b=20;

let c=b;//c=20
b=a;//b=10
a=c;
console.log(a,b);
//wihout using third
[a,b]=[b,a];
console.log(a,b);

//destructing object
const user={name:"alam",age:30};
const myName=user.name;
console.log(myName);
{
const {age,name}=user;
console.log(age,name);
}