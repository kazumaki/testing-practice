import calculator from './calculator';

test('Add 2 + 2 should be equal 4', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('Add 1 + 1 should not be equal to 4', () => {
  expect(calculator.add(1, 1)).not.toBe(4);
});

test('Subtract 4 - 2 should be equal to 2', () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test('Subtract 2 - 2 should not be equal to 2', () => {
  expect(calculator.subtract(2, 2)).not.toBe(2);
});

test('Divide 4 / 2 should be equal to 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('Divide 2 / 2 should not be equal to 2', () => {
  expect(calculator.divide(2, 2)).not.toBe(2);
});

test('Multiply 4 * 2 should be equal to 8', () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test('Multiply 2 * 2 should not be equal to 2', () => {
  expect(calculator.multiply(2, 2)).not.toBe(2);
});