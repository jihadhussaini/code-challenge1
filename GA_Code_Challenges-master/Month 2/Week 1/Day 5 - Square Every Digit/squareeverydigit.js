function squareDigits(num){
    let n = num.toString();
    let tempArr = [];
    for (let i = 0; i < n.length; i++) {
      tempArr[i] = n[i] * n[i];
    }
    let square = parseInt(tempArr.join(''));
    return square;
  }