function noSpace(x){
    // bikin container
    // bikin for loop
    // bikin kondisi kalau bukan " ", maka tambahin jadi str baru, otherwise skip aja
    // return str baru
    let newStr = "";
    for (let i = 0; i < x.length; i++) {
      if (x[i] != " ") {
        newStr += x[i];
      } 
    }
    return newStr;
  }

  // Or can use this (using RegEx)
  function noSpace(x){
    return x.replace(/\s/g, '');
  }