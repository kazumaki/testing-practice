import cipher from './cipher';

test('cipher.encryptString("abcdefghijklmnopqrstuvwxyz") should be "cdefghijklmnopqrstuvwxyzab"', () => {
  expect(cipher.encryptString('abcdefghijklmnopqrstuvwxyz')).toBe('cdefghijklmnopqrstuvwxyzab');
})

test('cipher.encryptString("abcdefghijklmnopqrstuvwxyz") should be "CDEFGHIJKLMNOPQRSTUVWXYZAB"', () => {
  expect(cipher.encryptString('abcdefghijklmnopqrstuvwxyz')).not.toBe('CDEFGHIJKLMNOPQRSTUVWXYZAB');
})

test('cipher.encryptString("abcdefghi.jklmnopqrstuvwxyz") should be "cdefghijk.lmnopqrstuvwxyzab"', () => {
  expect(cipher.encryptString('abcdefghi.jklmnopqrstuvwxyz')).toBe('cdefghijk.lmnopqrstuvwxyzab');
})

test('cipher.decryptString("cdefghijklmnopqrstuvwxyzab") should be "abcdefghijklmnopqrstuvwxyz"', () => {
  expect(cipher.decryptString('cdefghijklmnopqrstuvwxyzab')).toBe('abcdefghijklmnopqrstuvwxyz');
})

test('cipher.decryptString"cdefghijk.lmnopqrstuvwxyzab") should be "abcdefghi.jklmnopqrstuvwxyz"', () => {
  expect(cipher.decryptString('cdefghijk.lmnopqrstuvwxyzab')).toBe('abcdefghi.jklmnopqrstuvwxyz');
})