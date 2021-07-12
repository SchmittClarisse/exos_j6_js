//Dans cet exercice, tu vas devoir écrire une fonction qui retourne true si n est un nombre premier et false s'il ne l'est pas.
const isPrimeNumber = (n) => {
    for (let i = 2; i < n; i++){
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log(isPrimeNumber(6))