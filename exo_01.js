const computeFactorialIt = (x) => {
    var result = 1;
    for (var i = 1; i <= x; i++)
      result = result * i;
    return result;
  }
  
  console.log(computeFactorialIt(5)); // output : 120



  const computeFactorialRec = (x) => {
    // This is the base case.
    if (x === 0) return 1;
    // This is the recursive one.
    else return x * computeFactorialRec(x - 1);
  }
  
  console.log(computeFactorialRec(5)); // output : 120