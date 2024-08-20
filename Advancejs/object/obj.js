//creating objects
//they are serval ways to create  objects .most common one is suing object literals

const product={
    id:1,
    pName:"laptop",
};
let person={
    name:"dell",
    age:30,
    isStudent:false,
    greet:function(){
        console.log("welcome to word best css");
    }
}
let persons={
    name:"dell",
    age:30,
    "is'Student":false,
    greet:function(){
        console.log("welcome to word best css");
    }
}

//Accessing properties:
//you can access object properties using dot notation or square bracket notation
console.log(product);
console.log(person.isStudent);
console.log(persons["is'Student"]);


//adding and modifing
person.job="web dev";
person.age=18;
console.log(person); 
person['age']=20;
console.log(person);

//methods:method in objects are functions associated with the object.they can be invoked using the same notation as properties

console.log(person.greet());

//we can add dyamic keys in an object
let idType="studentId";
 
let student={
    [idType]:"A123456",
    sName:"vinod",
    sAge:29,
    isStudent:true,
    greet:function(){
        console.log(
            `hey,my ${idType} is ${student[idType]}  and my name is ${student.sName}.`
//hey,my studentId is A123456  and my name is vinod.

        );
    },
};
console.log(student);
/**{
  studentId: 'A123456',
  sName: 'vinod',
  sAge: 29,
  isStudent: true,
  greet: [Function: greet]
} */
console.log(student.greet());

//data modling
/**data modeling is the process of creating a visual respresentation of either a whole infromation system or parts of it to communicate
 * connections between data points and structures.the goal is to illustrate the types of data used and stored within the system
 
*/
