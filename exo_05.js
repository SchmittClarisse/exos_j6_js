//tu vas devoir écrire une fonction qui va retourner le plus petit nombre premier supérieur ou égal à n.
const findSupPrime = (n) => {
    if (n<=0) return "it's not a positive number";
    if(isPrimeNumber(n)){
      return n
    }else{
      return findSupPrime(n+1)
    }
  }
  console.log(findSupPrime(12))