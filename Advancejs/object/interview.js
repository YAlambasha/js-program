const target={a:1,b:2};
const source={b:3,c:4};

const mergedObject=Object.assign({},target,source);
console.log(mergedObject);//{ a: 1, b: 3, c: 4 }
//without source {a:1,b:2}

