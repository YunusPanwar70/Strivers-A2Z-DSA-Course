function bubbleSort(arr, n) {
    // Base Case: range == 1.
    if (n === 1) return;

    for (let j = 0; j <= n - 2; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }

    // Range reduced after recursion:
    bubbleSort(arr, n - 1);
}

// Example usage
let arr = [13, 46, 24, 52, 20, 9];
let n = arr.length;

console.log(`Before Sorting Array : ${arr.join(" ")}`);


bubbleSort(arr, n);

console.log(`After Sorting Array : ${arr.join(" ")}`);