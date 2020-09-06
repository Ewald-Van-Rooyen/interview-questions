const {expect} = require("@jest/globals");
const removeDuplicates = require("./remove.duplicates");

const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const cleansedArray = [0, 1, 2, 3, 4];

test("Test the removal of duplicates from array using brute force approach", () => {
    expect(removeDuplicates(array,0)).toEqual(cleansedArray);
});

test("Test the removal of duplicates from array using JavaScript native functions", () => {
    expect(removeDuplicates(array,1)).toEqual(cleansedArray);
});

test("Test the removal of duplicates from array using two pointers", () => {
    expect(removeDuplicates(array,2)).toEqual(cleansedArray);
});