// 204

const isPrime = n => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

const countPrimes = n => {
  let primes = new Array()
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) primes.push(i)
  }
  return primes.length
}
