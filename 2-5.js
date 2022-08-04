function isPrime(n) {
  if(n<2) {
      return `${n} это не просто число`
 }
    for (let k = 2; k < n; k++) {
      if (n%k === 0) {
      return `${n} это не простое число`
  }
 }
    return `${n} это просто число`
}
console.log(isPrime(5))