function generatePairs(m, n) {
    const newArr = [];
    for (let i = m; i <= n; ++i)
    for (let j = i; j <= n; ++j) newArr.push([i, j]);
    return newArr;
  }