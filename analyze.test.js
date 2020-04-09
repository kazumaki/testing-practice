import analyze from './analyze';

test('analyze([2, 2, 2, 2]) should be equal to {average: 2, min: 2, max: 2, length: 4}', () => {
  expect(analyze([2, 2, 2, 2])).toEqual({average: 2, min: 2, max: 2, length: 4});
}); 

test('analyze([4, 2, 2, 2]) should be not be equal to {average: 2, min: 2, max: 2, length: 4}', () => {
  expect(analyze([4, 2, 2, 2])).not.toEqual({average: 2, min: 2, max: 2, length: 4});
});

test('analyze([1,8,3,4,2,6]) should be equal to {average: 4, min: 1, max: 8, length: 6}', () => {
  expect(analyze([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
}); 

test('analyze([1,8,3,4,2,6]) should not be equal to {average: 7, min: 3, max: 20, length: 2}', () => {
  expect(analyze([1,8,3,4,2,6])).not.toEqual({average: 7, min: 3, max: 20, length: 2});
}); 