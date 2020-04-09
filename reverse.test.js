import reverseString from './reverse';

test('reverseString("Vinicius") should be "suiciniV"', () => {
  expect(reverseString('Vinicius')).toBe('suiciniV');
})

test('jaak capitalize should not be jaak', () => {
  expect(reverseString('jaak')).not.toBe('jaak');
})