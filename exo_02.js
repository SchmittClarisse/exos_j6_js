//Écris une fonction itérative qui retourne son premier argument à la puissance p, où p est le second argument. En cas d'erreur, la fonction doit retourner 0. 
const computePowerIt = (n, p) => {
    if (p === 0) return 1;
    else if (n === 0) return 0;
    else {
        let result = 1
        for(let i=1;i<=p;i++){
          result = result * p
        }
        return result 
    }
}

console.log(computePowerIt(5,5))

//Même exercice (et oui, encore...) en utilisant la récursivité !
const computePowerRec = (n, p) => {
    if(n===0 || p===0)
        return 1
    else
        return n * computePowerRec(n,p-1)
}
console.log(computePowerRec(5,5))