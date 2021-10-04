function isIsogram(str){
    const lowStr = str.toLowerCase();
    const arrStr = lowStr.split("");
    let sortArr = arrStr.sort();
    for (let i = 0; i < sortArr.length - 1; i++) {
      if (sortArr[i] == sortArr[i + 1]) {
        return false;
      }     
    }
    return true;
  }