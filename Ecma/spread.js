//spread operator
//c1.copying an array
let fruits=["apple","orange","mango"];
let newfruits=[...fruits];
console.log(newfruits);

//concatenating array/combing array
const number1=[1,2,3,4];
const number2=[4,5,6];
const newNumbers=[...number1,...number2];
console.log(newNumbers);//[ 1, 2, 3, 4, 5, 6 ]

//adding elements to existing array
let ffruits=["apple","orange","mango"];
ffruits.push('guava',"grapes");
ffruits.push(...["guava","grapes"]);
console.log(ffruits)
/**[
  'apple',  'orange',
  'mango',  'guava',
  'grapes', 'guava',
  'grapes'
]
 */

//usecase
//
const country="inada";
console.log(country.split(""));

console.log([...country]);

//rest parameter
//u can pass as many as parameter it will accpet

const sum=(a,b,c,d)=>{
   return a+b+c+d;
}

console.log(sum(1,2,3,4)); 
//rest
const susm=(...numbers)=>{
    console.log(typeof numbers);
     return numbers.reduce((accum,curVal)=>{
        (accum=accum+curVal),0
    });
}

//padding

//padstart()
const a="hajak";
const b=a.padStart(15);
console.log(b);//          hajak

//padEnd()
const c=a.padEnd(15);

console.log(susm(1,2,3,4)); 
