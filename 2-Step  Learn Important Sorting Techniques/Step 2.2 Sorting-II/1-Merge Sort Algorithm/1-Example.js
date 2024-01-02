function merge(arr, low, mid, high) {
    let temp = []; // temporary array
    let left = low; // starting index of left half of arr
    let right = mid + 1; // starting index of right half of arr

    // storing elements in the temporary array in a sorted manner
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    // if elements on the left half are still left
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // if elements on the right half are still left
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // transferring all elements from temporary to arr
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid); // left half
    mergeSort(arr, mid + 1, high); // right half
    merge(arr, low, mid, high); // merging sorted halves
}

// Example usage
let arr = [9, 4, 7, 6, 3, 1, 5];
let n = arr.length;

console.log(`After Sorting Array : ${arr.join(" ")}`);

mergeSort(arr, 0, n - 1);

console.log(`After Sorting Array : ${arr.join(" ")}`);