const twoSum = require('./two.sum');
const {expect} = require("@jest/globals");

const array = [1, 2, 3, 5, 6, 7, 8];
const sum = 10;

test("That the return value for the two sum brute force approach is [1,6]", () => {
    const twoSumBruteForceIndexes = twoSum(array, sum, true);
    expect(twoSumBruteForceIndexes).toEqual([1, 6]);
});

test("That the return value for the two sum two pointers approach is [1,6]", () => {
    const twoSumTwoPointersIndexes = twoSum(array, sum, true);
    expect(twoSumTwoPointersIndexes).toEqual([1, 6]);
});


