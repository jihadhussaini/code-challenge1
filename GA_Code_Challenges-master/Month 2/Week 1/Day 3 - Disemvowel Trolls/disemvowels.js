function disemvowel(str) {
    let noVowels = [];
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i ++ ) {
      if (!vowels.includes(str[i].toLowerCase())) {
        noVowels.push(str[i]);
      }
    }
    return noVowels.join('');
  }