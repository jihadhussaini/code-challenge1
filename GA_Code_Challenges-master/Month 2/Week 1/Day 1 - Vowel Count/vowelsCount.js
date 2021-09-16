function getCount(str) {
    let vowelsCount = 0;
    let vowelArr = ["a", "i", "u", "e", "o"]
    for(let vowel of str) {
        if(vowelArr.includes(vowel)) {
            vowelsCount++
        }
    }
    return vowelsCount;
  }