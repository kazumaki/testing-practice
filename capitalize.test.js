import capitalize from './capitalize';

test('vinicius capitalize should be Vinicius', () => {
  expect(capitalize('vinicius')).toBe('Vinicius');
})

test('jaak capitalize should not be jaak', () => {
  expect(capitalize('jaak')).not.toBe('jaak');
})