function repeatStr (n, s) {
    let checkRepeat = "";
    for(let i = 0; i < n; i++) {
        checkRepeat += s;    
    }
    return checkRepeat;
  }

  console.log(repeatStr(3, "Jihad"));