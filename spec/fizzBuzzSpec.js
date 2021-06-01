describe('FizzBuzz', () => {

  let fizzbuzz

  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  })

  describe('multiples of 3', () => {
    it('fizzes for 3', () => {
      expect(fizzbuzz.play(3)).toEqual('Fizz')
    });
  });

  describe('multiples of 5', () => {
    it('buzzes for 5', () => {
      expect(fizzbuzz.play(5)).toEqual('Buzz')
    });
  });

  describe('multiples of 3 & 5', () => {
    it('FizzBuzzes for 15', () => {
      expect(fizzbuzz.play(15)).toEqual('FizzBuzz')
    });
  });

  describe('number not a multiple of 3 or 5', () => {
    it('Returns the number 7', () => {
      expect(fizzbuzz.play(7)).toEqual(7)
    })
  })

  describe('higher multiples of 3', () => {
    it('Fizzes on 21', () => {
      expect(fizzbuzz.play(21)).toEqual('Fizz')
    })
  })

  describe('higher multiples of 5', () => {
    it('Buzzes on 50', () => {
      expect(fizzbuzz.play(50)).toEqual('Buzz')
    })
  })

  describe('FizzBuzz all the numbers from 1 - 100', () => {
    it('Prints all numbes to the console', () => {
      for (let i = 1; i <= 100; i++) {
        console.log(fizzbuzz.play(i));
      }
    })
  })

});