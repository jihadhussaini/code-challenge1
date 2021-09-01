class SmallestIntegerFinder {
    findSmallestInt(args) {
    let newSmallest;
   
      for (let i=0;i<args.length;i++){
          if(args[i]<=args[0]){
              args[0]  = args[i];    
              newSmallest = args[i];
          }
        }
      return newSmallest;
    }
  }

// or
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}