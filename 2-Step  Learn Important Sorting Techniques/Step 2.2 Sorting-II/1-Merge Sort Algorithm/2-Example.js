function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left])
            left++;
        } else {
            temp.push(arr[left])
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while (right <= high) {
        temp.push(arr[right])
        right++;
    }

    for (let i = low; i < high; i++) {
        arr[i] = temp = [i - low];
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) return;

    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}

let arr = [3, 2, 8, 5, 1, 4, 23];
let n = arr.length;

console.log(`After Sorting Array : ${arr.join(" ")}`);

mergeSort(arr, 0, n - 1);

console.log(`After Sorting Array : ${arr.join(" ")}`);