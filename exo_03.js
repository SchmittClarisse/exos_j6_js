//Pour cet exercice, tu vas devoir écrire une fonction qui retourne la racine carrée d'un nombre. 
//Babylone method voir https://gist.github.com/joelpt/3824024
const computeSquareRoot = (n, x) => {
    if (!x) {
        x = n / 2.0;
    }
    var d = n / x;              
    var nx = (d + x) / 2.0;
    if (x == nx) {          
        return x;
    }
    return computeSquareRoot(n, nx);  
}

console.log(computeSquareRoot(132))
