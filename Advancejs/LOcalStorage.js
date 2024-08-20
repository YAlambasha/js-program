/**
 * LOCAL STORAGE
 * 1.the localstorage object allows you to save key/value pairs in the broswer.
 * the localstorage object stores data with no expiration date.
 * the data is not deleted  when teh browser is closed and are avaliable.
how to add the data from localstorage
localStorage.setItem("youtubejscourse","addingData");

how to get the data from localstrage
localStorage.getItem("youtubeJscOURSE");

HOW TO REMOVE THE DATA FROM LOCALSTORAGE
localStorgae.removeItem("YOUTUBEJS COURSE")

Loclastorage can only store string,so when you want to store a coplex data structure like an array or an object,ypu need to convert it yo a string using json.stringify
*/

//json.stringify:convert a js object into a json string.
//use ful when youi want too send data to a server or store it in a text file, as json is commmon data interchange formate

const data={name:"alam",age:24,city:"pune"};
const jsonString=JSON.stringify(data);
console.log(jsonString);
//output:'{"name":"vinod","age":30,"city":"pune"}'

//json.parse:converts a json string into a js object
//use ful when you recive json data from a server or read it from a file and you want to work with it as a js 
const jsonStringSdata={name:"alam",age:24,city:"pune"};
const ParsedData=JSON.stringify(jsonStringSdata);
console.log(ParsedData);
//output:{name:"vinod",age:30,city:"pune"}
