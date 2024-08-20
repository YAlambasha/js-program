//string in js are a fundamental data type that respresent a sequence of charachter.

//string properties
//length:property that returns the length of string 


/////////////
//escape character:the \is used as an escape charcahter

/////////

// let text="my name is "alam basha"";
let text='my name is alam basha alam';
let text1='my name is \"alam basha\"';

console.log(text);//my name is alam basha alam
console.log(text1);//my name is "alam basha"

//string search ,methods

//indexOf():method returns the index (position) of the first occurance of a string in a string,or it returns -1 id the sring is not found
//synatx:indexOf(searchingString,position

console.log(text.indexOf("alam"));//11

//array.form()
let strArr=Array.from(text);
console.log(strArr);
/**[
  'm', 'y', ' ', 'n', 'a', 'm',
  'e', ' ', 'i', 's', ' ', 'a',
  'l', 'a', 'm', ' ', 'b', 'a',
  's', 'h', 'a', ' ', 'a', 'l',
  'a', 'm'
] */
let strMap=strArr.map((curElem,index)=>
    `${curElem}-${index}`
);
console.log(strMap);
/*
[
  'm-0',  'y-1',  ' -2',  'n-3',
  'a-4',  'm-5',  'e-6',  ' -7',
  'i-8',  's-9',  ' -10', 'a-11',
  'l-12', 'a-13', 'm-14', ' -15',
  'b-16', 'a-17', 's-18', 'h-19',
  'a-20', ' -21', 'a-22', 'l-23',
  'a-24', 'm-25'
]
*/ 

//lastindexof
//let text='my name is alam basha alam';
let indexof=text.indexOf("alam");
let index=text.lastIndexOf("alam");
let indexf=text.lastIndexOf("alam",40);
console.log(indexof);//11
console.log(index);//22
console.log(indexf);//22

//search():the search() searches a string for a string (or a regular expression) and returns the postion of the match.

let Searchs=text.search("alam");//-1 alam
console.log(Searchs);//11

//search( cannot take a second start postion arugment.
//the indexof() cannnot take powerful search values(regular expressions).
//they accpet the same arrguments(paratmeter)and return the same value.

//match:returns an array of the matched values or null if no match is found
let  match=text.match("alam");
let  unmatch=text.match("dell");
console.log(match);
console.log(unmatch);
/*
[
  'alam',
  index: 11,
  input: 'my name is "alam basha alam"',
  groups: undefined
]
null
Object [RegExp String Iterator] {}
/

/*matchall:returns iterator of all matches,providng detalied infromation about each match.returns an empty iterator if no match is found.
*/

let matchResult=text.matchAll("alam");
console.log(matchResult);//Object [RegExp String Iterator] {}
console.log(...matchResult);
/*
[
  'alam',
  index: 12,
  input: 'my name is "alam basha alam"',
  groups: undefined
] [
  'alam',
  index: 23,
  input: 'my name is "alam basha alam"',
  groups: undefined
]
*/ 
for(let item of matchResult){
    console.log("hi"+item[0]);
}
//includes():returns true if the string contains the specifed value and false otherwise
let inculde=text.includes("alam");
console.log(inculde);///true
//no regular expression in inculdes

//startwith():the startwith() method returns true if a string begins with a specified value.otherwise it returns false

let starwith=text.startsWith("welcome");
let starwith1=text.startsWith("alam",6);
console.log(starwith);//false
console.log(starwith1);//true

//endswith():retunrs true if astring ends with a spefied value otherwise return false

let end=text.endsWith("alam");
console.log("hi"+end);//true