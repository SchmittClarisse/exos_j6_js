const computePowerIt = (n, p) => {
    if(n===0 || p===0) return 0;
    else{
    let result = 1
    for (let i = 1; i <= p; i++){
    result = result * p}
    return result;}
}
console.log(computePowerIt(5,5))


const computePowerRec = (n, p) => {
    if(n===0 || p===0)
        return 1
    else
        return n * computePowerRec(n,p-1)
}
console.log(computePowerRec(5,5))