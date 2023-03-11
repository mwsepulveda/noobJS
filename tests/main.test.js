const reverseString = require('../src/reverseString.js');
const bucketSort = require('../src/bucketSort.js');
const mergeSort = require('../src/mergeSort.js');
const subsets = require('../src/subsets.js');
const permute = require('../src/permute.js');

test('properly reverses string "racecar"', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('properly bucketSort [1,2,1,3,1,2]', () => {
  expect(bucketSort([1, 2, 1, 3, 1, 2])).toEqual([1, 1, 1, 2, 2, 3]);
});

test('properly mergeSort [5,4,3,2,1]', () => {
  expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

test('properly returns all subsets of [1,2,3]', () => {
  expect(subsets([1, 2, 3])).toEqual([
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 3],
    [2],
    [2, 3],
    [3],
  ]);
});

test('properly returns all permutations of [1,2,3]', () => {
  expect(permute([1, 2, 3])).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]);
});

test('integration test to call permute on bucketSorted [3,2,1] and compare to permute on [1,2,3]', () => {
  expect(permute(bucketSort([3, 2, 1]))).toEqual(permute([1, 2, 3]));
});
