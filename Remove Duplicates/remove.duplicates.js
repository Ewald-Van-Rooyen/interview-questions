const removeDuplicates = (array, options) => {
    if (options === 0) {
        return bruteForceDuplicateRemoval(array);
    } else if (options === 1) {
        return javaScriptDuplicateRemoval(array);
    } else {
        return pointerApproachDuplicateRemoval(array);
    }

};

const bruteForceDuplicateRemoval = (array) => {
    const cleansedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!cleansedArray.includes(array[i])) {
            cleansedArray.push(array[i]);
        }
    }
    return cleansedArray;
};

const javaScriptDuplicateRemoval = (array) => {
    return [...new Set(array)];
};

const pointerApproachDuplicateRemoval = (array) => {
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        if (i === 0 || array[i] !== array[i - 1]) {
            array[index] = array[i];
            index++;
        }
    }
    return array.slice(0,index);
};

module.exports = removeDuplicates;