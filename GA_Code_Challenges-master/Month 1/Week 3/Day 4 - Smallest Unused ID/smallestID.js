// Solution
function nextId(ids) {
    // Bikin container lowestUnusedID
    // sortir biar gampang ngurutnya
    // bikin loop checker nya
    let lowestUnusedId = 0;
    let sortedIds = ids.sort((a, b) => a - b);
    
    for (let i = 0; i < sortedIds.length; i++) {
      if (lowestUnusedId === sortedIds[i] && lowestUnusedId !== sortedIds[i + 1]) {
        lowestUnusedId++;
      }
      else if (lowestUnusedId !== sortedIds[i + 1]) {
        return lowestUnusedId;
      }
    }
    return lowestUnusedId
  }



// Solusi lain
  function nextId(ids){
    for (i = 0; i < ids.length; i++) { 
        if (ids.indexOf(i) == -1){
          return i;
        }
      }
      return ids.length;
  }