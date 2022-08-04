function isPrime(num) {
  for(let i=2; i < num; i++) {
      if(num%i === 0) {
          return false;
      };
    }
  return num 
}

function getPrime(num) {
  let primes=[];
  for(let i=2; i <= num; i++) {
      if( isPrime(i) ) {
      primes.push(i);
  }}
     return primes;
}
console.log( getPrime(120) );
