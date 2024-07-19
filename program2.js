//Hash Tag Genrator


const generateHash=(str)=>{
    if(str.length>280 || str.trim().length === 0){
        return false;
    }
    str=str.split(" ");
    str=str.map((curElem)=>
        
    curElem.replace(curElem[0], curElem[0].toUpperCase())
    // curElem.charAt(0).toUpperCase()+curElem.slice(1)    
);
    str=str.join("");
    return str;
}





console.log(generateHash("my name is alam basha"));