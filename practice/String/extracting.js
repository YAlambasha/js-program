//extracting string

/*
they are 3 methods for extracting string characters

//charAt(position)
charcodeAt(pos)
at(pos)


charAT():the charat() method returns the character at a specifed index(position )in a string
*/
let tex="hello javascriot, welcome to our world";
let result=tex.charAt(6);
let result1=tex.charAt(-6);
console.log(result);//j
console.log(result1);//empty

//charcodeAt():method returns the code of the character at a specifed index in a string.mthod returns utf 16 code(integer b/e 0 and 65535)
let result2=tex.charCodeAt(6);//106
console.log(result2);

//at:es2022 method returns the charchater at a specified index (pos) in a string.it returns the same as carAt()
//it allows the use of negative indexs while charat() dont
// let atm=tex.at(-6);
// let atm1=tex.at(6);
// console.log(atm);
// console.log(atm1);

let cha="Alam";
let conver=cha.toUpperCase();
let conver1=cha.toLowerCase();
console.log(conver);//ALAM
console.log(conver1);//ala,

//trim:remove white space both ends of the string
let text="     helllo, worlds    ";
console.log(text.trim());//helllo, worlds
//split:splits the string into an array  of substring based on a specified delimeter
console.log(text.split(""));
console.log(text.split("").reverse());
/*
[
  ' ', ' ', ' ', ' ', ' ',
  'h', 'e', 'l', 'l', 'l',
  'o', ',', ' ', 'w', 'o',
  'r', 'l', 'd', 's', ' ',
  ' ', ' ', ' '
]
[
    ' ', ' ', ' ', ' ', 's',
    'd', 'l', 'r', 'o', 'w',
    ' ', ',', 'o', 'l', 'l',
    'l', 'e', 'h', ' ', ' ',
    ' ', ' ', ' '
  ]
*/
//join string to array
console.log(text.split("").reverse().join());// , , , ,s,d,l,r,o,w, ,,,o,l,l,l,e,h, , , , , 


//print the letter 'a" through z' new line
for(let char=97;char<=122;char++){
    console.log(String.fromCharCode(char));
}

//write function to count the number of vowles in a string

//write a function to check if all the vowels presents in a string or not
const checkAllvowelPresent=(str)=>{
const vowels="aeiou";
for(let char of vowels){
    console.log(char);
    console.log(str.includes(char));
    if(!str.includes(char)){
        return false;
    
    }
}
return true;

};
console.log(checkAllvowelPresent("my name is alam"));
/**a
true
e
true
i
true
o
false
u
false
undefined
 */
const countVowel=(str)=>{
    const vowels="aeiou";
    let count=0;
    for(let char of vowels){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
};
console.log(countVowel("Hello ae i o u world"));