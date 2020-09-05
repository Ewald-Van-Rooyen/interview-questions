const twoSum = (array, targetSum, isBruteForce) => {
    if (isBruteForce) {
        return bruteForce(array, targetSum);
    } else {
        return twoPointers(array, targetSum);
    }
};

/**
 * O(n^2) time complexity
 * O(1) constant space complexity
 * @param array
 * @param targetSum
 * @returns {[number, number]|[]}
 */
const bruteForce = (array, targetSum) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const currentSum = array[i] + array[j];
            if (currentSum === targetSum) {
                return [i, j];
            }
        }
    }
    return [];
};

/**
 * O(n) linear time complexity
 * O(1) space complexity
 * @param array
 * @param targetSum
 * @returns {[number, number]}
 */
const twoPointers = (array, targetSum) => {

    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [left, right];
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right++;
        }
    }

    return [];
};

module.exports = twoSum;