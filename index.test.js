import { sum } from ".";
import {assert} from 'chai'

describe('Test for index', () => {
  describe('sum', () => {
    it('should return sum of two numbers', () => {
      const actual = sum(1, 2)
      const expected = 3
      assert.deepEqual(actual, expected)
    })
  })
})
