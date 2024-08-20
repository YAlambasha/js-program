//passing by value:when passing by value ,a copy of the primitive value is created and passed to function or assigned
//to a variable.any changes made to the copy don not affect the original value.

let a=10;
const modifyValue=(x)=>(x=20);
console.log(modifyValue(a));//20
console.log(a);//10

//passing by refrenece:when passing by reference a refernce to the memory location of the object is passed to the function 
//or assigned to a variable.any changes made to the object through this refernce will affect the original object.

let obj={id:5,name:"kodifier"};
let obj1=obj;
obj1.name="thapa techinical";

console.log(obj1);
console.log("orignal",obj);//orignal { id: 5, name: 'thapa techinical' }

//object.assign() is used to copy properties from one or more source objects to a target object.
let newObj=Object.assign({},obj);
newObj.name="thapa techn";
console.log(newObj);
console.log("original",obj);

//two objects are equal only if they refer to the same object
const obj4={name:"dell"};
const obj5={name:"noise"};
const obje6=obj4;
const isEqual=obj4 == obj5? true:false;
console.log(isEqual);