function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++
        }
        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}

let arr = [4, 1, 7, 9, 3];
let n = arr.length;

console.log(`Before Sorting Array : ${arr.join(" ")}`);
quickSort(arr, 0, n - 1);
console.log(`After Sorting Array : ${arr.join(" ")}`);