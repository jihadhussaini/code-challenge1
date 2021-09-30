function descendingOrder(n){
    let stringN = n.toString();
    let arrN = stringN.split('');
    let descArr = arrN.sort((a, b) => b - a);
    let descOrder = parseInt(descArr.join(''));
    return descOrder;
  }