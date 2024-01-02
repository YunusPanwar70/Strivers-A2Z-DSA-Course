function bubbleSort(arr, n) {
    if (n === 1) return;

    for (let j = 0; j <= n - 2; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }
    bubbleSort(arr, n - 1);
}

let arr = [5, 4, 3, 2, 1];
let n = arr.length;

console.log(`Before Sorting Array : ${arr.join(" ")}`);

bubbleSort(arr, n);

console.log(`After Sorting Array : ${arr.join(" ")}`);