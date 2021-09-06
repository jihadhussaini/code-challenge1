function warnTheSheep(queue) {
    let lastIndex = queue.length - 1
    
    if (queue[lastIndex] === "wolf") return "Pls go away and stop eating my sheep";
  
    let wolfIndex = queue.findIndex((x) => x == "wolf");
    let sheepIndex = queue.length - wolfIndex - 1
      
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
    
  }