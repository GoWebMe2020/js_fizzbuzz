class FizzBuzz {

  _isDivisibleBy(divisor, number) {
    return number % divisor === 0
  }

  play(num) {
    if (this._isDivisibleBy(15, num)) {
      return 'FizzBuzz'
    } else if (this._isDivisibleBy(5, num)) {
      return 'Buzz'
    } else if (this._isDivisibleBy(3, num)) {
      return 'Fizz'
    } else {
      return num
    }
  }

}