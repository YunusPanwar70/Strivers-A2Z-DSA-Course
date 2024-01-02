function bubbleSort(arr) {

    const n = arr.length;
    for (let i = n; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(`After Using insertion Sort : ${arr.join(" ")}`);
};

const arr = [13, 46, 24, 52, 20, 9];
console.log(`Before Using insertion Sort : ${arr.join(" ")}`);
bubbleSort(arr);