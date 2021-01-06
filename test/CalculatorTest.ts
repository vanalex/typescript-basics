import Calculator from '../src/Calculator'
import { expect } from 'chai'

describe('Calculator', () => {
  it('should add two numbers together', () => {
    const calc: Calculator = new Calculator()
    expect(calc.add(2, 3)).to.equal(5)
  })
})