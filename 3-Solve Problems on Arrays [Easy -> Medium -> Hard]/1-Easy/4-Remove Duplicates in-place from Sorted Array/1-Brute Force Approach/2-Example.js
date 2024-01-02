function removeDuplicates(arr) {
    let set = new Set(arr);
    let uniqueArr = Array.from(set);
    for (let i = 0; i < uniqueArr.length; i++) {
        arr[i] = uniqueArr[i];
    }
    return uniqueArr.length;
}

const arr = [1, 2, 3, 4, 4, 3, 2, 1, 5, 6, 7];
const k = removeDuplicates(arr);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k; i++) {
    console.log(arr[i]);
}