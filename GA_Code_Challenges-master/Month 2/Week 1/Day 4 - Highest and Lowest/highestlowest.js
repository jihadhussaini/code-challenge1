function highAndLow(numbers){
    let arr = numbers.split(' ');
    let sortedArr = arr.sort((a,b) => a-b);
    let min = sortedArr[0];
    let max = sortedArr[sortedArr.length-1];

    return `${max} ${min}`
  }