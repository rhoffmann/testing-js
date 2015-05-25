numbers = require '../src/numbers'

describe 'the numbers module', ->
  describe 'the add method', ->
    it 'should add two numbers', ->
      # arranage

      # act
      output = numbers.add(3, 5)

      # assert
      expect(output).toEqual 8
      expect(output).not.toEqual 10

    it 'should add multiple arguments', ->
      output = numbers.add(1, 2, 3, 4, 5)
      expect(output).toEqual 15

      output = numbers.add(-1, -2, -3, -4, -5, 1, 2, 3, 4, 5)
      expect(output).toEqual 0


  describe 'the mult method', ->
    it 'should multiply two numbers', ->
      output = numbers.mult(4, 5)
      expect(output).toEqual 20

    it 'should be zero when operand is zero', ->
      output = numbers.mult(1, 53402, 342, 0)
      expect(output).toEqual 0

    it 'should should accept multiple arguments', ->
      output = numbers.mult(1, 4, 7, 2, 4)
      expect(output).toEqual 224


