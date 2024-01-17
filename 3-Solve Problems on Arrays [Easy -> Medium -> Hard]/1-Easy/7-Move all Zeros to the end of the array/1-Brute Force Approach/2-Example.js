function moveZerosToFront(arr) {
    const nonNegativeIntegers = arr.filter(num => num > 0);
    const zeros = arr.filter(num => num === 0);
    const result = nonNegativeIntegers.concat(zeros);
}

const inputArray = [1, 2, 0, 1, 0, 4, 0];
const outputArray = moveZerosToFront(inputArray);

console.log(`Input Arrat ${inputArray}`);