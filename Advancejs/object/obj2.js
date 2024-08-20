//objects useful methods
const product={
    id:1,
    name:"laptop",
    category:"computer",
    brand:"9999",
    stock:50,
    description:
    "powerful laptop with a quad-core i5 processeor,8gb ram,256gb ssd",
    image:"image link ",

};

//1:object.keys():returns an array containing thhe names of all enumerable own properties of an object
let keys=Object.keys(product);
console.log(keys);
//2.OBJECT.VALUE()
let VALUE=Object.values(product);
console.log(VALUE);
//3 OBJECT.entries():returns an array containing arrays of key-value pairs for each enumerable own property of object
let entrties=Object.entries(product);
console.log(entrties);

//4 object.hasOwnProperty():retunrs a boolean indicating wheter the object has the specifed property as an own property
console.log(product.hasOwnProperty("name"));
console.log(product.hasOwnProperty("isStudent"));

//5.object.assign():
//object.freeze():stop