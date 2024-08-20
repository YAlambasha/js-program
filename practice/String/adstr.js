//extracting string

//slice():extracts a part of a string and retunrs the extracted part in a new string
//slice() extracts up to but not inculding indexend

let tex="hello javascriot, welcome to our world";
let result=tex.slice(5,15);
console.log(result);//javascrio

//substring
/*
substring() extracts a part of a stirng and returns the extracted part in a new string.
1.js counts positions from zero.
2.substring() extracts up to but not inculding indexEnd same slice
*/
let sub=tex.substring(6);
let sub1=tex.substring(-6);
let sli=tex.slice(-6);
console.log(sub);//javascriot, welcome to our world
console.log(sub1);//ful date hello javascriot, welcome to our world
console.log(sli);
//at()
//the at() methos returns the character at a specified index(postion) in a string.
//1:it allows the use of negative indexs while chatAt( do not)

//interview 
let results=tex.slice(1);
let result1=tex.replace("h","");
let result2=tex.substring(1); 
let result3=tex.replace("javascriot","alam");
let result4=tex.replaceAll("javascriot","alam");
console.log(results);//ello javascriot, welcome to our world
console.log(result1);//ello javascriot, welcome to our world
console.log(result2);//ello javascriot, welcome to our world
console.log(result3);//hello alam, welcome to our world
console.log(result4);


