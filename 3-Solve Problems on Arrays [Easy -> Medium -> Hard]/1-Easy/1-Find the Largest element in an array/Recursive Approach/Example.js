function sortArr(arr) {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1];
}

const arr1 = [2, 5, 1, 3, 0];
const arr2 = [8, 10, 5, 7, 9];

console.log(`The Largest element in the array is:  ${sortArr(arr1)}`);
console.log(`The Largest element in the array is:  ${sortArr(arr2)}`);