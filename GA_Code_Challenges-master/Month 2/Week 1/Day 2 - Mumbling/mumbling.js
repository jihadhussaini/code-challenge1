function accum(s) {
    const tempArray = [];
    const lowerCaseStr = s.toLowerCase();
    
    for(let i = 0; i < lowerCaseStr.length; i++) {
        let str = lowerCaseStr[i].toUpperCase();
        for(let j = 0; j < i; j++) {
        str += lowerCaseStr[i]
        }
        tempArray.push(str);
    }
    return tempArray.join("-");
}