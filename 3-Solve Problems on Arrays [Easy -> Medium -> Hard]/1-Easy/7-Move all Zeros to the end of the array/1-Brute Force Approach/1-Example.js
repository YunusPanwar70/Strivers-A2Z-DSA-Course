function moveZerosToFront(arr) {
    const nonNegativeIntegers = arr.filter(num => num >= 0);
    const zeros = arr.filter(num => num === 0);
    const result = nonNegativeIntegers.concat(zeros);
    return result;
}

// Example usage
const inputArray = [1, 0, 2, 3, 0, 4, 0, 1];
const outputArray = moveZerosToFront(inputArray);

console.log(`Input Arrat ${inputArray}`);
console.log(`outputArray ${outputArray}`);