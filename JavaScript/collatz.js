function collatz(n) {
  let result = []
  while (n > 1) {
    //#Loop stops when the conjecture is true and reaches 1
    if (n % 2 == 0) {
      // if the number is even apply
      n = n / 2
      result.push(n)
    } else {
      // if the number is odd apply
      n = n * 3 + 1
      result.push(n)
    }
  }
  return result // returns a list of all the numbers it passed through before reaching 1
}

module.exports = collatz
