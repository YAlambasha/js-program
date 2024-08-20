//pangram a-z 26 letter contain madetry

const pangramchecker= (str)=>{
  let inputArr=str.toLowerCase().split("");
  console.log(inputArr);  
  const values=inputArr.filter((curElem)=>{
    curElem.charCodeAt()>="a".charCodeAt()&&
    curElem.charCodeAt()<="z".charCodeAt()
  
  });
  return new Set(values).size===26;
};

console.log(pangramchecker("the quicl broen fox jumps over the lazy dog"));//false