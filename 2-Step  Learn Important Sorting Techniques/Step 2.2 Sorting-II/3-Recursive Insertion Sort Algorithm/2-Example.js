function insertionSort(arr, i, n) {
    if (i === n) return;

    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp
        j--;
    }
    insertionSort(arr, i + 1, n);
}

let arr = [5, 4, 3, 2, 1];
let n = arr.length;

console.log(`Before Sorting Array : ${arr.join(" ")}`);

insertionSort(arr, 0, n);

console.log(`After Sorting Array : ${arr.join(" ")}`);